(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{oNX0:function(n,e,i){"use strict";i.r(e),i.d(e,"SplitPageModule",function(){return s});var c=i("ofXK"),t=i("3Pt+"),a=i("8lIJ"),r=i("alW4"),d=i("tyNb"),b=i("fXoL");function l(n,e){1&n&&(b.Rb(0,"div",18),b.Fc(1,"\n        "),b.Fc(2,"\n      "),b.Qb())}function o(n,e){1&n&&(b.Rb(0,"div",20),b.Fc(1,"\n        "),b.Fc(2,"\n        "),b.Rb(3,"ul"),b.Fc(4,"\n          "),b.Rb(5,"li"),b.Fc(6,"Alerts"),b.Qb(),b.Fc(7,"\n          "),b.Rb(8,"li"),b.Fc(9,"Search"),b.Qb(),b.Fc(10,"\n          "),b.Rb(11,"li"),b.Fc(12,"Admin"),b.Qb(),b.Fc(13,"\n        "),b.Qb(),b.Fc(14,"\n      "),b.Qb())}function p(n,e){1&n&&(b.Rb(0,"div",21),b.Fc(1,"\n        Fixed Sidebar\n      "),b.Qb())}const F=[{path:"",component:(()=>{class n{constructor(){this.hideAlertArea=!1,this.hideFixedSidebar=!1,this.direction="row",this.getPanelState()}panelStateChanged(){localStorage.setItem("hideAlertArea",this.hideAlertArea.toString()),localStorage.setItem("hideFixedSidebar",this.hideFixedSidebar.toString())}getPanelState(){this.hideAlertArea="true"===localStorage.getItem("hideAlertArea"),this.hideFixedSidebar="true"===localStorage.getItem("hideFixedSidebar")}toggleDirection(){this.direction="row"===this.direction?"column":"row"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=b.Fb({type:n,selectors:[["app-split-page"]],decls:113,vars:8,consts:[[1,"style-header"],["sectionTitle","Split Areas",1,"shadow"],[1,"split-example"],["ngxSplit","","ngxSplit","row"],["ngxSplitArea",""],["ngxSplit","","ngxSplit","column"],[1,"fixed-header"],["ngxSplitArea","1 1 50%",1,"security-panel"],["ngxSplitHandle","5px"],["ngxSplitArea","","ngxSplitArea","1 0 50%",1,"alerts-panel"],["ngxSplitHandle","",4,"ngIf"],["ngxSplitArea","","ngxSplitArea","400px","maxBasis","600px","minBasis","200px","class","right-panel",4,"ngIf"],["class","fixed-panel",4,"ngIf"],[3,"ngModel","ngModelChange","change"],[1,"shadow",3,"sectionTitle"],[1,"btn","btn-primary",3,"click"],["ngxSplit","",3,"ngxSplit"],["ngxSplitArea","",1,"security-panel"],["ngxSplitHandle",""],["ngxSplitArea","0 1 50%",1,"right-panel"],["ngxSplitArea","","ngxSplitArea","400px","maxBasis","600px","minBasis","200px",1,"right-panel"],[1,"fixed-panel"]],template:function(n,e){1&n&&(b.Rb(0,"h3",0),b.Fc(1,"Split"),b.Qb(),b.Fc(2,"\n\n"),b.Rb(3,"ngx-section",1),b.Fc(4,"\n  "),b.Rb(5,"div",2),b.Fc(6,"\n    "),b.Rb(7,"div",3),b.Fc(8,"\n      "),b.Rb(9,"div",4),b.Fc(10,"\n        "),b.Fc(11,"\n        "),b.Rb(12,"div",5),b.Fc(13,"\n          "),b.Rb(14,"div",6),b.Fc(15,"Fixed header"),b.Qb(),b.Fc(16,"\n          "),b.Rb(17,"div",7),b.Fc(18,"\n            "),b.Fc(19,"\n            "),b.Rb(20,"h1"),b.Fc(21,"Security Dashboard"),b.Qb(),b.Fc(22,"\n            "),b.Rb(23,"p"),b.Fc(24,"\n              Haxx0r ipsum cd ctl-c Starcraft concurrently salt unix baz class bar linux January 1, 1970 syn for mutex\n              daemon todo mountain dew recursively. Mainframe wannabee machine code hack the mainframe do void python\n              bin big-endian break tcp ddos emacs public frack. Over clock headers data private *.* pwned fork script\n              kiddies.\n            "),b.Qb(),b.Fc(25,"\n          "),b.Qb(),b.Fc(26,"\n          "),b.Rb(27,"div",8),b.Fc(28,"\n            "),b.Fc(29,"\n          "),b.Qb(),b.Fc(30,"\n          "),b.Rb(31,"div",9),b.Fc(32,"\n            "),b.Fc(33,"\n            "),b.Rb(34,"h2"),b.Fc(35,"Alerts"),b.Qb(),b.Fc(36,"\n            "),b.Rb(37,"ul"),b.Fc(38,"\n              "),b.Rb(39,"li"),b.Fc(40,"DDOS"),b.Qb(),b.Fc(41,"\n              "),b.Rb(42,"li"),b.Fc(43,"DDOS"),b.Qb(),b.Fc(44,"\n              "),b.Rb(45,"li"),b.Fc(46,"DDOS"),b.Qb(),b.Fc(47,"\n            "),b.Qb(),b.Fc(48,"\n          "),b.Qb(),b.Fc(49,"\n        "),b.Qb(),b.Fc(50,"\n      "),b.Qb(),b.Fc(51,"\n      "),b.Dc(52,l,3,0,"div",10),b.Fc(53,"\n      "),b.Dc(54,o,15,0,"div",11),b.Fc(55,"\n      "),b.Dc(56,p,2,0,"div",12),b.Fc(57,"\n    "),b.Qb(),b.Fc(58,"\n  "),b.Qb(),b.Fc(59,"\n\n  "),b.Rb(60,"ngx-checkbox",13),b.Yb("ngModelChange",function(n){return e.hideAlertArea=n})("change",function(){return e.panelStateChanged()}),b.Fc(61,"\n    Hide Alert Area\n  "),b.Qb(),b.Fc(62,"\n  "),b.Rb(63,"ngx-checkbox",13),b.Yb("ngModelChange",function(n){return e.hideFixedSidebar=n})("change",function(){return e.panelStateChanged()}),b.Fc(64,"\n    Hide Fixed Sidebar\n  "),b.Qb(),b.Fc(65,"\n"),b.Qb(),b.Fc(66,"\n\n"),b.Rb(67,"ngx-section",14),b.Fc(68,"\n  "),b.Rb(69,"h3"),b.Fc(70),b.Qb(),b.Fc(71,"\n  "),b.Rb(72,"ngx-button",15),b.Yb("click",function(){return e.toggleDirection()}),b.Fc(73,"Toggle Direction"),b.Qb(),b.Fc(74,"\n  "),b.Mb(75,"br"),b.Fc(76,"\n  "),b.Mb(77,"br"),b.Fc(78,"\n\n  "),b.Rb(79,"div",2),b.Fc(80,"\n    "),b.Rb(81,"div",16),b.Fc(82,"\n      "),b.Rb(83,"div",17),b.Fc(84,"\n        "),b.Rb(85,"h1"),b.Fc(86,"Security Dashboard"),b.Qb(),b.Fc(87,"\n        "),b.Rb(88,"p"),b.Fc(89,"\n          Haxx0r ipsum cd ctl-c Starcraft concurrently salt unix baz class bar linux January 1, 1970 syn for mutex\n          daemon todo mountain dew recursively. Mainframe wannabee machine code hack the mainframe do void python bin\n          big-endian break tcp ddos emacs public frack. Over clock headers data private *.* pwned fork script kiddies.\n        "),b.Qb(),b.Fc(90,"\n      "),b.Qb(),b.Fc(91,"\n      "),b.Mb(92,"div",18),b.Fc(93,"\n      "),b.Rb(94,"div",19),b.Fc(95,"\n        "),b.Fc(96,"\n        "),b.Rb(97,"ul"),b.Fc(98,"\n          "),b.Rb(99,"li"),b.Fc(100,"Alerts"),b.Qb(),b.Fc(101,"\n          "),b.Rb(102,"li"),b.Fc(103,"Search"),b.Qb(),b.Fc(104,"\n          "),b.Rb(105,"li"),b.Fc(106,"Admin"),b.Qb(),b.Fc(107,"\n        "),b.Qb(),b.Fc(108,"\n      "),b.Qb(),b.Fc(109,"\n    "),b.Qb(),b.Fc(110,"\n  "),b.Qb(),b.Fc(111,"\n"),b.Qb(),b.Fc(112,"\n")),2&n&&(b.yb(52),b.ic("ngIf",!e.hideAlertArea),b.yb(2),b.ic("ngIf",!e.hideAlertArea),b.yb(2),b.ic("ngIf",!e.hideFixedSidebar),b.yb(4),b.ic("ngModel",e.hideAlertArea),b.yb(3),b.ic("ngModel",e.hideFixedSidebar),b.yb(4),b.ic("sectionTitle","Switching Layout Direction"),b.yb(3),b.Hc("Current Direction: ",e.direction,""),b.yb(11),b.ic("ngxSplit",e.direction))},directives:[a.wb,a.Hb,a.Gb,a.Ib,c.m,a.i,t.i,t.l,a.c],styles:[".split-example[_ngcontent-%COMP%]{height:500px;margin:20px 0}.split-example[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]{background:#2f3646;padding:10px}.split-example[_ngcontent-%COMP%]   .fixed-panel[_ngcontent-%COMP%]{background:#3b4457;padding:10px;flex:0 0 20%}.split-example[_ngcontent-%COMP%]   .security-panel[_ngcontent-%COMP%]{background:#2f3646;padding:10px}.split-example[_ngcontent-%COMP%]   .alerts-panel[_ngcontent-%COMP%]{background:#455066;padding:10px}.split-example[_ngcontent-%COMP%]   .fixed-header[_ngcontent-%COMP%]{flex:0 0 50px;background:#3b4457;padding:10px}"],changeDetection:0}),n})()}];let g=(()=>{class n{}return n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({factory:function(e){return new(e||n)},imports:[[d.g.forChild(F)],d.g]}),n})(),s=(()=>{class n{}return n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({factory:function(e){return new(e||n)},imports:[[c.c,t.d,r.a,a.yb,a.Jb,a.d,a.j,g]]}),n})()}}]);