(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- The content below is only a placeholder and can be replaced. -->\n<mat-toolbar *ngIf=\"!openedSidenav\">\n\n    <mat-toolbar-row>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <img [src]=\"l10n.profile.photo\" alt=\"cv-photo-ico\" class=\"cv-photo-ico\">\n        </button>\n        <mat-menu #menu=\"matMenu\">\n        </mat-menu>\n        <!-- <span class=\"txt-toolbar\">{{l10n.profile.firstname}} {{l10n.profile.lastname}}</span> -->\n        <span class=\"toolbar-spacer\"></span>\n        <div class=\"bottom-right\" *ngFor=\"let item of l10n.social\">\n            <a [href]=\"item.link\" class=\"social\">\n                <fa-icon [icon]=\"item.icon\" class=\"fa-lg toolbar-icon\"> </fa-icon>\n            </a>\n        </div>\n        <span class=\"toolbar-spacer\"></span>\n        <div class=\"bottom-right\">\n            <div class=\"mat-mini-fab lightblubWrapper\">\n                <fa-icon [icon]=\"faLightbulb\" (click)=\"toggleTheme()\" matTooltip=\"{{l10n.tooltip_theme}}\" class=\"lightblub\"></fa-icon>\n            </div>\n            <app-l10n color=\"default\"></app-l10n>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [opened]=\"openedSidenav\" class=\"sidenav\" [fixedInViewport]=\"true\">\n        <div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center center\" class=\"container\">\n            <!-- content here -->\n            <div fxLayout=\" wrap\">\n                <div fxFlex=\"25\" fxLayout=\"column\" style=\"padding: 5px;\">\n                    <img [src]=\"l10n.profile.photo\" alt=\"cv-photo\" class=\"cv-photo\">\n                </div>\n\n            </div>\n            <!--  SOCIAL -->\n            <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0.5vw\" fxLayoutGap.xs=\"1vw\">\n                <div class=\"bottom-right\" *ngFor=\"let item of this.l10n.social\">\n                    <a [href]=\"item.link\" class=\"social\">\n                        <fa-icon [icon]=\"item.icon\" class=\"fa-lg\"> </fa-icon>\n                    </a>\n                </div>\n            </div>\n            <div class=\"new-line\"></div>\n            <!-- SETTINGS -->\n            <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0.5vw\" fxLayoutGap.xs=\"1vw\">\n                <div class=\"bottom-right\">\n                    <div class=\"mat-mini-fab lightblubWrapper\">\n                        <fa-icon [icon]=\"faLightbulb\" (click)=\"toggleTheme()\" matTooltip=\"{{l10n.tooltip_theme}}\" class=\"lightblub\"></fa-icon>\n                    </div>\n                    <app-l10n color=\"default\"></app-l10n>\n                </div>\n            </div>\n        </div>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n\n        <!-- ABOUT  -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-about></app-about>\n        </div>\n\n        <!-- EXPERIENCES -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-experiences></app-experiences>\n        </div>\n\n        <!-- EDUCATION -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-education></app-education>\n        </div>\n\n        <!-- SKILLS -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-skills></app-skills>\n        </div>\n\n        <!-- VOLUNTARY WORK -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-voluntary></app-voluntary>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n    {{l10n.profile.firstname}}\n    <span class=\"text-primary\">{{l10n.profile.lastname}}</span>\n</h1>\n\n<h2 class=\"text-primary\">\n    {{l10n.profile.title}}\n</h2>\n\n<div class=\"text-secondary sub-h\">\n    {{l10n.profile.city}} {{l10n.profile.phone}}\n    <a [href]=\"l10n.profile.mail\" class='text-primary'> {{l10n.profile.mail}}</a>\n</div>\n<p>\n    {{l10n.profile.summary}}\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <!-- material cntent here -->\n            <h1>\n                {{l10n.education}}\n            </h1>\n            <mat-card *ngFor=\"let ex of l10n.educations\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\"></div>\n                    <mat-card-title>{{ex.university}}</mat-card-title>\n                    <mat-card-subtitle>\n                        {{ex.degree}}\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                    <p class=\"p-list\"> {{ex.title}}</p>\n                    <p class=\"p-list\">\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        {{ex.city}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experiences/experiences.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/experiences/experiences.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- material cntent here -->\n\n<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n\n\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <h1>\n                {{l10n.experience}}\n            </h1>\n            <mat-card *ngFor=\"let ex of l10n.experiences\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\">\n                    </div>\n                    <mat-card-title>{{ex.title}}</mat-card-title>\n                    <mat-card-subtitle>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"home icon\">home</mat-icon>\n                        {{ex.location}}\n                        ({{ex.company}})\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                        <p *ngFor=\"let task of ex.description\" class=\"p-list\"> ➡️ {{task}}</p>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- material cntent here -->\n<h1>\n    {{l10n.skill}}\n</h1>\n<div fxLayout=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap.xs=\"2dpx\" fxLayoutAlign=\"center center\" >\n    <mat-card *ngFor=\"let item of l10n.skills\" class=\"logo-card\">\n        <fa-icon [icon]=\"item.icon\" [matTooltip]=\"item.name\" class=\"fa-3x\"></fa-icon>\n    </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/voluntary/voluntary.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/voluntary/voluntary.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- material cntent here -->\r\n\r\n<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\r\n    <!-- content here -->\r\n    <div fxLayout=\" wrap\">\r\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\r\n            <h1>\r\n                {{l10n.voluntary}}\r\n            </h1>\r\n            <mat-card *ngFor=\"let ex of l10n.voluntaries\" class=\"card-element card-text\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"example-header-image\"\r\n                        [style.background-image]=\"'url(' + ex.picture + ')'\">\r\n                    </div>\r\n                    <mat-card-title>{{ex.title}}</mat-card-title>\r\n                    <mat-card-subtitle>\r\n                        <p class=\"p-list\">\r\n                            <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\r\n                            <span class=\"text-primary\" style=\"margin-right: 10px;\">\r\n                                {{ex.period}}\r\n                            </span>\r\n                            {{ex.description}}\r\n                        </p>\r\n                    </mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/l10n/l10n.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/l10n/l10n.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"language-selection\" matTooltip=\"{{l10n.tooltip_language}}\" matTooltipPosition=\"right\" mat-button mat-mini-fab [matMenuTriggerFor]=\"appMenu\" [color]=color>\r\n    <mat-icon aria-label=\"Select Language\">translate</mat-icon>\r\n    <mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\r\n      <button mat-menu-item (click)=\"changeLocalization(lang.id)\" *ngFor=\"let lang of l10n_languages\">{{lang.name}}</button>\r\n    </mat-menu>\r\n</button>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-line {\n  margin-bottom: 15px !important;\n}\n\n.lightblubWrapper {\n  background-color: var(--background-lightblub);\n  margin-right: 10px;\n}\n\n@media screen and (max-width: 400px) {\n  .lightblubWrapper {\n    max-width: 36px;\n    max-height: 36px;\n  }\n}\n\n.lightblub {\n  color: var(--header-text-color);\n  cursor: pointer;\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kL2Rldi9wcm9qZWN0cy9naXRodWIvY3Yvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSw2Q0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ0NKO0FBQ0Y7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1saW5lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpZ2h0Ymx1YldyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodGJsdWIpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmxpZ2h0Ymx1YldyYXBwZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDM2cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saWdodGJsdWIge1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci10ZXh0LWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn0iLCIubmV3LWxpbmUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saWdodGJsdWJXcmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodGJsdWIpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5saWdodGJsdWJXcmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDM2cHg7XG4gICAgbWF4LWhlaWdodDogMzZweDtcbiAgfVxufVxuLmxpZ2h0Ymx1YiB7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/theme */ "./src/app/theme/theme.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");









let AppComponent = class AppComponent {
    constructor(store, titleService, themeService, localizationService) {
        this.store = store;
        this.titleService = titleService;
        this.themeService = themeService;
        this.localizationService = localizationService;
        this.title = 'cv-app';
        this.openedSidenav = false;
        this.themeService.setActiveTheme(_theme_theme__WEBPACK_IMPORTED_MODULE_4__["dark"]);
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit(e) {
        this.onResize(e);
        this.getLocalization();
        this.setLightbulb();
        this.titleService.setTitle('| CV | ' + this.l10n.profile.lastname);
    }
    onResize(event) {
        let width;
        if (event != undefined) {
            width = event.target.innerWidth;
        }
        else {
            width = document.body.clientWidth;
        }
        if (width >= 720) {
            this.openedSidenav = true;
        }
        else {
            this.openedSidenav = false;
        }
    }
    setLightbulb() {
        if (this.themeService.isDarkTheme()) {
            this.faLightbulb = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLightbulb"];
        }
        else {
            this.faLightbulb = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLightbulb"];
        }
    }
    toggleTheme() {
        if (this.themeService.isDarkTheme()) {
            this.themeService.setLightTheme();
        }
        else {
            this.themeService.setDarkTheme();
        }
        this.setLightbulb();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"] },
    { type: _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_8__["LocalizationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppComponent.prototype, "onResize", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
        _theme_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_8__["LocalizationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/experiences/experiences.component */ "./src/app/components/experiences/experiences.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_voluntary_voluntary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/voluntary/voluntary.component */ "./src/app/components/voluntary/voluntary.component.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");
/* harmony import */ var _l10n_l10n_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./l10n/l10n.component */ "./src/app/l10n/l10n.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_11__["ExperiencesComponent"],
            _components_education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
            _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"],
            _components_voluntary_voluntary_component__WEBPACK_IMPORTED_MODULE_14__["VoluntaryComponent"],
            _l10n_l10n_component__WEBPACK_IMPORTED_MODULE_16__["LocalizationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]
        ],
        providers: [_l10n_l10n_service__WEBPACK_IMPORTED_MODULE_15__["LocalizationService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");




let AboutComponent = class AboutComponent {
    constructor(store, localizationService) {
        this.store = store;
        this.localizationService = localizationService;
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit() {
        this.getLocalization();
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/education/education.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");




let EducationComponent = class EducationComponent {
    constructor(store, localizationService) {
        this.store = store;
        this.localizationService = localizationService;
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit() {
        this.getLocalization();
    }
};
EducationComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] }
];
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/components/education/education.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
], EducationComponent);



/***/ }),

/***/ "./src/app/components/experiences/experiences.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/experiences/experiences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");




let ExperiencesComponent = class ExperiencesComponent {
    constructor(store, localizationService) {
        this.store = store;
        this.localizationService = localizationService;
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit() {
        this.getLocalization();
    }
};
ExperiencesComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] }
];
ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experiences',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experiences.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experiences/experiences.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experiences.component.scss */ "./src/app/components/experiences/experiences.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
], ExperiencesComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-card {\n  width: 14vw;\n  text-align: center;\n}\n\nfa-icon:hover {\n  color: #779ecb !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kL2Rldi9wcm9qZWN0cy9naXRodWIvY3Yvc3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElBO0VBQ0kseUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNhcmQge1xuICAgIHdpZHRoOiAxNHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbmZhLWljb246aG92ZXIge1xuICAgIGNvbG9yOiAjNzc5ZWNiICFpbXBvcnRhbnQ7XG59IiwiLmxvZ28tY2FyZCB7XG4gIHdpZHRoOiAxNHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZhLWljb246aG92ZXIge1xuICBjb2xvcjogIzc3OWVjYiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");









let SkillsComponent = class SkillsComponent {
    constructor(library, faConfig, store, localizationService) {
        this.store = store;
        this.localizationService = localizationService;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fab"]);
        faConfig.defaultPrefix = 'far';
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit() {
        this.getLocalization();
    }
};
SkillsComponent.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"] },
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaConfig"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"] },
    { type: _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_7__["LocalizationService"] }
];
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/skills/skills.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaConfig"],
        _services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_7__["LocalizationService"]])
], SkillsComponent);



