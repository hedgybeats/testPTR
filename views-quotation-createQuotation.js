(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-quotation-createQuotation"],{

/***/ "FRyR":
/*!*****************************************************************!*\
  !*** ./src/app/system/views/quotation/createQuotation/index.ts ***!
  \*****************************************************************/
/*! exports provided: CreateQuotationModule, CreateQuotationComponent, CreateQuotationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_quotation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-quotation.module */ "J14s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateQuotationModule", function() { return _create_quotation_module__WEBPACK_IMPORTED_MODULE_0__["CreateQuotationModule"]; });

/* harmony import */ var _create_quotation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-quotation.component */ "Yxct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateQuotationComponent", function() { return _create_quotation_component__WEBPACK_IMPORTED_MODULE_1__["CreateQuotationComponent"]; });

/* harmony import */ var _create_quotation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-quotation-routing.module */ "rqnt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateQuotationRoutingModule", function() { return _create_quotation_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateQuotationRoutingModule"]; });






/***/ }),

/***/ "J14s":
/*!***********************************************************************************!*\
  !*** ./src/app/system/views/quotation/createQuotation/create-quotation.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateQuotationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuotationModule", function() { return CreateQuotationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_quotation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-quotation-routing.module */ "rqnt");



class CreateQuotationModule {
}
CreateQuotationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CreateQuotationModule });
CreateQuotationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CreateQuotationModule_Factory(t) { return new (t || CreateQuotationModule)(); }, providers: [], imports: [[
            _create_quotation_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateQuotationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CreateQuotationModule, { imports: [_create_quotation_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateQuotationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateQuotationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _create_quotation_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateQuotationRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Yxct":
/*!**************************************************************************************!*\
  !*** ./src/app/system/views/quotation/createQuotation/create-quotation.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateQuotationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuotationComponent", function() { return CreateQuotationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreateQuotationComponent {
}
CreateQuotationComponent.??fac = function CreateQuotationComponent_Factory(t) { return new (t || CreateQuotationComponent)(); };
CreateQuotationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CreateQuotationComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function CreateQuotationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create Quotation Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcXVvdGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateQuotationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './create-quotation.component.html',
                styleUrls: ['./create-quotation.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "rqnt":
/*!*******************************************************************************************!*\
  !*** ./src/app/system/views/quotation/createQuotation/create-quotation-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateQuotationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuotationRoutingModule", function() { return CreateQuotationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_quotation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-quotation.component */ "Yxct");





const routes = [
    {
        path: '',
        component: _create_quotation_component__WEBPACK_IMPORTED_MODULE_2__["CreateQuotationComponent"],
        data: {
            title: 'Create Quotation'
        }
    }
];
class CreateQuotationRoutingModule {
}
CreateQuotationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CreateQuotationRoutingModule });
CreateQuotationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CreateQuotationRoutingModule_Factory(t) { return new (t || CreateQuotationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CreateQuotationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateQuotationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-quotation-createQuotation.js.map