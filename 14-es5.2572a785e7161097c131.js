!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var c=0;c<t.length;c++){var a=t[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{VYct:function(c,a,e){"use strict";e.r(a),e.d(a,"NavbarPageModule",function(){return f});var i,o,b,r,v,g=e("ofXK"),u=e("8lIJ"),x=e("alW4"),p=e("tyNb"),m=e("fXoL"),s=e("LMvA"),F=[{path:"",component:(b=function(){function c(t){n(this,c),this.router=t,this.activeBottom=1,this.activeTop=0}var a,e,i;return a=c,(e=[{key:"activeRoute",get:function(){return"/navbar/child-1"===this.router.url?0:"/navbar/child-2"===this.router.url?1:-1}}])&&t(a.prototype,e),i&&t(a,i),c}(),b.\u0275fac=function(n){return new(n||b)(m.Lb(p.c))},b.\u0275cmp=m.Fb({type:b,selectors:[["app-navbar-page"]],decls:95,vars:4,consts:[[1,"style-header"],["sectionTitle","Navbar",1,"shadow"],[1,"navbar-page--container"],[3,"active","activeChange"],["fontIcon","apps"],["fontIcon","chart-scatter"],["fontIcon","database"],["fontIcon","commandline"],[3,"active","barAtTop","activeChange"],["navbar",""],[1,"btn","btn-default",3,"click"],[3,"active"],["routerLink","child-1"],["routerLink","child-2"]],template:function(n,t){if(1&n){var c=m.Sb();m.Rb(0,"h3",0),m.Fc(1,"Navbar"),m.Qb(),m.Fc(2,"\n\n"),m.Rb(3,"ngx-section",1),m.Fc(4,"\n  "),m.Rb(5,"h3"),m.Fc(6,"Active bar on bottom"),m.Qb(),m.Fc(7,"\n  "),m.Rb(8,"div",2),m.Fc(9,"\n    "),m.Rb(10,"ngx-navbar",3),m.Yb("activeChange",function(n){return t.activeBottom=n}),m.Fc(11,"\n      "),m.Rb(12,"ngx-navbar-item"),m.Mb(13,"ngx-icon",4),m.Qb(),m.Fc(14,"\n      "),m.Rb(15,"ngx-navbar-item"),m.Mb(16,"ngx-icon",5),m.Qb(),m.Fc(17,"\n      "),m.Rb(18,"ngx-navbar-item"),m.Mb(19,"ngx-icon",6),m.Qb(),m.Fc(20,"\n      "),m.Rb(21,"ngx-navbar-item"),m.Mb(22,"ngx-icon",7),m.Qb(),m.Fc(23,"\n    "),m.Qb(),m.Fc(24,"\n  "),m.Qb(),m.Fc(25,"\n  "),m.Mb(26,"br"),m.Fc(27,"\n  "),m.Rb(28,"app-prism"),m.Fc(29,"\n"),m.Fc(30,'<ngx-navbar [(active)]="activeBottom">\n  <ngx-navbar-item><ngx-icon fontIcon="apps"></ngx-icon></ngx-navbar-item>\n  <ngx-navbar-item><ngx-icon fontIcon="chart-scatter"></ngx-icon></ngx-navbar-item>\n  <ngx-navbar-item><ngx-icon fontIcon="database"></ngx-icon></ngx-navbar-item>\n  <ngx-navbar-item><ngx-icon fontIcon="commandline"></ngx-icon></ngx-navbar-item>\n</ngx-navbar>'),m.Fc(31,"\n    "),m.Qb(),m.Fc(32,"\n  "),m.Mb(33,"br"),m.Fc(34,"\n\n  "),m.Rb(35,"h3"),m.Fc(36,"Active bar on top"),m.Qb(),m.Fc(37,"\n  "),m.Rb(38,"div",2),m.Fc(39,"\n    "),m.Rb(40,"ngx-navbar",8,9),m.Yb("activeChange",function(n){return t.activeTop=n}),m.Fc(42,"\n      "),m.Rb(43,"ngx-navbar-item"),m.Mb(44,"ngx-icon",4),m.Qb(),m.Fc(45,"\n      "),m.Rb(46,"ngx-navbar-item"),m.Mb(47,"ngx-icon",5),m.Qb(),m.Fc(48,"\n      "),m.Rb(49,"ngx-navbar-item"),m.Mb(50,"ngx-icon",6),m.Qb(),m.Fc(51,"\n      "),m.Rb(52,"ngx-navbar-item"),m.Mb(53,"ngx-icon",7),m.Qb(),m.Fc(54,"\n    "),m.Qb(),m.Fc(55,"\n  "),m.Qb(),m.Fc(56,"\n\n  "),m.Rb(57,"button",10),m.Yb("click",function(){return m.uc(c),m.rc(41).goTo(3)}),m.Fc(58,"Activate 4th nav item"),m.Qb(),m.Fc(59,"\n  "),m.Mb(60,"br"),m.Mb(61,"br"),m.Fc(62,"\n  "),m.Rb(63,"app-prism"),m.Fc(64,"\n"),m.Fc(65,'<ngx-navbar [(active)]="activeTop" [barAtTop]="true" #navbar>\n  <ngx-navbar-item><ngx-icon fontIcon="apps"></ngx-icon></ngx-navbar-item>\n  <ngx-navbar-item><ngx-icon fontIcon="chart-scatter"></ngx-icon></ngx-navbar-item>\n  <ngx-navbar-item><ngx-icon fontIcon="database"></ngx-icon></ngx-navbar-item>\n  <ngx-navbar-item><ngx-icon fontIcon="commandline"></ngx-icon></ngx-navbar-item>\n</ngx-navbar>\n<button class="btn btn-default" (click)="navbar.goTo(3)">Activate 4th nav item</button>'),m.Fc(66,"\n    "),m.Qb(),m.Fc(67,"\n  "),m.Mb(68,"br"),m.Fc(69,"\n\n  "),m.Rb(70,"h3"),m.Fc(71,"Navbar with angular routing"),m.Qb(),m.Fc(72,"\n  "),m.Rb(73,"div",2),m.Fc(74,"\n    "),m.Rb(75,"ngx-navbar",11),m.Fc(76,"\n      "),m.Rb(77,"ngx-navbar-item",12),m.Mb(78,"ngx-icon",4),m.Qb(),m.Fc(79,"\n      "),m.Rb(80,"ngx-navbar-item",13),m.Mb(81,"ngx-icon",5),m.Qb(),m.Fc(82,"\n    "),m.Qb(),m.Fc(83,"\n  "),m.Qb(),m.Fc(84,"\n  "),m.Mb(85,"router-outlet"),m.Fc(86,"\n  "),m.Mb(87,"br"),m.Fc(88,"\n\n  "),m.Rb(89,"app-prism"),m.Fc(90,"\n"),m.Fc(91,'<ngx-navbar [active]="activeRoute">\n  <ngx-navbar-item routerLink="child-1"><ngx-icon fontIcon="apps"></ngx-icon></ngx-navbar-item>\n  <ngx-navbar-item routerLink="child-2"><ngx-icon fontIcon="chart-scatter"></ngx-icon></ngx-navbar-item>\n</ngx-navbar> <router-outlet></router-outlet>'),m.Fc(92,"\n    "),m.Qb(),m.Fc(93,"\n"),m.Qb(),m.Fc(94,"\n")}2&n&&(m.yb(10),m.ic("active",t.activeBottom),m.yb(30),m.ic("active",t.activeTop)("barAtTop",!0),m.yb(35),m.ic("active",t.activeRoute))},directives:[u.wb,u.bb,u.cb,u.F,s.a,p.d,p.h],styles:[".navbar-page--container[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }"],changeDetection:0}),b),children:[{path:"child-1",component:(o=function t(){n(this,t)},o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=m.Fb({type:o,selectors:[["app-navbar-child-component-1"]],decls:2,vars:0,template:function(n,t){1&n&&(m.Rb(0,"div"),m.Fc(1,"Child component route 1 content"),m.Qb())},encapsulation:2,changeDetection:0}),o)},{path:"child-2",component:(i=function t(){n(this,t)},i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=m.Fb({type:i,selectors:[["app-navbar-child-component2"]],decls:2,vars:0,template:function(n,t){1&n&&(m.Rb(0,"div"),m.Fc(1,"Child component route 2 content"),m.Qb())},encapsulation:2,changeDetection:0}),i)}]}],l=((v=function t(){n(this,t)}).\u0275mod=m.Jb({type:v}),v.\u0275inj=m.Ib({factory:function(n){return new(n||v)},imports:[[p.g.forChild(F)],p.g]}),v),f=((r=function t(){n(this,t)}).\u0275mod=m.Jb({type:r}),r.\u0275inj=m.Ib({factory:function(n){return new(n||r)},imports:[[g.c,x.a,u.yb,u.db,u.G,l]]}),r)}}])}();