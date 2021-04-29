(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{lsat:function(t,e,r){"use strict";r.r(e),r.d(e,"AddCustomerModule",function(){return g}),r.d(e,"AddCustomerComponent",function(){return l}),r.d(e,"AddCustomerRoutingModule",function(){return f});var o=r("tyNb"),s=r("mrSG"),n=r("3Pt+"),a=r("fXoL"),i=r("J9tS"),u=r("8I6g"),m=r("Wp6s"),d=r("kmnG"),c=r("qFsG"),b=r("bTqV");let l=(()=>{class t{constructor(t,e,r){this.formBuilder=t,this.db=e,this.toastService=r}ngOnInit(){this.initForm()}initForm(){this.customerForm=this.formBuilder.group({name:[[],[n.w.required]],address:[[],[n.w.required]],suburb:[[],[n.w.required]],city:[[],[n.w.required]],postalCode:[[],[n.w.required]]})}tryAddCustomer(){this.customerForm.valid?this.addCustomer():this.toastService.showError("Missing required fields")}get name(){return this.customerForm.get("name").value}get address(){return this.customerForm.get("address").value}get suburb(){return this.customerForm.get("suburb").value}get city(){return this.customerForm.get("city").value}get postalCode(){return this.customerForm.get("postalCode").value}addCustomer(){return Object(s.a)(this,void 0,void 0,function*(){const t=this.customerForm.value;try{yield this.db.addCustomer(t),this.toastService.showSuccess(`Customer '${t.name}' added successfully`)}catch(e){this.toastService.showError(e)}})}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(n.e),a.Ob(i.a),a.Ob(u.a))},t.\u0275cmp=a.Ib({type:t,selectors:[["ng-component"]],decls:27,vars:1,consts:[[1,"add-customer-card"],["id","main-header",1,"m-0","p-2","d-inline-flex"],[3,"formGroup"],["appearance","fill",1,"w-100","pt-2","ps-2","pe-2"],["matInput","","formControlName","name"],["matInput","","formControlName","address"],["appearance","fill",1,"w-50","pt-2","ps-2","pe-2"],["matInput","","formControlName","suburb"],["matInput","","formControlName","city"],["appearance","fill",1,"w-25","pt-2","ps-2","pe-2"],["matInput","","formControlName","postalCode"],[1,"text-end"],["mat-raised-button","","type","submit","color","primary",1,"submit-btn","m-2",3,"click"]],template:function(t,e){1&t&&(a.Ub(0,"mat-card",0),a.Ub(1,"h1",1),a.Kc(2,"Add Customer"),a.Tb(),a.Ub(3,"form",2),a.Ub(4,"mat-form-field",3),a.Ub(5,"mat-label"),a.Kc(6,"Name"),a.Tb(),a.Pb(7,"input",4),a.Tb(),a.Ub(8,"mat-form-field",3),a.Ub(9,"mat-label"),a.Kc(10,"Address"),a.Tb(),a.Pb(11,"input",5),a.Tb(),a.Ub(12,"mat-form-field",6),a.Ub(13,"mat-label"),a.Kc(14,"Suburb"),a.Tb(),a.Pb(15,"input",7),a.Tb(),a.Ub(16,"mat-form-field",6),a.Ub(17,"mat-label"),a.Kc(18,"City"),a.Tb(),a.Pb(19,"input",8),a.Tb(),a.Ub(20,"mat-form-field",9),a.Ub(21,"mat-label"),a.Kc(22,"Postal Code"),a.Tb(),a.Pb(23,"input",10),a.Tb(),a.Tb(),a.Ub(24,"div",11),a.Ub(25,"button",12),a.fc("click",function(){return e.tryAddCustomer()}),a.Kc(26," Add Customer "),a.Tb(),a.Tb(),a.Tb()),2&t&&(a.Bb(3),a.qc("formGroup",e.customerForm))},directives:[m.a,n.y,n.p,n.i,d.b,d.e,c.b,n.c,n.o,n.h,b.a],styles:[".add-customer-card[_ngcontent-%COMP%]{padding:0 20px 15px;margin:20px 25px}#main-header[_ngcontent-%COMP%]{text-align:center}"]}),t})();const p=[{path:"",component:l,data:{title:"Add Customer"}}];let f=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(p)],o.f]}),t})();var h=r("rhD1"),C=r("ofXK");let g=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},providers:[],imports:[[f,h.a,n.k,n.u,C.c]]}),t})()}}]);