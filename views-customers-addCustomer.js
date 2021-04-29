(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-customers-addCustomer"],{

/***/ "Zqre":
/*!***************************************************************************!*\
  !*** ./src/app/system/views/customers/addCustomer/add-customer.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddCustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerModule", function() { return AddCustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer-routing.module */ "rguL");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-material.module */ "rhD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-customer.component */ "d6hI");







class AddCustomerModule {
}
AddCustomerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddCustomerModule });
AddCustomerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddCustomerModule_Factory(t) { return new (t || AddCustomerModule)(); }, providers: [], imports: [[
            _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddCustomerRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCustomerModule, { declarations: [_add_customer_component__WEBPACK_IMPORTED_MODULE_5__["AddCustomerComponent"]], imports: [_add_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddCustomerRoutingModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _add_customer_component__WEBPACK_IMPORTED_MODULE_5__["AddCustomerComponent"]
                ],
                imports: [
                    _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddCustomerRoutingModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "d6hI":
/*!******************************************************************************!*\
  !*** ./src/app/system/views/customers/addCustomer/add-customer.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "J9tS");
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../_services/_toast/_toast.service */ "8I6g");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











class AddCustomerComponent {
    constructor(formBuilder, db, toastService) {
        this.formBuilder = formBuilder;
        this.db = db;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.customerForm = this.formBuilder.group({
            name: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            suburb: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            postalCode: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    tryAddCustomer() {
        if (this.customerForm.valid) {
            this.addCustomer();
        }
        else {
            this.toastService.showError('Missing required fields');
        }
    }
    get name() {
        return this.customerForm.get('name').value;
    }
    get address() {
        return this.customerForm.get('address').value;
    }
    get suburb() {
        return this.customerForm.get('suburb').value;
    }
    get city() {
        return this.customerForm.get('city').value;
    }
    get postalCode() {
        return this.customerForm.get('postalCode').value;
    }
    addCustomer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const customer = this.customerForm.value;
            try {
                yield this.db.addCustomer(customer);
                this.toastService.showSuccess(`Customer '${customer.name}' added successfully`);
            }
            catch (error) {
                this.toastService.showError(error);
            }
        });
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["DbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"])); };
AddCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["ng-component"]], decls: 27, vars: 1, consts: [[1, "add-customer-card"], ["id", "main-header", 1, "m-0", "p-2", "d-inline-flex"], [3, "formGroup"], ["appearance", "fill", 1, "w-100", "pt-2", "ps-2", "pe-2"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "address"], ["appearance", "fill", 1, "w-50", "pt-2", "ps-2", "pe-2"], ["matInput", "", "formControlName", "suburb"], ["matInput", "", "formControlName", "city"], ["appearance", "fill", 1, "w-25", "pt-2", "ps-2", "pe-2"], ["matInput", "", "formControlName", "postalCode"], [1, "text-end"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "submit-btn", "m-2", 3, "click"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Suburb");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCustomerComponent_Template_button_click_25_listener() { return ctx.tryAddCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Add Customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.customerForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".add-customer-card[_ngcontent-%COMP%] {\r\n    padding: 0px 20px 15px 20px;\r\n    margin: 20px 25px;\r\n}\r\n\r\n#main-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJhZGQtY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtY3VzdG9tZXItY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCAxNXB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMjVweDtcclxufVxyXG5cclxuI21haW4taGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddCustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './add-customer.component.html',
                styleUrls: ['./add-customer.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["DbService"] }, { type: _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "lsat":
/*!*************************************************************!*\
  !*** ./src/app/system/views/customers/addCustomer/index.ts ***!
  \*************************************************************/
/*! exports provided: AddCustomerModule, AddCustomerComponent, AddCustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_customer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-customer.module */ "Zqre");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCustomerModule", function() { return _add_customer_module__WEBPACK_IMPORTED_MODULE_0__["AddCustomerModule"]; });

/* harmony import */ var _add_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer.component */ "d6hI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return _add_customer_component__WEBPACK_IMPORTED_MODULE_1__["AddCustomerComponent"]; });

/* harmony import */ var _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-customer-routing.module */ "rguL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddCustomerRoutingModule", function() { return _add_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddCustomerRoutingModule"]; });






/***/ }),

/***/ "rguL":
/*!***********************************************************************************!*\
  !*** ./src/app/system/views/customers/addCustomer/add-customer-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddCustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerRoutingModule", function() { return AddCustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-customer.component */ "d6hI");





const routes = [
    {
        path: '',
        component: _add_customer_component__WEBPACK_IMPORTED_MODULE_2__["AddCustomerComponent"],
        data: {
            title: 'Add Customer'
        }
    }
];
class AddCustomerRoutingModule {
}
AddCustomerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddCustomerRoutingModule });
AddCustomerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddCustomerRoutingModule_Factory(t) { return new (t || AddCustomerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCustomerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-customers-addCustomer.js.map