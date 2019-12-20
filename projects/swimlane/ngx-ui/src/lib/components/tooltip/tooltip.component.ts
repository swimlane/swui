import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

import { AlignmentTypes } from './alignment.type';
import { PlacementTypes } from '../../utils/position/placement.type';
import { StyleTypes } from './style.type';

import { PositionHelper } from '../../utils/position/position';
import { throttleable } from '../../utils/throttle';

@Component({
  selector: 'ngx-tooltip-content',
  templateUrl: './tooltip.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipContentComponent implements AfterViewInit {
  @ViewChild('caretElm', { static: true }) caretElm: ElementRef<HTMLSpanElement>;
  @Input() host: ElementRef<any>;
  @Input() type: StyleTypes;
  @Input() placement: PlacementTypes;
  @Input() alignment: AlignmentTypes;
  @Input() cssClass: string;
  @Input() title: string;
  @Input() template: TemplateRef<any>;
  @Input() context: any;

  get showCaret() {
    return this._showCaret;
  }
  @Input()
  set showCaret(val: boolean) {
    this._showCaret = coerceBooleanProperty(val);
  }

  get spacing() {
    return this._spacing;
  }
  @Input()
  set spacing(val: number) {
    this._spacing = coerceNumberProperty(val);
  }

  private _spacing: number;
  private _showCaret: boolean;

  @HostBinding('class')
  get cssClasses(): string {
    let clz = 'ngx-tooltip-content';
    clz += ` position-${this.placement}`;
    clz += ` type-${this.type}`;
    clz += ` ${this.cssClass}`;
    return clz;
  }

  constructor(public element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(this.position.bind(this));
  }

  position(): void {
    const nativeElm = this.element.nativeElement;
    const hostDim = this.host.nativeElement.getBoundingClientRect();

    // if no dims were found, never show
    if (!hostDim.height && !hostDim.width) return;

    const elmDim = nativeElm.getBoundingClientRect();
    this.checkFlip(hostDim, elmDim);
    this.positionContent(nativeElm, hostDim, elmDim);

    if (this.showCaret) {
      this.positionCaret(hostDim, elmDim);
    }

    // animate its entry
    setTimeout(() => this.renderer.addClass(nativeElm, 'animate'), 1);
  }

  positionContent(nativeElm, hostDim, elmDim): void {
    const { top, left } = PositionHelper.positionContent(this.placement, elmDim, hostDim, this.spacing, this.alignment);

    this.renderer.setStyle(nativeElm, 'top', `${top}px`);
    this.renderer.setStyle(nativeElm, 'left', `${left}px`);
  }

  positionCaret(hostDim, elmDim): void {
    const caretElm = this.caretElm.nativeElement;
    const caretDimensions = caretElm.getBoundingClientRect();
    const { top, left } = PositionHelper.positionCaret(
      this.placement,
      elmDim,
      hostDim,
      caretDimensions,
      this.alignment
    );

    this.renderer.setStyle(caretElm, 'top', `${top}px`);
    this.renderer.setStyle(caretElm, 'left', `${left}px`);
  }

  checkFlip(hostDim, elmDim): void {
    this.placement = PositionHelper.determinePlacement(this.placement, elmDim, hostDim, this.spacing, this.alignment);
  }

  @HostListener('window:resize')
  @throttleable(100)
  onWindowResize(): void {
    this.position();
  }
}
