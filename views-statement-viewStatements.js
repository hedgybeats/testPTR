(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-statement-viewStatements"],{

/***/ "DNKJ":
/*!************************************************************************************!*\
  !*** ./src/app/system/views/statement/viewStatements/view-statements.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewStatementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStatementsComponent", function() { return ViewStatementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ViewStatementsComponent {
}
ViewStatementsComponent.ɵfac = function ViewStatementsComponent_Factory(t) { return new (t || ViewStatementsComponent)(); };
ViewStatementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewStatementsComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function ViewStatementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Statements Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXN0YXRlbWVudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewStatementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './view-statements.component.html',
                styleUrls: ['./view-statements.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "d6/8":
/*!****************************************************************!*\
  !*** ./src/app/system/views/statement/viewStatements/index.ts ***!
  \****************************************************************/
/*! exports provided: ViewStatementsModule, ViewStatementsComponent, ViewStatementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_statements_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-statements.module */ "nXFT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewStatementsModule", function() { return _view_statements_module__WEBPACK_IMPORTED_MODULE_0__["ViewStatementsModule"]; });

/* harmony import */ var _view_statements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-statements.component */ "DNKJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewStatementsComponent", function() { return _view_statements_component__WEBPACK_IMPORTED_MODULE_1__["ViewStatementsComponent"]; });

/* harmony import */ var _view_statements_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-statements-routing.module */ "pFxL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewStatementsRoutingModule", function() { return _view_statements_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewStatementsRoutingModule"]; });






/***/ }),

/***/ "nXFT":
/*!*********************************************************************************!*\
  !*** ./src/app/system/views/statement/viewStatements/view-statements.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewStatementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStatementsModule", function() { return ViewStatementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_statements_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-statements-routing.module */ "pFxL");



class ViewStatementsModule {
}
ViewStatementsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewStatementsModule });
ViewStatementsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewStatementsModule_Factory(t) { return new (t || ViewStatementsModule)(); }, providers: [], imports: [[
            _view_statements_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewStatementsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewStatementsModule, { imports: [_view_statements_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewStatementsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewStatementsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _view_statements_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewStatementsRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "pFxL":
/*!*****************************************************************************************!*\
  !*** ./src/app/system/views/statement/viewStatements/view-statements-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewStatementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStatementsRoutingModule", function() { return ViewStatementsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_statements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-statements.component */ "DNKJ");





const routes = [
    {
        path: '',
        component: _view_statements_component__WEBPACK_IMPORTED_MODULE_2__["ViewStatementsComponent"],
        data: {
            title: 'View Statements'
        }
    }
];
class ViewStatementsRoutingModule {
}
ViewStatementsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewStatementsRoutingModule });
ViewStatementsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewStatementsRoutingModule_Factory(t) { return new (t || ViewStatementsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewStatementsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewStatementsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-statement-viewStatements.js.map