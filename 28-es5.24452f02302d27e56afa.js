!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{roeC:function(e,c,o){"use strict";o.r(c),o.d(c,"NagPageModule",(function(){return E}));var i=o("ofXK"),a=o("8lIJ"),s=o("alW4"),l=o("tyNb"),r=o("fXoL"),g=o("LMvA");function b(n,t){if(1&n&&(r.Rb(0,"ngx-section",7),r.Ec(1,"\n  "),r.Qb()),2&n){var e=t.$implicit;r.ic("sectionTitle",e.type+" #"+e.id)("sectionCollapsible",!1)("sectionCollapsed",!0)}}var f,p,u,h=[{path:"",component:(f=function(){function e(){n(this,e),this.nags=[]}var c,o,i;return c=e,(o=[{key:"addNag",value:function(){this.nags.push({type:"Alert",id:Math.trunc(1e4*Math.random())})}}])&&t(c.prototype,o),i&&t(c,i),e}(),f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=r.Fb({type:f,selectors:[["app-nag-page"]],decls:33,vars:4,consts:[[1,"style-header"],["sectionTitle","Demo",1,"shadow"],["type","button",1,"btn",3,"click"],[3,"watch","hide"],["ngx-nag-title","",1,"ngx-toolbar-title"],["fontIcon","alert",2,"color","#ff4514","font-size","small","margin-right","10px"],["class","shadow",3,"sectionTitle","sectionCollapsible","sectionCollapsed",4,"ngFor","ngForOf"],[1,"shadow",3,"sectionTitle","sectionCollapsible","sectionCollapsed"]],template:function(n,t){1&n&&(r.Rb(0,"h3",0),r.Ec(1,"Nag"),r.Qb(),r.Ec(2,"\n\n"),r.Rb(3,"ngx-section",1),r.Ec(4,"\n  "),r.Rb(5,"button",2),r.Yb("click",(function(){return t.addNag()})),r.Ec(6,"\n    Add Nag Alert\n  "),r.Qb(),r.Ec(7,"\n\n  "),r.Rb(8,"button",2),r.Yb("click",(function(){return t.nags.shift()})),r.Ec(9,"\n    Remove Nag Alert\n  "),r.Qb(),r.Ec(10,"\n\n  "),r.Mb(11,"br"),r.Ec(12,"\n  "),r.Mb(13,"br"),r.Ec(14,"\n  "),r.Mb(15,"br"),r.Ec(16,"\n  "),r.Rb(17,"app-prism"),r.Ec(18,"\n"),r.Ec(19,'<ngx-nag [watch]="nags.length">\n  <h2 ngx-nag-title class="ngx-toolbar-title">\n    <ngx-icon fontIcon="alert"></ngx-icon> { {nags.length} } Alerts Detected\n  </h2>\n  <ngx-section\n    *ngFor="let nag of nags" class="shadow"\n    [sectionTitle]="nag.type + \' #\' + nag.id"\n    [sectionCollapsible]="false"\n    [sectionCollapsed]="true">\n  </ngx-section>\n</ngx-nag>'),r.Ec(20,"\n  "),r.Qb(),r.Ec(21,"\n"),r.Qb(),r.Ec(22,"\n\n"),r.Rb(23,"ngx-nag",3),r.Ec(24,"\n  "),r.Rb(25,"h2",4),r.Ec(26,"\n    "),r.Mb(27,"ngx-icon",5),r.Ec(28),r.Qb(),r.Ec(29,"\n  "),r.Cc(30,b,2,3,"ngx-section",6),r.Ec(31,"\n"),r.Qb(),r.Ec(32,"\n")),2&n&&(r.yb(23),r.ic("watch",t.nags.length)("hide",0===t.nags.length),r.yb(5),r.Gc("\n    ",t.nags.length," Alerts Detected\n  "),r.yb(2),r.ic("ngForOf",t.nags))},directives:[a.qb,g.a,a.V,a.D,i.l],encapsulation:2,changeDetection:0}),f)}],d=((u=function t(){n(this,t)}).\u0275mod=r.Jb({type:u}),u.\u0275inj=r.Ib({factory:function(n){return new(n||u)},imports:[[l.g.forChild(h)],l.g]}),u),E=((p=function t(){n(this,t)}).\u0275mod=r.Jb({type:p}),p.\u0275inj=r.Ib({factory:function(n){return new(n||p)},imports:[[i.c,s.a,a.sb,a.W,a.E,d]]}),p)}}])}();