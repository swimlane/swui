!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{r5p0:function(t,e,o){"use strict";o.r(e),o.d(e,"LoadingPageModule",function(){return F});var i,c,r,a=o("ofXK"),p=o("8lIJ"),b=o("alW4"),s=o("tyNb"),l=o("fXoL"),u=o("LMvA"),m=[{path:"",component:(i=function t(e){n(this,t),this.loadingService=e},i.\u0275fac=function(n){return new(n||i)(l.Lb(p.U))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-loading-page"]],decls:62,vars:3,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],["type","button",3,"click"],["label","Markup"],["label","TypeScript"],["language","js"]],template:function(n,t){1&n&&(l.Rb(0,"h3",0),l.Fc(1,"Loading Bar"),l.Qb(),l.Fc(2,"\n"),l.Rb(3,"ngx-section",1),l.Fc(4,"\n  "),l.Rb(5,"button",2),l.Yb("click",function(){return t.loadingService.start()}),l.Fc(6,"Start"),l.Qb(),l.Fc(7,"\n  "),l.Rb(8,"button",2),l.Yb("click",function(){return t.loadingService.stop()}),l.Fc(9,"Stop"),l.Qb(),l.Fc(10,"\n  "),l.Rb(11,"button",2),l.Yb("click",function(){return t.loadingService.reset()}),l.Fc(12,"Reset"),l.Qb(),l.Fc(13,"\n  "),l.Rb(14,"button",2),l.Yb("click",function(){return t.loadingService.complete()}),l.Fc(15,"Complete"),l.Qb(),l.Fc(16,"\n\n  "),l.Mb(17,"br"),l.Fc(18,"\n  "),l.Mb(19,"br"),l.Fc(20,"\n\n  "),l.Rb(21,"ngx-tabs"),l.Fc(22,"\n    "),l.Rb(23,"ngx-tab",3),l.Fc(24,"\n      "),l.Rb(25,"app-prism"),l.Fc(26,"\n"),l.Fc(27,'<button type="button" (click)="loadingService.start()">Start</button>\n<button type="button" (click)="loadingService.stop()">Stop</button>\n<button type="button" (click)="loadingService.reset()">Reset</button>\n<button type="button" (click)="loadingService.complete()">Complete</button>'),l.Fc(28,"\n      "),l.Qb(),l.Fc(29,"\n    "),l.Qb(),l.Fc(30,"\n    "),l.Rb(31,"ngx-tab",4),l.Fc(32,"\n      "),l.Rb(33,"app-prism",5),l.Fc(34,"\n"),l.Fc(35,"import { LoadingService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public loadingService: LoadingService) { }\n}"),l.Fc(36,"\n      "),l.Qb(),l.Fc(37,"\n    "),l.Qb(),l.Fc(38,"\n  "),l.Qb(),l.Fc(39,"\n"),l.Qb(),l.Fc(40,"\n\n"),l.Rb(41,"ngx-section",1),l.Fc(42,"\n  "),l.Rb(43,"p"),l.Fc(44,"Integrate with ui-router state transitions"),l.Qb(),l.Fc(45,"\n\n  "),l.Rb(46,"app-prism",5),l.Fc(47,"\n"),l.Fc(48,"import { Component } from '@angular/core';\nimport { TransitionService } from 'ui-router-ng2';\nimport { LoadingService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  template: `\n    <main>\n      <ui-view></ui-view>\n    </main>\n  `\n})\nexport class AppComponent {\n\n  constructor(transitionService: TransitionService, loadingService: LoadingService) {\n    transitionService.onStart({ to: '*' }, () => {\n      loadingService.start();\n    });\n\n    transitionService.onFinish({ to: '*' }, () => {\n      loadingService.complete();\n    });\n  }\n\n}"),l.Fc(49,"\n  "),l.Qb(),l.Fc(50,"\n"),l.Qb(),l.Fc(51,"\n\n"),l.Rb(52,"ngx-section",1),l.Fc(53,"\n  "),l.Rb(54,"p"),l.Fc(55,"Integrate with Angular Router transitions"),l.Qb(),l.Fc(56,"\n\n  "),l.Rb(57,"app-prism",5),l.Fc(58,"\n"),l.Fc(59,"import { Component } from '@angular/core';\nimport { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';\nimport { LoadingService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  template: `\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  `\n})\nexport class AppComponent {\n  constructor(router: Router) {\n    router.events.subscribe((event: Event) => {\n      if(event instanceof NavigationStart) {\n        loadingService.start();\n      } else if(event instanceof NavigationEnd) {\n        loadingService.complete();\n        drawerService.destroyAll();\n      }\n    });\n  }\n}"),l.Fc(60,"\n  "),l.Qb(),l.Fc(61,"\n"),l.Qb()),2&n&&(l.yb(3),l.ic("sectionTitle","Demo"),l.yb(38),l.ic("sectionTitle","UI Router"),l.yb(11),l.ic("sectionTitle","Angular Router"))},directives:[p.wb,p.Qb,p.Pb,u.a],encapsulation:2,changeDetection:0}),i)}],g=((r=function t(){n(this,t)}).\u0275mod=l.Jb({type:r}),r.\u0275inj=l.Ib({factory:function(n){return new(n||r)},imports:[[s.g.forChild(m)],s.g]}),r),F=((c=function t(){n(this,t)}).\u0275mod=l.Jb({type:c}),c.\u0275inj=l.Ib({factory:function(n){return new(n||c)},imports:[[a.c,b.a,p.yb,p.Rb,g]]}),c)}}])}();