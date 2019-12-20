import { Injectable, ComponentRef, Inject, Type } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Subscription } from 'rxjs';

import { InjectionService } from '../../services/injection.service';
import { InjectionRegisteryService, PartialBindings } from '../../services/injection-registery.service';

import { NotificationType } from './notification.type';
import { NotificationStyleType } from './notification-style.type';
import { NotificationPermissionType } from './notification-permission.type';
import { NotificationComponent } from './notification.component';
import { NotificationContainerComponent } from './notification-container.component';

interface NotificationOptions { 
  timeout: number | boolean;
  rateLimit: boolean;
  pauseOnHover: boolean;
  type: NotificationType;
  styleType: NotificationStyleType;
  showClose: boolean;
  sound: boolean;
  title: string;
  body: string;
  timestamp: number;
};

@Injectable()
export class NotificationService extends InjectionRegisteryService<NotificationComponent> {
  static limit: number | boolean = 10;

  defaults: any = {
    inputs: {
      timeout: 3000,
      rateLimit: true,
      pauseOnHover: true,
      type: NotificationType.html,
      styleType: NotificationStyleType.none,
      showClose: true,
      sound: false
    }
  };

  permission: NotificationPermissionType | string;
  type: any = NotificationComponent;
  container: any;

  get isNativeSupported(): boolean {
    return 'Notification' in window;
  }

  constructor(injectionService: InjectionService, @Inject(DOCUMENT) private document: any) {
    super(injectionService);
  }

  create(bindings: NotificationOptions): ComponentRef<NotificationComponent> {
    // verify flood not happening
    if (bindings.rateLimit && this.isFlooded(bindings)) {
      return;
    }

    // if limit reached, remove the first one
    const compsByType = this.getByType();
    if (compsByType && compsByType.length >= NotificationService.limit) {
      this.destroy(compsByType[0]);
    }

    // native notifications need to be invoked
    let component: ComponentRef<NotificationComponent>;
    if (bindings.type === NotificationType.native) {
      component = this.showNative(bindings);
    } else {
      component = super.create(bindings);
      this.createSubscriptions(component);
    }

    // start timer for notification
    this.startTimer(component);

    return component;
  }

  startTimer(component: ComponentRef<NotificationComponent>): void {
    if (component.instance && component.instance.timeout !== false) {
      clearTimeout(component.instance.timer);

      component.instance.timer = setTimeout(() => {
        this.destroy(component);
      }, component.instance.timeout);
    }
  }

  pauseTimer(component: ComponentRef<NotificationComponent>): void {
    clearTimeout(component.instance.timer);
  }

  requestPermissions(): void {
    if (this.isNativeSupported) {
      Notification.requestPermission(status => (this.permission = status));
    }
  }

  assignDefaults(options: NotificationOptions): PartialBindings {
    const bindings = super.assignDefaults(options as any);

    if (bindings.inputs && bindings.inputs.timeout === true) {
      bindings.inputs.timeout = this.defaults.inputs.timeout;
    }

    // add a timestamp for flood checks
    bindings.inputs.timestamp = +new Date();

    return bindings;
  }

  injectComponent(type: Type<NotificationContainerComponent>, options: PartialBindings): ComponentRef<any> {
    if (!this.container || !this.document.contains(this.container.location.nativeElement)) {
      this.container = this.injectionService.appendComponent(NotificationContainerComponent);
    }

    return this.injectionService.appendComponent(type, options, this.container);
  }

  createSubscriptions(component: ComponentRef<NotificationComponent>): any {
    let pauseSub: Subscription;
    let resumeSub: Subscription;
    let closeSub: Subscription;

    const kill = () => {
      if (closeSub) closeSub.unsubscribe();
      if (resumeSub) resumeSub.unsubscribe();
      if (pauseSub) pauseSub.unsubscribe();

      this.destroy(component);
    };

    const pause = () => {
      this.pauseTimer(component);
    };

    const resume = () => {
      this.startTimer(component);
    };

    pauseSub = component.instance.pause.subscribe(pause);
    resumeSub = component.instance.resume.subscribe(resume);
    closeSub = component.instance.close.subscribe(kill);
  }

  isFlooded(options: NotificationOptions): boolean {
    const compsByType = this.getByType();

    for (const notification of compsByType) {
      const instance = notification.instance;

      if (
        instance.title === options.title &&
        instance.body === options.body &&
        instance.timestamp + 1000 > options.timestamp
      ) {
        return true;
      }
    }

    return false;
  }

  showNative(options: NotificationOptions): any {
    if (!this.isNativeSupported) return;
    if (!this.permission) this.requestPermissions();
    if (this.permission === NotificationPermissionType.denied) return;

    const note = new Notification(options.title, options);

    note.onerror = () => {
      console.error('Notification failed!', options);
    };

    // manually do this
    if (options && typeof options.timeout === 'number') {
      setTimeout(note.close.bind(note), options.timeout);
    }

    return note;
  }
}
