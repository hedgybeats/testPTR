(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-productsAndServices-viewProducts"],{

/***/ "CkoH":
/*!***************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewProducts/view-products.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductsModule", function() { return ViewProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_products_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-products-routing.module */ "Kkn3");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../angular-material.module */ "rhD1");
/* harmony import */ var _view_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-products.component */ "SnZ6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ViewProductsModule {
}
ViewProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewProductsModule });
ViewProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewProductsModule_Factory(t) { return new (t || ViewProductsModule)(); }, providers: [], imports: [[
            _view_products_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewProductsRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewProductsModule, { declarations: [_view_products_component__WEBPACK_IMPORTED_MODULE_3__["ViewProductsComponent"]], imports: [_view_products_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewProductsRoutingModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _view_products_component__WEBPACK_IMPORTED_MODULE_3__["ViewProductsComponent"]
                ],
                imports: [
                    _view_products_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewProductsRoutingModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Kkn3":
/*!***********************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewProducts/view-products-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductsRoutingModule", function() { return ViewProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-products.component */ "SnZ6");





const routes = [
    {
        path: '',
        component: _view_products_component__WEBPACK_IMPORTED_MODULE_2__["ViewProductsComponent"],
        data: {
            title: 'View Products'
        }
    }
];
class ViewProductsRoutingModule {
}
ViewProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewProductsRoutingModule });
ViewProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewProductsRoutingModule_Factory(t) { return new (t || ViewProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "SnZ6":
/*!******************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewProducts/view-products.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductsComponent", function() { return ViewProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "J9tS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ViewProductsComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R", product_r1.price, "");
} }
class ViewProductsComponent {
    constructor(db) {
        this.db = db;
        this.productList = [];
    }
    ngOnInit() {
        this.GetProducts();
    }
    GetProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productList = yield this.db.getProducts();
        });
    }
}
ViewProductsComponent.ɵfac = function ViewProductsComponent_Factory(t) { return new (t || ViewProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["DbService"])); };
ViewProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewProductsComponent, selectors: [["ng-component"]], decls: 4, vars: 1, consts: [[1, "m-2", "p-4"], ["class", "m-2 p-4 d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "m-2", "p-4", "d-flex", "justify-content-between"], [1, "me-4"]], template: function ViewProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "View products page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewProductsComponent_mat_card_3_Template, 7, 3, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productList);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './view-products.component.html',
                styleUrls: ['./view-products.component.css'],
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["DbService"] }]; }, null); })();


/***/ }),

/***/ "ekeP":
/*!************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewProducts/index.ts ***!
  \************************************************************************/
/*! exports provided: ViewProductsModule, ViewProductsComponent, ViewProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-products.module */ "CkoH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewProductsModule", function() { return _view_products_module__WEBPACK_IMPORTED_MODULE_0__["ViewProductsModule"]; });

/* harmony import */ var _view_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-products.component */ "SnZ6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewProductsComponent", function() { return _view_products_component__WEBPACK_IMPORTED_MODULE_1__["ViewProductsComponent"]; });

/* harmony import */ var _view_products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-products-routing.module */ "Kkn3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewProductsRoutingModule", function() { return _view_products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewProductsRoutingModule"]; });






/***/ })

}]);
//# sourceMappingURL=views-productsAndServices-viewProducts.js.map