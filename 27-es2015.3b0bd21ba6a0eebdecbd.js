(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{zVwD:function(n,t,e){"use strict";e.r(t),e.d(t,"AlertPageModule",function(){return p});var c=e("ofXK"),r=e("8lIJ"),o=e("alW4"),l=e("tyNb"),i=e("fXoL"),b=e("LMvA");const a=[{path:"",component:(()=>{class n{constructor(n){this.alertService=n,this.AlertStyles=r.b}onPromptClick(){const n=this.alertService.prompt({title:"Alert SOC",content:"What type of compromise?"});console.log("Prompt subject",n),n.subscribe({next:n=>console.log("Prompt next",n),error:n=>console.log("Prompt err",n),complete:()=>console.log("Complete")})}}return n.\u0275fac=function(t){return new(t||n)(i.Lb(r.a))},n.\u0275cmp=i.Fb({type:n,selectors:[["app-alert-page"]],decls:105,vars:3,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],["type","button",1,"btn",3,"click"],["label","Markup"],["label","TypeScript"],["language","js"]],template:function(n,t){1&n&&(i.Rb(0,"h3",0),i.Fc(1,"Alert/Confirm"),i.Qb(),i.Fc(2,"\n"),i.Rb(3,"ngx-section",1),i.Fc(4,"\n\n  "),i.Rb(5,"button",2),i.Yb("click",function(){return t.alertService.alert({title:"Alert SOC",content:"Intrusion Happened!!!"})}),i.Fc(6,"\n    Info\n  "),i.Qb(),i.Fc(7,"\n\n  "),i.Rb(8,"button",2),i.Yb("click",function(){return t.alertService.alert({title:"Alert SOC",style:t.AlertStyles.Danger})}),i.Fc(9,"\n    Danger\n  "),i.Qb(),i.Fc(10,"\n\n  "),i.Rb(11,"button",2),i.Yb("click",function(){return t.alertService.alert({title:"Alert SOC",style:t.AlertStyles.Warning,content:"Intrusion Happened!!!"})}),i.Fc(12,"\n    Warning\n  "),i.Qb(),i.Fc(13,"\n\n  "),i.Rb(14,"button",2),i.Yb("click",function(){return t.alertService.alert({title:"Rainbows!!!",cssClass:"rainbows"})}),i.Fc(15,"\n    Custom CSS\n  "),i.Qb(),i.Fc(16,"\n\n  "),i.Mb(17,"br"),i.Fc(18,"\n  "),i.Mb(19,"br"),i.Fc(20,"\n\n  "),i.Rb(21,"ngx-tabs"),i.Fc(22,"\n    "),i.Rb(23,"ngx-tab",3),i.Fc(24,"\n      "),i.Rb(25,"app-prism"),i.Fc(26,"\n"),i.Fc(27,'<button\n  type="button"\n  (click)="alertService.alert({ title: \'Alert SOC\', content: \'Intrusion Happened!!!\' })">\n  Info\n</button>\n\n<button\n  type="button"\n  (click)="alertService.alert({ title: \'Alert SOC\', style: AlertStyles.Danger })">\n  Danger\n</button>\n\n<button\n  type="button"\n  (click)="alertService.alert({ title: \'Alert SOC\', style: AlertStyles.Warning, content: \'Intrusion Happened!!!\' })">\n  Warning\n</button>\n\n<button type="button" class="btn"\n  (click)="alertService.alert({ title: \'Rainbows!!!\', cssClass: \'rainbows\' })">\n  Custom CSS\n</button>'),i.Fc(28,"\n      "),i.Qb(),i.Fc(29,"\n    "),i.Qb(),i.Fc(30,"\n    "),i.Rb(31,"ngx-tab",4),i.Fc(32,"\n      "),i.Rb(33,"app-prism",5),i.Fc(34,"\n"),i.Fc(35,"import { AlertService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public alertService: AlertService) { }\n}"),i.Fc(36,"\n      "),i.Qb(),i.Fc(37,"\n    "),i.Qb(),i.Fc(38,"\n  "),i.Qb(),i.Fc(39,"\n\n"),i.Qb(),i.Fc(40,"\n\n"),i.Rb(41,"ngx-section",1),i.Fc(42,"\n\n  "),i.Rb(43,"button",2),i.Yb("click",function(){return t.alertService.confirm({title:"Alert SOC",content:"Intrusion Happened!!!"})}),i.Fc(44,"\n    Confirm\n  "),i.Qb(),i.Fc(45,"\n\n  "),i.Rb(46,"button",2),i.Yb("click",function(){return t.alertService.confirm({title:"Alert SOC",content:"Intrusion Happened!!!",longPress:!0})}),i.Fc(47,"\n    Confirm with Long Press\n  "),i.Qb(),i.Fc(48,"\n\n  "),i.Rb(49,"button",2),i.Yb("click",function(){return t.alertService.confirm({title:"Save your pending changes?",confirmButtonText:"Yes!",cancelButtonText:"Dismiss"})}),i.Fc(50,"\n    Custom actions text\n  "),i.Qb(),i.Fc(51,"\n\n  "),i.Mb(52,"br"),i.Fc(53,"\n  "),i.Mb(54,"br"),i.Fc(55,"\n\n  "),i.Rb(56,"ngx-tabs"),i.Fc(57,"\n    "),i.Rb(58,"ngx-tab",3),i.Fc(59,"\n      "),i.Rb(60,"app-prism"),i.Fc(61,"\n"),i.Fc(62,"<button\n  type=\"button\"\n  (click)=\"alertService.confirm({ title: 'Alert SOC', content: 'Intrusion Happened!!!' })\">\n  Confirm\n</button>\n\n<button\n  type=\"button\"\n  (click)=\"alertService.confirm({ title: 'Alert SOC', content: 'Intrusion Happened!!!',  longPress: true })\">\n  Confirm with Long Press\n</button>\n\n<button type=\"button\" class=\"btn\"\n  (click)=\"alertService.confirm({ title: 'Save your pending changes?', confirmButtonText: 'Yes!', cancelButtonText: 'Dismiss' })\">\n  Custom actions text\n</button>"),i.Fc(63,"\n      "),i.Qb(),i.Fc(64,"\n    "),i.Qb(),i.Fc(65,"\n    "),i.Rb(66,"ngx-tab",4),i.Fc(67,"\n      "),i.Rb(68,"app-prism",5),i.Fc(69,"\n"),i.Fc(70,"import { AlertService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public alertService: AlertService) { }\n}"),i.Fc(71,"\n      "),i.Qb(),i.Fc(72,"\n    "),i.Qb(),i.Fc(73,"\n  "),i.Qb(),i.Fc(74,"\n\n"),i.Qb(),i.Fc(75,"\n\n"),i.Rb(76,"ngx-section",1),i.Fc(77,"\n\n  "),i.Rb(78,"button",2),i.Yb("click",function(){return t.onPromptClick()}),i.Fc(79,"\n    Prompt\n  "),i.Qb(),i.Fc(80,"\n\n  "),i.Mb(81,"br"),i.Fc(82,"\n  "),i.Mb(83,"br"),i.Fc(84,"\n\n  "),i.Rb(85,"ngx-tabs"),i.Fc(86,"\n    "),i.Rb(87,"ngx-tab",3),i.Fc(88,"\n      "),i.Rb(89,"app-prism"),i.Fc(90,"\n"),i.Fc(91,'<button\n  type="button"\n  (click)="onPromptClick()">\n  Prompt\n</button>'),i.Fc(92,"\n      "),i.Qb(),i.Fc(93,"\n    "),i.Qb(),i.Fc(94,"\n    "),i.Rb(95,"ngx-tab",4),i.Fc(96,"\n      "),i.Rb(97,"app-prism",5),i.Fc(98,"\n"),i.Fc(99,"import { AlertService } from '@swimlane/ngx-ui';\n\n@Component({\n  selector: 'app',\n  templateUrl: './app.template.html'\n})\nexport class AppComponent {\n  constructor(public alertService: AlertService) { }\n\n  onPromptClick() {\n    const subject = this.alertService.prompt({\n      title: 'Alert SOC',\n      content: 'What type of compromise?'\n    });\n\n    console.log('Prompt subject', subject);\n\n    subject.subscribe({\n      next: (v) => console.log('Prompt next', v),\n      error: (err) => console.log('Prompt err', err),\n      complete: (v) => console.log('Complete', v)\n    });\n  }\n}"),i.Fc(100,"\n      "),i.Qb(),i.Fc(101,"\n    "),i.Qb(),i.Fc(102,"\n  "),i.Qb(),i.Fc(103,"\n"),i.Qb(),i.Fc(104,"\n")),2&n&&(i.yb(3),i.ic("sectionTitle","Alerts"),i.yb(38),i.ic("sectionTitle","Confirm"),i.yb(35),i.ic("sectionTitle","Prompt"))},directives:[r.wb,r.Qb,r.Pb,b.a],styles:[".ngx-alert-dialog.alert .ngx-dialog-content.rainbows .ngx-dialog-header,.ngx-alert-dialog.confirm .ngx-dialog-content.rainbows .ngx-dialog-header{background-image:linear-gradient(to top left,violet,indigo,#00f,green,#ff0,orange,red)}.ngx-alert-dialog.alert .ngx-dialog-content.rainbows .ngx-dialog-header h1,.ngx-alert-dialog.confirm .ngx-dialog-content.rainbows .ngx-dialog-header h1{color:#000}"],encapsulation:2,changeDetection:0}),n})()}];let s=(()=>{class n{}return n.\u0275mod=i.Jb({type:n}),n.\u0275inj=i.Ib({factory:function(t){return new(t||n)},imports:[[l.g.forChild(a)],l.g]}),n})(),p=(()=>{class n{}return n.\u0275mod=i.Jb({type:n}),n.\u0275inj=i.Ib({factory:function(t){return new(t||n)},imports:[[c.c,o.a,r.yb,r.q,r.Rb,s]]}),n})()}}]);