/***/ }),

/***/ "./src/app/components/voluntary/voluntary.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/voluntary/voluntary.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-header-image {\n  background-position: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kL2Rldi9wcm9qZWN0cy9naXRodWIvY3Yvc3JjL2FwcC9jb21wb25lbnRzL3ZvbHVudGFyeS92b2x1bnRhcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdm9sdW50YXJ5L3ZvbHVudGFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZvbHVudGFyeS92b2x1bnRhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59IiwiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/voluntary/voluntary.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/voluntary/voluntary.component.ts ***!
  \*************************************************************/
/*! exports provided: VoluntaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluntaryComponent", function() { return VoluntaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");




let VoluntaryComponent = class VoluntaryComponent {
    constructor(store, localizationService) {
        this.store = store;
        this.localizationService = localizationService;
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit() {
        this.getLocalization();
    }
};
VoluntaryComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] },
    { type: _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] }
];
VoluntaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voluntary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voluntary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/voluntary/voluntary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voluntary.component.scss */ "./src/app/components/voluntary/voluntary.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
], VoluntaryComponent);



/***/ }),

/***/ "./src/app/l10n/l10n.component.css":
/*!*****************************************!*\
  !*** ./src/app/l10n/l10n.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 400px) {\r\n    button.language-selection {\r\n      max-width: 36px;\r\n      max-height: 36px;\r\n    }\r\n  \r\n    button.language-selection .mat-icon {\r\n      font-size: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbDEwbi9sMTBuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sMTBuL2wxMG4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBidXR0b24ubGFuZ3VhZ2Utc2VsZWN0aW9uIHtcclxuICAgICAgbWF4LXdpZHRoOiAzNnB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYnV0dG9uLmxhbmd1YWdlLXNlbGVjdGlvbiAubWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/l10n/l10n.component.ts":
/*!****************************************!*\
  !*** ./src/app/l10n/l10n.component.ts ***!
  \****************************************/
