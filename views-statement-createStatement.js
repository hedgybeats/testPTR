(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-statement-createStatement"],{

/***/ "C9q9":
/*!*****************************************************************!*\
  !*** ./src/app/system/views/statement/createStatement/index.ts ***!
  \*****************************************************************/
/*! exports provided: CreateStatementModule, CreateStatementComponent, CreateStatementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_statement_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-statement.module */ "oQLC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateStatementModule", function() { return _create_statement_module__WEBPACK_IMPORTED_MODULE_0__["CreateStatementModule"]; });

/* harmony import */ var _create_statement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-statement.component */ "rH4u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateStatementComponent", function() { return _create_statement_component__WEBPACK_IMPORTED_MODULE_1__["CreateStatementComponent"]; });

/* harmony import */ var _create_statement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-statement-routing.module */ "XvAT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateStatementRoutingModule", function() { return _create_statement_routing_module__WEBPACK_IMPORTED_MODULE_2__["CreateStatementRoutingModule"]; });






/***/ }),

/***/ "XvAT":
/*!*******************************************************************************************!*\
  !*** ./src/app/system/views/statement/createStatement/create-statement-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateStatementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStatementRoutingModule", function() { return CreateStatementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_statement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-statement.component */ "rH4u");





const routes = [
    {
        path: '',
        component: _create_statement_component__WEBPACK_IMPORTED_MODULE_2__["CreateStatementComponent"],
        data: {
            title: 'Create Statement'
        }
    }
];
class CreateStatementRoutingModule {
}
CreateStatementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateStatementRoutingModule });
CreateStatementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateStatementRoutingModule_Factory(t) { return new (t || CreateStatementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateStatementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateStatementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "oQLC":
/*!***********************************************************************************!*\
  !*** ./src/app/system/views/statement/createStatement/create-statement.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateStatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStatementModule", function() { return CreateStatementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_statement_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-statement-routing.module */ "XvAT");



class CreateStatementModule {
}
CreateStatementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CreateStatementModule });
CreateStatementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CreateStatementModule_Factory(t) { return new (t || CreateStatementModule)(); }, providers: [], imports: [[
            _create_statement_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateStatementRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateStatementModule, { imports: [_create_statement_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateStatementRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateStatementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _create_statement_routing_module__WEBPACK_IMPORTED_MODULE_1__["CreateStatementRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "rH4u":
/*!**************************************************************************************!*\
  !*** ./src/app/system/views/statement/createStatement/create-statement.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStatementComponent", function() { return CreateStatementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreateStatementComponent {
}
CreateStatementComponent.ɵfac = function CreateStatementComponent_Factory(t) { return new (t || CreateStatementComponent)(); };
CreateStatementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateStatementComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function CreateStatementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Statement Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc3RhdGVtZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateStatementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './create-statement.component.html',
                styleUrls: ['./create-statement.component.css']
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-statement-createStatement.js.map