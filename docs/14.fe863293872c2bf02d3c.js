(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{SW2F:function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",function(){return T}),e.d(n,"DashboardComponent",function(){return h}),e.d(n,"DashboardRoutingModule",function(){return u});var o=e("tyNb"),r=e("mrSG"),i=e("fXoL"),c=e("J9tS"),s=e("8I6g"),b=e("Wp6s"),a=e("f0Cb");let h=(()=>{class t{constructor(t,n){this.db=t,this.toastService=n,this.invoicesThisMonth=0,this.currentMonth=""}ngOnInit(){this.SetCurrentMonth(),this.GetCurrentMonthInvoices()}SetCurrentMonth(){const t=new Date;this.currentMonth=t.toLocaleString("default",{month:"long"})}GetCurrentMonthInvoices(){return Object(r.a)(this,void 0,void 0,function*(){try{const t=yield this.db.getInvoices();this.invoicesThisMonth=this.GetTotalCurrentMonthInvoices(t)}catch(t){this.toastService.showError(t)}})}GetTotalCurrentMonthInvoices(t){const n=[],e=new Date;return t.forEach(t=>{const o=new Date(t.invoiceDate);o.getMonth()===e.getMonth()&&n.push(o)}),n.length}}return t.\u0275fac=function(n){return new(n||t)(i.Ob(c.a),i.Ob(s.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["ng-component"]],decls:25,vars:4,consts:[[1,"d-flex","justify-content-evenly","m-2"],[1,"p-0","m-3","shadow"],[1,"p-3","m-0"],[1,"text-center","p-2"]],template:function(t,n){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div"),i.Ub(2,"mat-card",1),i.Ub(3,"h3",2),i.Ub(4,"b"),i.Kc(5),i.Tb(),i.Tb(),i.Pb(6,"mat-divider"),i.Ub(7,"div",3),i.Kc(8),i.Tb(),i.Tb(),i.Tb(),i.Ub(9,"div"),i.Ub(10,"mat-card",1),i.Ub(11,"h3",2),i.Ub(12,"b"),i.Kc(13),i.Tb(),i.Tb(),i.Pb(14,"mat-divider"),i.Ub(15,"div",3),i.Kc(16," 0 "),i.Tb(),i.Tb(),i.Tb(),i.Ub(17,"div"),i.Ub(18,"mat-card",1),i.Ub(19,"h3",2),i.Ub(20,"b"),i.Kc(21),i.Tb(),i.Tb(),i.Pb(22,"mat-divider"),i.Ub(23,"div",3),i.Kc(24," 0 "),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&t&&(i.Bb(5),i.Mc("Total Invoices For ",n.currentMonth,""),i.Bb(3),i.Mc(" ",n.invoicesThisMonth," "),i.Bb(5),i.Mc("Total Quotations For ",n.currentMonth,""),i.Bb(8),i.Mc("Total Statements For ",n.currentMonth,""))},directives:[b.a,a.a],styles:[""]}),t})();const d=[{path:"",component:h,data:{title:"Dashboard"}}];let u=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},imports:[[o.f.forChild(d)],o.f]}),t})();var v=e("rhD1"),l=e("ofXK"),M=e("3Pt+");let T=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(n){return new(n||t)},providers:[],imports:[[u,v.a,M.k,M.u,l.c]]}),t})()}}]);