/*! exports provided: LocalizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationComponent", function() { return LocalizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _l10n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./l10n.service */ "./src/app/l10n/l10n.service.ts");



let LocalizationComponent = class LocalizationComponent {
    constructor(localizationService) {
        this.localizationService = localizationService;
        this.color = 'default';
        this.l10n_languages = [];
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        const all = this.localizationService.getAll();
        for (const language_id in all) {
            if (all.hasOwnProperty(language_id)) {
                this.l10n_languages.push({ 'id': language_id, 'name': all[language_id].language_name });
            }
        }
    }
    initLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit() {
        this.initLocalization();
        this.getLocalization();
    }
    changeLocalization(language) {
        let current_language = 'EN';
        try {
            current_language = JSON.parse(localStorage.getItem('l10n')).language;
        }
        catch (err) { }
        localStorage.setItem('l10n', JSON.stringify({ language: language }));
        if (current_language !== language) {
            this.localizationService.changeLanguage(language);
        }
    }
};
LocalizationComponent.ctorParameters = () => [
    { type: _l10n_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LocalizationComponent.prototype, "color", void 0);
LocalizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-l10n',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./l10n.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/l10n/l10n.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./l10n.component.css */ "./src/app/l10n/l10n.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_l10n_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"]])
], LocalizationComponent);



