(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-quotation-viewQuotations"],{

/***/ "8L90":
/*!************************************************************************************!*\
  !*** ./src/app/system/views/quotation/viewQuotations/view-quotations.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewQuotationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuotationsComponent", function() { return ViewQuotationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ViewQuotationsComponent {
}
ViewQuotationsComponent.ɵfac = function ViewQuotationsComponent_Factory(t) { return new (t || ViewQuotationsComponent)(); };
ViewQuotationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewQuotationsComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function ViewQuotationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Quotations Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXF1b3RhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewQuotationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './view-quotations.component.html',
                styleUrls: ['./view-quotations.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "FmZr":
/*!*********************************************************************************!*\
  !*** ./src/app/system/views/quotation/viewQuotations/view-quotations.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewQuotationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuotationsModule", function() { return ViewQuotationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_quotations_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-quotations-routing.module */ "lJxz");



class ViewQuotationsModule {
}
ViewQuotationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewQuotationsModule });
ViewQuotationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewQuotationsModule_Factory(t) { return new (t || ViewQuotationsModule)(); }, providers: [], imports: [[
            _view_quotations_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewQuotationsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewQuotationsModule, { imports: [_view_quotations_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewQuotationsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewQuotationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _view_quotations_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewQuotationsRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "NUGn":
/*!****************************************************************!*\
  !*** ./src/app/system/views/quotation/viewQuotations/index.ts ***!
  \****************************************************************/
/*! exports provided: ViewQuotationsModule, ViewQuotationsComponent, ViewQuotationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_quotations_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-quotations.module */ "FmZr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewQuotationsModule", function() { return _view_quotations_module__WEBPACK_IMPORTED_MODULE_0__["ViewQuotationsModule"]; });

/* harmony import */ var _view_quotations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-quotations.component */ "8L90");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewQuotationsComponent", function() { return _view_quotations_component__WEBPACK_IMPORTED_MODULE_1__["ViewQuotationsComponent"]; });

/* harmony import */ var _view_quotations_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-quotations-routing.module */ "lJxz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewQuotationsRoutingModule", function() { return _view_quotations_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewQuotationsRoutingModule"]; });






/***/ }),

/***/ "lJxz":
/*!*****************************************************************************************!*\
  !*** ./src/app/system/views/quotation/viewQuotations/view-quotations-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewQuotationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuotationsRoutingModule", function() { return ViewQuotationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_quotations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-quotations.component */ "8L90");





const routes = [
    {
        path: '',
        component: _view_quotations_component__WEBPACK_IMPORTED_MODULE_2__["ViewQuotationsComponent"],
        data: {
            title: 'View Quotations'
        }
    }
];
class ViewQuotationsRoutingModule {
}
ViewQuotationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewQuotationsRoutingModule });
ViewQuotationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewQuotationsRoutingModule_Factory(t) { return new (t || ViewQuotationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewQuotationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewQuotationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-quotation-viewQuotations.js.map