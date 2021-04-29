(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-productsAndServices-addService"],{

/***/ "EnZf":
/*!*******************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/addService/add-service-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceRoutingModule", function() { return AddServiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-service.component */ "ZDT+");





const routes = [
    {
        path: '',
        component: _add_service_component__WEBPACK_IMPORTED_MODULE_2__["AddServiceComponent"],
        data: {
            title: 'Add Service'
        }
    }
];
class AddServiceRoutingModule {
}
AddServiceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddServiceRoutingModule });
AddServiceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddServiceRoutingModule_Factory(t) { return new (t || AddServiceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddServiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddServiceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KEIW":
/*!***********************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/addService/add-service.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceModule", function() { return AddServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _add_service_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-service-routing.module */ "EnZf");



class AddServiceModule {
}
AddServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddServiceModule });
AddServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddServiceModule_Factory(t) { return new (t || AddServiceModule)(); }, providers: [], imports: [[
            _add_service_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddServiceRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddServiceModule, { imports: [_add_service_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddServiceRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _add_service_routing_module__WEBPACK_IMPORTED_MODULE_1__["AddServiceRoutingModule"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "YlfR":
/*!**********************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/addService/index.ts ***!
  \**********************************************************************/
/*! exports provided: AddServiceModule, AddServiceComponent, AddServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_service_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-service.module */ "KEIW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddServiceModule", function() { return _add_service_module__WEBPACK_IMPORTED_MODULE_0__["AddServiceModule"]; });

/* harmony import */ var _add_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-service.component */ "ZDT+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function() { return _add_service_component__WEBPACK_IMPORTED_MODULE_1__["AddServiceComponent"]; });

/* harmony import */ var _add_service_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-service-routing.module */ "EnZf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddServiceRoutingModule", function() { return _add_service_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddServiceRoutingModule"]; });






/***/ }),

/***/ "ZDT+":
/*!**************************************************************************************!*\
  !*** ./src/app/system/views/productsAndServices/addService/add-service.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function() { return AddServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const sqlite3 = window.require('sqlite3');
class AddServiceComponent {
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
AddServiceComponent.ɵfac = function AddServiceComponent_Factory(t) { return new (t || AddServiceComponent)(); };
AddServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddServiceComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function AddServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add service page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './add-service.component.html',
                styleUrls: ['./add-service.component.css']
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-productsAndServices-addService.js.map