/***/ }),

/***/ "./src/app/l10n/l10n.service.ts":
/*!**************************************!*\
  !*** ./src/app/l10n/l10n.service.ts ***!
  \**************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_data_l10n_perso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/l10n.perso */ "./src/assets/data/l10n.perso.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let LocalizationService = class LocalizationService {
    constructor() {
        this.defaultLanguage = 'EN';
        this.languageChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    changeLanguage(language) {
        this.languageChanged.next(_assets_data_l10n_perso__WEBPACK_IMPORTED_MODULE_2__["L10N"][language]);
    }
    getAll() {
        return _assets_data_l10n_perso__WEBPACK_IMPORTED_MODULE_2__["L10N"];
    }
    get(language) {
        if (_assets_data_l10n_perso__WEBPACK_IMPORTED_MODULE_2__["L10N"].hasOwnProperty(language)) {
            return _assets_data_l10n_perso__WEBPACK_IMPORTED_MODULE_2__["L10N"][language]; // TODO merge with EN as default values
        }
        return this.getDefault();
    }
    getDefault() {
        let language = this.defaultLanguage;
        try {
            language = JSON.parse(localStorage.getItem('l10n')).language;
        }
        catch (err) { }
        return _assets_data_l10n_perso__WEBPACK_IMPORTED_MODULE_2__["L10N"][language];
    }
};
LocalizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LocalizationService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreService = class StoreService {
    constructor() {
        this.cvData = {};
    }
};
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StoreService);



/***/ }),

