(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-productsAndServices-viewServices"],{

/***/ "1Urh":
/*!***************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewServices/view-services.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewServicesModule", function() { return ViewServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _view_services_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-services-routing.module */ "D+js");



class ViewServicesModule {
}
ViewServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewServicesModule });
ViewServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewServicesModule_Factory(t) { return new (t || ViewServicesModule)(); }, providers: [], imports: [[
            _view_services_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewServicesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewServicesModule, { imports: [_view_services_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewServicesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _view_services_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewServicesRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "D+js":
/*!***********************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewServices/view-services-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewServicesRoutingModule", function() { return ViewServicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-services.component */ "fm+o");





const routes = [
    {
        path: '',
        component: _view_services_component__WEBPACK_IMPORTED_MODULE_2__["ViewServicesComponent"],
        data: {
            title: 'View Services'
        }
    }
];
class ViewServicesRoutingModule {
}
ViewServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewServicesRoutingModule });
ViewServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewServicesRoutingModule_Factory(t) { return new (t || ViewServicesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewServicesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fm+o":
/*!******************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewServices/view-services.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewServicesComponent", function() { return ViewServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const sqlite3 = window.require('sqlite3');
class ViewServicesComponent {
    test() {
        var db = new sqlite3.Database("./PTRdb.sqlite3", (err) => {
            if (err) {
                console.log('Error when conneting to the database', err);
            }
        });
        db.each("SELECT * FROM products", function (err, row) {
            console.log(row);
        });
        db.close();
    }
}
ViewServicesComponent.ɵfac = function ViewServicesComponent_Factory(t) { return new (t || ViewServicesComponent)(); };
ViewServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewServicesComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function ViewServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View services page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXNlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './view-services.component.html',
                styleUrls: ['./view-services.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "tUDy":
/*!************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/viewServices/index.ts ***!
  \************************************************************************/
/*! exports provided: ViewServicesModule, ViewServicesComponent, ViewServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_services_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-services.module */ "1Urh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewServicesModule", function() { return _view_services_module__WEBPACK_IMPORTED_MODULE_0__["ViewServicesModule"]; });

/* harmony import */ var _view_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-services.component */ "fm+o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewServicesComponent", function() { return _view_services_component__WEBPACK_IMPORTED_MODULE_1__["ViewServicesComponent"]; });

/* harmony import */ var _view_services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-services-routing.module */ "D+js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewServicesRoutingModule", function() { return _view_services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewServicesRoutingModule"]; });






/***/ })

}]);
//# sourceMappingURL=views-productsAndServices-viewServices.js.map