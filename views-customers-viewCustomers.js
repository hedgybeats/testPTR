(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-customers-viewCustomers"],{

/***/ "4tGb":
/*!*******************************************************************************!*\
  !*** ./src/app/system/views/customers/viewCustomers/view-customers.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewCustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersModule", function() { return ViewCustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_customers_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-customers-routing.module */ "WFt6");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-material.module */ "rhD1");
/* harmony import */ var _view_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-customers.component */ "5QR3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ViewCustomersModule {
}
ViewCustomersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewCustomersModule });
ViewCustomersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewCustomersModule_Factory(t) { return new (t || ViewCustomersModule)(); }, providers: [], imports: [[
            _view_customers_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewCustomersRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewCustomersModule, { declarations: [_view_customers_component__WEBPACK_IMPORTED_MODULE_3__["ViewCustomersComponent"]], imports: [_view_customers_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewCustomersRoutingModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCustomersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _view_customers_component__WEBPACK_IMPORTED_MODULE_3__["ViewCustomersComponent"]
                ],
                imports: [
                    _view_customers_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewCustomersRoutingModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "5QR3":
/*!**********************************************************************************!*\
  !*** ./src/app/system/views/customers/viewCustomers/view-customers.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersComponent", function() { return ViewCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "J9tS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ViewCustomersComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customer_r1.name);
} }
class ViewCustomersComponent {
    constructor(db) {
        this.db = db;
        this.customerList = [];
    }
    ngOnInit() {
        this.GetCustomers();
    }
    GetCustomers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.customerList = yield this.db.getCustomers();
        });
    }
}
ViewCustomersComponent.ɵfac = function ViewCustomersComponent_Factory(t) { return new (t || ViewCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["DbService"])); };
ViewCustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewCustomersComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [[1, "m-2", "p-4"], ["class", "m-2 p-4 d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "m-2", "p-4", "d-flex", "justify-content-between"], [1, "me-4"]], template: function ViewCustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewCustomersComponent_mat_card_1_Template, 4, 1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customerList);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWN1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewCustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './view-customers.component.html',
                styleUrls: ['./view-customers.component.css'],
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["DbService"] }]; }, null); })();


/***/ }),

/***/ "WFt6":
/*!***************************************************************************************!*\
  !*** ./src/app/system/views/customers/viewCustomers/view-customers-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewCustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersRoutingModule", function() { return ViewCustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-customers.component */ "5QR3");





const routes = [
    {
        path: '',
        component: _view_customers_component__WEBPACK_IMPORTED_MODULE_2__["ViewCustomersComponent"],
        data: {
            title: 'View Customers'
        }
    }
];
class ViewCustomersRoutingModule {
}
ViewCustomersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewCustomersRoutingModule });
ViewCustomersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewCustomersRoutingModule_Factory(t) { return new (t || ViewCustomersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewCustomersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCustomersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vlMu":
/*!***************************************************************!*\
  !*** ./src/app/system/views/customers/viewCustomers/index.ts ***!
  \***************************************************************/
/*! exports provided: ViewCustomersModule, ViewCustomersComponent, ViewCustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_customers_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-customers.module */ "4tGb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersModule", function() { return _view_customers_module__WEBPACK_IMPORTED_MODULE_0__["ViewCustomersModule"]; });

/* harmony import */ var _view_customers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-customers.component */ "5QR3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersComponent", function() { return _view_customers_component__WEBPACK_IMPORTED_MODULE_1__["ViewCustomersComponent"]; });

/* harmony import */ var _view_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-customers-routing.module */ "WFt6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersRoutingModule", function() { return _view_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewCustomersRoutingModule"]; });






/***/ })

}]);
//# sourceMappingURL=views-customers-viewCustomers.js.map