/***/ "./src/app/theme/theme.service.ts":
/*!****************************************!*\
  !*** ./src/app/theme/theme.service.ts ***!
  \****************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/app/theme/theme.ts");



let ThemeService = class ThemeService {
    constructor() {
        this.active = _theme__WEBPACK_IMPORTED_MODULE_2__["dark"];
        this.availableThemes = [_theme__WEBPACK_IMPORTED_MODULE_2__["light"], _theme__WEBPACK_IMPORTED_MODULE_2__["dark"]];
        this.stylesBasePath = `node_modules/@angular/material/prebuilt-themes/`;
    }
    getAvailableThemes() {
        return this.availableThemes;
    }
    getActiveTheme() {
        return this.active;
    }
    isDarkTheme() {
        return this.active.name === _theme__WEBPACK_IMPORTED_MODULE_2__["dark"].name;
    }
    setDarkTheme() {
        this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_2__["dark"]);
    }
    setLightTheme() {
        this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_2__["light"]);
    }
    setActiveTheme(theme) {
        this.active = theme;
        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(property, this.active.properties[property]);
        });
    }
};
ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ThemeService);



/***/ }),

/***/ "./src/app/theme/theme.ts":
/*!********************************!*\
  !*** ./src/app/theme/theme.ts ***!
  \********************************/
/*! exports provided: light, dark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const light = {
    name: "light",
    properties: {
        "--background-color": "#FFFFFF",
        "--background-sidebar-color": "#F5F5F5",
        "--background-main-color": "#FFFFFF",
        "--header-text-color": "#4d4d4d",
        "--cv-photo-color": "#779ecb",
        "--background-lightblub": "none",
    }
};
const dark = {
    name: "dark",
    properties: {
        "--background-color": "#424242",
        "--background-sidebar-color": "#424242",
        "--background-main-color": "#424242",
        "--header-text-color": "#FFFFFF",
        "--cv-photo-color": "rgba(255, 255, 255, .2)",
        "--background-lightblub": "#4d4d4d",
    }
};


/***/ }),

/***/ "./src/assets/data/l10n.perso.ts":
/*!***************************************!*\
  !*** ./src/assets/data/l10n.perso.ts ***!
  \***************************************/
