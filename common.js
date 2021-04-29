(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "U7T7":
/*!************************************!*\
  !*** ./src/app/constants/index.ts ***!
  \************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "bl9C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"]; });




/***/ }),

/***/ "bl9C":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/enums */ "VzXK");



class Constants {
    constructor() {
        this.API_ENDPOINT = 'http://localhost:3080/api';
        this.API_MOCK_ENDPOINT = 'mock-domain/api';
        this.itemTypes = [
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ItemType"].PalletTruck, viewValue: 'Pallet Truck' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ItemType"].Stacker, viewValue: 'Stacker' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ItemType"].ForkLift, viewValue: 'ForkLift' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ItemType"].GarageJack, viewValue: 'Garage Jack' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ItemType"].BottleJack, viewValue: 'Bottle Jack' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ItemType"].Trolley, viewValue: 'Trolley' }
        ];
        this.productTypes = [
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ProductType"].PalletTruck, viewValue: 'Pallet Truck' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ProductType"].Stacker, viewValue: 'Stacker' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ProductType"].ForkLift, viewValue: 'ForkLift' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ProductType"].GarageJack, viewValue: 'Garage Jack' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ProductType"].BottleJack, viewValue: 'Bottle Jack' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ProductType"].Trolley, viewValue: 'Trolley' },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["ProductType"].NonSpecific, viewValue: 'Non-Specific' }
        ];
        this.monthOfYear = [
            { value: '01', viewValue: 'Jan' },
            { value: '02', viewValue: 'Feb' },
            { value: '03', viewValue: 'Mar' },
            { value: '04', viewValue: 'Apr' },
            { value: '05', viewValue: 'May' },
            { value: '06', viewValue: 'Jun' },
            { value: '07', viewValue: 'Jul' },
            { value: '08', viewValue: 'Aug' },
            { value: '09', viewValue: 'Sep' },
            { value: '10', viewValue: 'Oct' },
            { value: '11', viewValue: 'Nov' },
            { value: '12', viewValue: 'Dec' }
        ];
        this.invoiceTypes = [
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["InvoiceType"].Invoice, viewValue: "Invoice" },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["InvoiceType"].Proforma, viewValue: "Proforma Invoice" }
        ];
        this.paymentStatus = [
            { value: 1, viewValue: "Paid" },
            { value: 0, viewValue: "Unpaid" }
        ];
        this.userRoles = [
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["UserRole"].Admin, viewValue: "Administrator" },
            { value: _enums_enums__WEBPACK_IMPORTED_MODULE_1__["UserRole"].User, viewValue: "User" }
        ];
    }
}
Constants.ɵfac = function Constants_Factory(t) { return new (t || Constants)(); };
Constants.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Constants, factory: Constants.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Constants, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map