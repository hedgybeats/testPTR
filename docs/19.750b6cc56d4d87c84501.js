(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ekeP:function(t,e,n){"use strict";n.r(e),n.d(e,"ViewProductsModule",function(){return l}),n.d(e,"ViewProductsComponent",function(){return b}),n.d(e,"ViewProductsRoutingModule",function(){return a});var c=n("tyNb"),o=n("mrSG"),r=n("fXoL"),i=n("J9tS"),s=n("Wp6s"),u=n("ofXK");function d(t,e){if(1&t&&(r.Ub(0,"mat-card",2),r.Ub(1,"div"),r.Ub(2,"b",3),r.Kc(3),r.Tb(),r.Kc(4),r.Tb(),r.Ub(5,"div"),r.Kc(6),r.Tb(),r.Tb()),2&t){const t=e.$implicit;r.Bb(3),r.Lc(t.code),r.Bb(1),r.Mc(" ",t.name,""),r.Bb(2),r.Mc("R",t.price,"")}}let b=(()=>{class t{constructor(t){this.db=t,this.productList=[]}ngOnInit(){this.GetProducts()}GetProducts(){return Object(o.a)(this,void 0,void 0,function*(){this.productList=yield this.db.getProducts()})}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(i.a))},t.\u0275cmp=r.Ib({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[[1,"m-2","p-4"],["class","m-2 p-4 d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"m-2","p-4","d-flex","justify-content-between"],[1,"me-4"]],template:function(t,e){1&t&&(r.Ub(0,"p"),r.Kc(1,"View products page"),r.Tb(),r.Ub(2,"mat-card",0),r.Ic(3,d,7,3,"mat-card",1),r.Tb()),2&t&&(r.Bb(3),r.qc("ngForOf",e.productList))},directives:[s.a,u.k],styles:[""]}),t})();const p=[{path:"",component:b,data:{title:"View Products"}}];let a=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},imports:[[c.f.forChild(p)],c.f]}),t})();var f=n("rhD1");let l=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},providers:[],imports:[[a,f.a,u.c]]}),t})()}}]);