/*! exports provided: L10N */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L10N", function() { return L10N; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const L10N = {
    'EN': {
        language_name: 'English',
        "tooltip_language": "Select Language",
        "tooltip_theme": "Change Theme",
        "profile": {
            "firstname": "MARCEL",
            "lastname": " LEENINGS ",
            "title": "Software developer",
            "photo": "./assets/img/avataaars.png",
            "city": "Kerken, Germany",
            "phone": "",
            "mail": "marcel.leenings@gmail.com",
            "summary": "Software developer with with excellent math skills and a love of sport."
        },
        "social": [
            {
                "name": "xing",
                "link": "https://www.xing.com/profile/Marcel_Leenings/cv",
                "icon": ["fab", "xing"]
            },
            {
                "name": "linkedin",
                "link": "https://www.linkedin.com/in/marcel-leenings-b454b4186/",
                "icon": ["fab", "linkedin"]
            },
            {
                "name": "github",
                "link": "https://github.com/mleenings/",
                "icon": ["fab", "github"]
            }
        ],
        "experience": "EXPERIENCE",
        "experiences": [{
                "company": "adesso SE",
                "picture": "https://media-exp1.licdn.com/dms/image/C4D0BAQFq_-3lDAu5Dw/company-logo_200_200/0/1556534809219?e=1616630400&v=beta&t=1Sc3JwIIVflRvtd2lJp0wacDI2UisNZG8m4dvvKyzYM",
                "location": "Essen, Germany",
                "title": "Software developer",
                "period": "FEB 2021 - today",
                "description": [
                    "Java Fullstack developer",
                    "Working inhouse at life science projects",
                    "Tech-Stack: Angular, Java, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, IntelliJ",
                ]
            },
            {
                "company": "no company",
                "picture": "./assets/img/ML.png",
                "title": "Looking for work & further education",
                "period": "JAN 2020",
                "description": [
                    "further education: Spring Cloud, Angular",
                ]
            },
            {
                "company": "Collenda GmbH",
                "picture": "https://media-exp1.licdn.com/dms/image/C4D0BAQFBWOiW6XDjog/company-logo_200_200/0?e=1614211200&v=beta&t=nw5krdCDy62K56z6ohtI-fOexfN283-s2XKvlyq_m8c",
                "location": "Dusseldorf, Germany",
                "title": "Software developer",
                "period": "DEC 2020",
                "description": [
                    "Java Fullstack developer",
                    "Working inhouse at the credit life cycle for banks.",
                    "Tech-Stack: Java, React, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse",
                    "Fired: Because of the COVID-19 pandemic and severe economic consequences for the company"
                ]
            },
            {
                "company": "Bechtle",
                "picture": "https://www.bechtle.com/.resources/bechtle-ui/webresources/assets/img/logo-bechtle.png",
                "location": "Bonn, Germany",
                "title": "Software developer",
                "period": "OCT 2019 - NOV 2020",
                "description": [
                    "Java Fullstack developer",
                    "Working at a customer for banking supervision in the public sector. ",
                    "Tech-Stack: Java, JSF, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse"
                ]
            },
            {
                "company": "Senacor",
                "picture": "https://media-exp1.licdn.com/dms/image/C4E0BAQHTQptOLzZsOw/company-logo_200_200/0/1519888622907?e=1614211200&v=beta&t=nOGVDsuS1Ky5XW1BfgqzVfryKRmHqr66bcr2BHGIjBY",
                "location": "Bonn, Germany",
                "title": "Software developer",
                "period": "MAR 2017 - SEP 2019",
                "description": [
                    "Frontend developer",
                    "Developing of a consulting webfrontends for a big national bank in an international team at the customer.",
                    "Tech-Stack: Java, Spring, Wicket, JavaScript, React, Maven, Scrum, Wasserfall, Atlassian, IntelliJ"
                ]
            },
            {
                "company": "RWTH Aachen",
                "picture": "https://www.itc.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaafpoycw&w=223&q=77&meta=0",
                "location": "Aachen, Germany",
                "title": "Software developer (Scientific Assistant)",
                "period": "SEP 2014 - FEB 2017",
                "description": [
                    "Windows application for automatic testplaning at embedded and security relevant systems",
                    "Developing of a image- and datamanagement Webapplication for clinical studies of rare diseases",
                    "Tech-Stack: C#, MySQL, SVN, Java, GWT, Hibernate, SOAP, Maven, Tomcat"
                ]
            }
        ],
        "education": "EDUCATION",
        "educations": [{
                "title": "Master's degree of Technomathematik",
                "city": "Aachen, Germany",
                "degree": "Master of Science",
                "period": "SEP 2014 - JAN 2017",
                "university": "FH Aachen",
                "picture": "https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"
            },
            {
                "title": "Bachelor's degree in Scientific Programming",
                "city": "Aachen, Germany",
                "degree": "Bachelor of Science",
                "period": "SEP 2011 - AUG 2014",
                "university": "FH Aachen",
                "picture": "https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"
            },
            {
                "title": "Mathematisch-technischer Softwareentwickler",
                "city": "Aachen, Germany",
                "degree": "IHK Training as 'Mathematisch-technischer Softwareentwickler'",
                "period": "SEP 2011 - AUG 2014",
                "university": "INFORM GmbH",
                "picture": "https://www.inform-software.de/typo3conf/ext/mmpackage/Resources/Public/Images/inform-logo.png"
            }
        ],
        "skill": "SKILLS",
        "skills": [
            {
                "name": "Java",
                "icon": ["fab", "java"]
            },
            {
                "name": "Javascript",
                "icon": ["fab", "js"]
            },
            {
                "name": "Angular",
                "icon": ["fab", "angular"]
            },
            {
                "name": "React",
                "icon": ["fab", "react"]
            },
            {
                "name": "Node.js",
                "icon": ["fab", "node-js"]
            },
            {
                "name": "Database",
                "icon": ["fas", "database"]
            },
            {
                "name": "HTML5",
                "icon": ["fab", "html5"]
            },
            {
                "name": "CSS3",
                "icon": ["fab", "css3-alt"]
            },
            {
                "name": "Git",
                "icon": ["fab", "git-alt"]
            },
            {
                "name": "Python",
                "icon": ["fab", "python"]
            },
            {
                "name": "Docker",
                "icon": ["fab", "docker"]
            },
            {
                "name": "Linux",
                "icon": ["fab", "linux"]
            },
            {
                "name": "Apple",
                "icon": ["fab", "apple"]
            },
            {
                "name": "Windows",
                "icon": ["fab", "windows"]
            },
            {
                "name": "Artificial Intelligence",
                "icon": ["fas", "brain"]
            }
        ],
        "voluntary": "VOLUNTARIES",
        "voluntaries": [{
                "title": "Trainer and clubmanagement",
                "description": "Various judo clubs",
                "period": "2007 - 2018",
                "picture": "https://www.judobund.de/fileadmin/templates/judobund2018/images/logo_djb.png"
            },
            {
                "title": "Development and maintenance of a club website",
                "description": "HSZ Aachen",
                "period": "2012 - 2018",
                "picture": "https://hochschulsport.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaaasxplr"
            },
            {
                "title": "Athlete",
                "description": "German judo national league",
                "period": "2014 - 2018",
                "picture": "https://www.deutsche-judo-bundesliga.de/images/header/logo-judo-bundesliga.png"
            }
        ]
    },
    'DE': {
        language_name: 'Deutsch',
        "tooltip_language": "Sprache auswählen",
        "tooltip_theme": "Theme wechseln",
        "profile": {
            "firstname": "MARCEL",
            "lastname": " LEENINGS ",
            "title": "Software-Entwickler",
            "photo": "./assets/img/avataaars.png",
            "city": "Kerken, Deutschland",
            "phone": "",
            "mail": "marcel.leenings@gmail.com",
            "summary": "Software-Entwickler mit hervorangenden Mathematik Fähigkeiten und einer Liebe zum Sport."
        },
        "social": [
            {
                "name": "xing",
                "link": "https://www.xing.com/profile/Marcel_Leenings/cv",
                "icon": ["fab", "xing"]
            },
            {
                "name": "linkedin",
                "link": "https://www.linkedin.com/in/marcel-leenings-b454b4186/",
                "icon": ["fab", "linkedin"]
            },
            {
                "name": "github",
                "link": "https://github.com/mleenings/",
                "icon": ["fab", "github"]
            }
        ],
        "experience": "ERFAHRUNGEN",
        "experiences": [
            {
                "company": "adesso SE",
                "picture": "https://media-exp1.licdn.com/dms/image/C4D0BAQFq_-3lDAu5Dw/company-logo_200_200/0/1556534809219?e=1616630400&v=beta&t=1Sc3JwIIVflRvtd2lJp0wacDI2UisNZG8m4dvvKyzYM",
                "location": "Essen, Germany",
                "title": "Software Entwickler",
                "period": "FEB 2021 - heute",
                "description": [
                    "Java Fullstack Entwickler",
                    "Inhouse Softwareentwicklung von Life-Science Projekten",
                    "Tech-Stack: Angular, Java, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, IntelliJ",
                ]
            },
            {
                "company": "keine Firma",
                "picture": "./assets/img/ML.png",
                "title": "Jobsuche & Weiterbildung",
                "period": "JAN 2020",
                "description": [
                    "Weiterbildung: Spring Cloud, Angular",
                ]
            },
            {
                "company": "Collenda GmbH",
                "picture": "https://media-exp1.licdn.com/dms/image/C4D0BAQFBWOiW6XDjog/company-logo_200_200/0?e=1614211200&v=beta&t=nw5krdCDy62K56z6ohtI-fOexfN283-s2XKvlyq_m8c",
                "location": "Düsseldorf, Germany",
                "title": "Software Entwickler",
                "period": "DEZ 2020 - HEUTE",
                "description": [
                    "Java Fullstack Entwickler",
                    "Entwicklung einer Software für den gesamten Kreditlebenszyklus für Banken.",
                    "Tech-Stack: Java, React, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse",
                    "Info: Aufgrund der COVID-19 Pandemie und schweren wirtschaftlichen Folgen für das Unternehmen, den Job nicht angetreten."
                ]
            },
            {
                "company": "Bechtle",
                "picture": "https://www.bechtle.com/.resources/bechtle-ui/webresources/assets/img/logo-bechtle.png",
                "location": "Bonn, Deutschland",
                "title": "Software Entwickler",
                "period": "OKT 2019 - NOV 2020",
                "description": [
                    "Java Fullstack Entwickler",
                    "Entwicklung einer Anwendung für den Öffentlichen Sektor zur Bankenüberwachung, beim Kunden.",
                    "Tech-Stack: Java, JSF, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse"
                ]
            },
            {
                "company": "Senacor",
                "picture": "https://media-exp1.licdn.com/dms/image/C4E0BAQHTQptOLzZsOw/company-logo_200_200/0/1519888622907?e=1614211200&v=beta&t=nOGVDsuS1Ky5XW1BfgqzVfryKRmHqr66bcr2BHGIjBY",
                "location": "Bonn, Deutschland",
                "title": "Software Entwickler",
                "period": "MRZ 2017 - SEP 2019",
                "description": [
                    "Software Entwickler",
                    "Entwicklung eines Webfrontends für eine große nationale Bank in einem internationalen verteilten Team beim Kunden.",
                    "Tech-Stack: Java, Spring, Wicket, JavaScript, React, Maven, Scrum, Wasserfall, Atlassian, IntelliJ"
                ]
            },
            {
                "company": "RWTH Aachen",
                "picture": "https://www.itc.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaafpoycw&w=223&q=77&meta=0",
                "location": "Aachen, Deutschland",
                "title": "Software Entwickler (Studentische Hilfskraft)",
                "period": "SEP 2014 - FEB 2017",
                "description": [
                    "Entwicklung einer Windows Anwendung zur automatisierter Testplanung für eingebettete und sicherheitsrelevante Systeme.",
                    "Entwicklung einer Bild- und Datamanagement Webaplikation für klinische Studien von seltenen Krankheiten.",
                    "Tech-Stack: C#, MySQL, SVN, Java, GWT, Hibernate, SOAP, Maven, Tomcat"
                ]
            }
        ],
        "education": "AUSBILDUNG",
        "educations": [{
                "title": "Master Technomathematik",
                "city": "Aachen, Deutschland",
                "degree": "Master of Science",
                "period": "SEP 2014 - JAN 2017",
                "university": "FH Aachen",
                "picture": "https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"
            },
            {
                "title": "Bachelor Scientific Programming",
                "city": "Aachen, Germany",
                "degree": "Bachelor of Science",
                "period": "SEP 2011 - AUG 2014",
                "university": "FH Aachen",
                "picture": "https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"
            },
            {
                "title": "Mathematisch-technischer Softwareentwickler",
                "city": "Aachen, Deutschland",
                "degree": "IHK Ausbildung als 'Mathematisch-technischer Softwareentwickler'",
                "period": "SEP 2011 - AUG 2014",
                "university": "INFORM GmbH",
                "picture": "https://www.inform-software.de/typo3conf/ext/mmpackage/Resources/Public/Images/inform-logo.png"
            }
        ],
        "skill": "FÄHIGKEITEN",
        "skills": [
            {
                "name": "Java",
                "icon": ["fab", "java"]
            },
            {
                "name": "Javascript",
                "icon": ["fab", "js"]
            },
            {
                "name": "Angular",
                "icon": ["fab", "angular"]
            },
            {
                "name": "React",
                "icon": ["fab", "react"]
            },
            {
                "name": "Node.js",
                "icon": ["fab", "node-js"]
            },
            {
                "name": "Database",
                "icon": ["fas", "database"]
            },
            {
                "name": "HTML5",
                "icon": ["fab", "html5"]
            },
            {
                "name": "CSS3",
                "icon": ["fab", "css3-alt"]
            },
            {
                "name": "Git",
                "icon": ["fab", "git-alt"]
            },
            {
                "name": "Python",
                "icon": ["fab", "python"]
            },
            {
                "name": "Docker",
                "icon": ["fab", "docker"]
            },
            {
                "name": "Linux",
                "icon": ["fab", "linux"]
            },
            {
                "name": "Apple",
                "icon": ["fab", "apple"]
            },
            {
                "name": "Windows",
                "icon": ["fab", "windows"]
            },
            {
                "name": "Artificial Intelligence",
                "icon": ["fas", "brain"]
            }
        ],
        "voluntary": "EHRENAMTLICHE TÄTIGKEITEN",
        "voluntaries": [{
                "title": "Trainer and Vereinsmanagement",
                "description": "Various judo clubs",
                "period": "2007 - 2018",
                "picture": "https://www.judobund.de/fileadmin/templates/judobund2018/images/logo_djb.png"
            },
            {
                "title": "Entwicklung und Wartung einer Vereinswebseite",
                "description": "HSZ Aachen",
                "period": "2012 - 2018",
                "picture": "https://hochschulsport.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaaasxplr"
            },
            {
                "title": "Athlet",
                "description": "German Judo Bundesliga",
                "period": "2014 - 2018",
                "picture": "https://www.deutsche-judo-bundesliga.de/images/header/logo-judo-bundesliga.png"
            }
        ]
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));
if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    if (window) {
        window.console.log = function () { };
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /d/dev/projects/github/cv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map