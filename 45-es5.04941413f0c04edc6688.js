!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Qhu6:function(e,i,l){"use strict";l.r(i),l.d(i,"SliderPageModule",function(){return F});var t,r,c,s=l("ofXK"),d=l("3Pt+"),a=l("8lIJ"),o=l("alW4"),g=l("tyNb"),u=l("fXoL"),b=l("LMvA"),p=[{path:"",component:(t=function e(){n(this,e),this.sliderValue=85,this.sliderValues="45,85"},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u.Fb({type:t,selectors:[["app-slider-page"]],decls:133,vars:84,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],[3,"ngModel","step","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","min","max","ngModelChange","change"],[3,"ngModel","step","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","showTicks","tickStep","orientation","filled","min","max","ngModelChange","change"],[3,"ngModel","step","filled","min","orientation","max","ngModelChange","change"],[3,"ngModel","step","showTicks","filled","orientation","min","max","ngModelChange","change"],[3,"ngModel","multiple","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","orientation","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","step","filled","min","max","ngModelChange","change"],[3,"ngModel","multiple","disabled","orientation","step","filled","min","max","ngModelChange","change"]],template:function(n,e){1&n&&(u.Rb(0,"h3",0),u.Fc(1,"Slider"),u.Qb(),u.Fc(2,"\n\n"),u.Rb(3,"ngx-section",1),u.Fc(4,"\n  "),u.Rb(5,"ngx-slider",2),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent1=n}),u.Fc(6,"\n  "),u.Qb(),u.Fc(7,"\n\n  "),u.Rb(8,"app-prism"),u.Fc(9,"\n"),u.Fc(10,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),u.Fc(11,"\n  "),u.Qb(),u.Fc(12,"\n\n  "),u.Mb(13,"br"),u.Fc(14,"\n\n  "),u.Rb(15,"ngx-slider",3),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent2=n}),u.Fc(16,"\n  "),u.Qb(),u.Fc(17,"\n\n  "),u.Rb(18,"app-prism"),u.Fc(19,"\n"),u.Fc(20,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent2 = $event">\n</ngx-slider>'),u.Fc(21,"\n  "),u.Qb(),u.Fc(22,"\n\n  "),u.Mb(23,"br"),u.Fc(24,"\n\n  "),u.Rb(25,"ngx-slider",2),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent3=n}),u.Fc(26,"\n  "),u.Qb(),u.Fc(27,"\n\n  "),u.Rb(28,"app-prism"),u.Fc(29,"\n"),u.Fc(30,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent3 = $event">\n</ngx-slider>'),u.Fc(31,"\n  "),u.Qb(),u.Fc(32,"\n\n  "),u.Mb(33,"br"),u.Fc(34,"\n\n  "),u.Rb(35,"ngx-slider",4),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent4=n}),u.Fc(36,"\n  "),u.Qb(),u.Fc(37,"\n\n  "),u.Rb(38,"app-prism"),u.Fc(39,"\n"),u.Fc(40,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent4 = $event">\n</ngx-slider>'),u.Fc(41,"\n  "),u.Qb(),u.Fc(42,"\n"),u.Qb(),u.Fc(43,"\n\n"),u.Rb(44,"ngx-section",1),u.Fc(45,"\n  "),u.Rb(46,"ngx-slider",5),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent5=n}),u.Fc(47,"\n  "),u.Qb(),u.Fc(48,"\n\n  "),u.Rb(49,"app-prism"),u.Fc(50,"\n"),u.Fc(51,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="true"\n  [orientation]="\'vertical\'"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),u.Fc(52,"\n  "),u.Qb(),u.Fc(53,"\n\n  "),u.Mb(54,"br"),u.Fc(55,"\n\n  "),u.Rb(56,"ngx-slider",6),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent6=n}),u.Fc(57,"\n  "),u.Qb(),u.Fc(58,"\n\n  "),u.Rb(59,"app-prism"),u.Fc(60,"\n"),u.Fc(61,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [orientation]="\'vertical\'"\n  [showTicks]="true"\n  [tickStep]="25"\n  [filled]="true"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent6 = $event">\n</ngx-slider>'),u.Fc(62,"\n  "),u.Qb(),u.Fc(63,"\n\n  "),u.Mb(64,"br"),u.Fc(65,"\n\n  "),u.Rb(66,"ngx-slider",7),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent7=n}),u.Fc(67,"\n  "),u.Qb(),u.Fc(68,"\n\n  "),u.Rb(69,"app-prism"),u.Fc(70,"\n"),u.Fc(71,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [step]="5"\n  [filled]="false"\n  [orientation]="\'vertical\'"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent7 = $event">\n</ngx-slider>'),u.Fc(72,"\n  "),u.Qb(),u.Fc(73,"\n\n  "),u.Mb(74,"br"),u.Fc(75,"\n\n  "),u.Rb(76,"ngx-slider",8),u.Yb("ngModelChange",function(n){return e.sliderValue=n})("change",function(n){return e.sliderEvent8=n}),u.Fc(77,"\n  "),u.Qb(),u.Fc(78,"\n\n  "),u.Rb(79,"app-prism"),u.Fc(80,"\n"),u.Fc(81,'<ngx-slider\n  [(ngModel)]="sliderValue"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [showTicks]="true"\n  [filled]="false"\n  [min]="0"\n  [max]="100"\n  (change)="sliderEvent8 = $event">\n</ngx-slider>'),u.Fc(82,"\n  "),u.Qb(),u.Fc(83,"\n\n"),u.Qb(),u.Fc(84,"\n\n"),u.Rb(85,"ngx-section",1),u.Fc(86,"\n  "),u.Rb(87,"ngx-slider",9),u.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),u.Fc(88,"\n  "),u.Qb(),u.Fc(89,"\n\n  "),u.Rb(90,"app-prism"),u.Fc(91,"\n"),u.Fc(92,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),u.Fc(93,"\n  "),u.Qb(),u.Fc(94,"\n\n  "),u.Mb(95,"br"),u.Fc(96,"\n\n  "),u.Rb(97,"ngx-slider",10),u.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),u.Fc(98,"\n  "),u.Qb(),u.Fc(99,"\n\n  "),u.Rb(100,"p"),u.Fc(101),u.Qb(),u.Fc(102,"\n\n  "),u.Rb(103,"app-prism"),u.Fc(104,"\n"),u.Fc(105,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [multiple]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),u.Fc(106,"\n  "),u.Qb(),u.Fc(107,"\n\n"),u.Qb(),u.Fc(108,"\n\n"),u.Rb(109,"ngx-section",1),u.Fc(110,"\n  "),u.Rb(111,"ngx-slider",11),u.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent1=n}),u.Fc(112,"\n  "),u.Qb(),u.Fc(113,"\n\n  "),u.Rb(114,"app-prism"),u.Fc(115,"\n"),u.Fc(116,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent1 = $event">\n</ngx-slider>'),u.Fc(117,"\n  "),u.Qb(),u.Fc(118,"\n\n  "),u.Mb(119,"br"),u.Fc(120,"\n\n  "),u.Rb(121,"ngx-slider",12),u.Yb("ngModelChange",function(n){return e.sliderValues=n})("change",function(n){return e.sliderEvent5=n}),u.Fc(122,"\n  "),u.Qb(),u.Fc(123,"\n\n  "),u.Rb(124,"p"),u.Fc(125),u.Qb(),u.Fc(126,"\n\n  "),u.Rb(127,"app-prism"),u.Fc(128,"\n"),u.Fc(129,'<ngx-slider\n  [(ngModel)]="sliderValues"\n  [disabled]="true"\n  [orientation]="\'vertical\'"\n  [step]="5"\n  [filled]="true"\n  [min]="10"\n  [max]="200"\n  (change)="sliderEvent5 = $event">\n</ngx-slider>'),u.Fc(130,"\n  "),u.Qb(),u.Fc(131,"\n\n"),u.Qb(),u.Fc(132,"\n")),2&n&&(u.yb(3),u.ic("sectionTitle","Horizontal"),u.yb(2),u.ic("ngModel",e.sliderValue)("step",5)("filled",!0)("min",10)("max",200),u.yb(10),u.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("filled",!0)("min",0)("max",100),u.yb(10),u.ic("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("max",100),u.yb(10),u.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("min",0)("max",100),u.yb(9),u.ic("sectionTitle","Vertical"),u.yb(2),u.ic("ngModel",e.sliderValue)("step",5)("orientation","vertical")("filled",!0)("min",10)("max",200),u.yb(10),u.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("tickStep",25)("orientation","vertical")("filled",!0)("min",0)("max",100),u.yb(10),u.ic("ngModel",e.sliderValue)("step",5)("filled",!1)("min",0)("orientation","vertical")("max",100),u.yb(10),u.ic("ngModel",e.sliderValue)("step",5)("showTicks",!0)("filled",!1)("orientation","vertical")("min",0)("max",100),u.yb(9),u.ic("sectionTitle","Range"),u.yb(2),u.ic("ngModel",e.sliderValues)("multiple",!0)("step",5)("filled",!0)("min",10)("max",200),u.yb(10),u.ic("ngModel",e.sliderValues)("multiple",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),u.yb(4),u.Hc("Slider Values: ",e.sliderValues,""),u.yb(8),u.ic("sectionTitle","Disabled"),u.yb(2),u.ic("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("step",5)("filled",!0)("min",10)("max",200),u.yb(10),u.ic("ngModel",e.sliderValues)("multiple",!0)("disabled",!0)("orientation","vertical")("step",5)("filled",!0)("min",10)("max",200),u.yb(4),u.Hc("Slider Values: ",e.sliderValues,""))},directives:[a.wb,a.Eb,d.i,d.l,b.a],encapsulation:2,changeDetection:0}),t)}],m=((c=function e(){n(this,e)}).\u0275mod=u.Jb({type:c}),c.\u0275inj=u.Ib({factory:function(n){return new(n||c)},imports:[[g.g.forChild(p)],g.g]}),c),F=((r=function e(){n(this,e)}).\u0275mod=u.Jb({type:r}),r.\u0275inj=u.Ib({factory:function(n){return new(n||r)},imports:[[s.c,d.d,o.a,a.yb,a.Fb,m]]}),r)}}])}();