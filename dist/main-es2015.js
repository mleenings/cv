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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n<mat-toolbar *ngIf=\"!openedSidenav\">\n\n    <mat-toolbar-row>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <img [src]=\"store.cvData.profile.photo\" alt=\"cv-photo-ico\" class=\"cv-photo-ico\">\n        </button>\n        <mat-menu #menu=\"matMenu\">\n        </mat-menu>\n        <!-- <span class=\"txt-toolbar\">{{store.cvData.profile.firstname}} {{store.cvData.profile.lastname}}</span> -->\n        <span class=\"toolbar-spacer\"></span>\n        <div class=\"bottom-right\" *ngFor=\"let item of this.store.cvData.social\">\n            <a [href]=\"item.link\" class=\"social\">\n                <fa-icon [icon]=\"item.icon\" class=\"fa-lg toolbar-icon\"> </fa-icon>\n            </a>\n        </div>\n        \n        \n\n    </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [opened]=\"openedSidenav\" class=\"sidenav\" [fixedInViewport]=\"true\">\n        <div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center center\" class=\"container\">\n            <!-- content here -->\n            <div fxLayout=\" wrap\">\n                <div fxFlex=\"25\" fxLayout=\"column\" style=\"padding: 5px;\">\n                    <img [src]=\"store.cvData.profile.photo\" alt=\"cv-photo\" class=\"cv-photo\">\n                </div>\n\n            </div>\n            <!--  SOCIAL -->\n            <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0.5vw\" fxLayoutGap.xs=\"1vw\">\n                <div class=\"bottom-right\" *ngFor=\"let item of this.store.cvData.social\">\n                    <a [href]=\"item.link\" class=\"social\">\n                        <fa-icon [icon]=\"item.icon\" class=\"fa-lg\"> </fa-icon>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n\n        <!-- ABOUT  -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-about></app-about>\n        </div>\n\n        <!-- EXPERIENCES -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-experiences></app-experiences>\n        </div>\n\n        <!-- EDUCATION -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-education></app-education>\n        </div>\n\n\n        <!-- SKILLS -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-skills></app-skills>\n        </div>\n\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{this.store.cvData.profile.firstname}}\n    <span class=\"text-primary\">{{this.store.cvData.profile.lastname}}</span>\n</h1>\n\n<h2 class=\"text-primary\">\n    {{this.store.cvData.profile.title}}\n</h2>\n\n<div class=\"text-secondary sub-h\">\n    {{this.store.cvData.profile.city}} {{this.store.cvData.profile.phone}}\n    <a [href]=\"this.store.cvData.profile.mail\" class='text-primary'> {{this.store.cvData.profile.mail}}</a>\n</div>\n\n\n<p>\n    {{this.store.cvData.profile.summary}}\n</p>\n\n<!-- <div class=\"bottom-right\" *ngFor=\"let item of this.store.cvData.social\">\n    <a [href]=\"item.link\">\n        <fa-icon [icon]=\"item.icon\" class=\"fa-3x\"></fa-icon>\n    </a>\n</div> -->\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/education/education.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n\n\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <!-- material cntent here -->\n            <h1>\n                EDUCATION\n            </h1>\n            <mat-card *ngFor=\"let ex of store.cvData.educations\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\"></div>\n                    <mat-card-title>{{ex.university}}</mat-card-title>\n                    <mat-card-subtitle>\n                        {{ex.degree}}\n\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n\n                    <p class=\"p-list\"> {{ex.title}}</p>\n                    <p class=\"p-list\">\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        {{ex.city}}\n                    </p>\n                    \n\n\n\n                </mat-card-content>\n                <mat-card-actions>\n\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n    </div>\n\n    <div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/experiences/experiences.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/experiences/experiences.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\n\n<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n\n\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <h1>\n                EXPERIENCES\n            </h1>\n            <mat-card *ngFor=\"let ex of store.cvData.experiences\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\">\n                    </div>\n                    <mat-card-title>{{ex.title}}</mat-card-title>\n                    <mat-card-subtitle>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"home icon\">home</mat-icon>\n\n                        {{ex.location}}\n                        ({{ex.company}})\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                    \n                        <!-- <mat-list-item  *ngFor=\"let task of ex.description\"> - {{task}}</mat-list-item> -->\n\n                        <p *ngFor=\"let task of ex.description\" class=\"p-list\"> ➡️ {{task}}</p>\n                        \n                        \n\n                    \n                    \n                </mat-card-content>\n                <mat-card-actions>\n\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\n<h1>\n    SKIILS\n</h1>\n\n\n<div fxLayout=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap.xs=\"2dpx\" fxLayoutAlign=\"center center\" >\n    <mat-card *ngFor=\"let item of store.cvData.skills\" class=\"logo-card\">\n        <fa-icon [icon]=\"item.icon\" class=\"fa-3x\"></fa-icon>\n    </mat-card>\n</div>\n\n\n"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/data/perso.json */ "./src/assets/data/perso.json");
var _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/perso.json */ "./src/assets/data/perso.json", 1);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AppComponent = class AppComponent {
    constructor(store, titleService) {
        this.store = store;
        this.titleService = titleService;
        this.title = 'cv-app';
        this.openedSidenav = false;
        this.store.cvData = _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__;
        this.titleService.setTitle('| CV | ' + _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__.profile.lastname);
    }
    ngOnInit(e) {
        this.onResize(e);
    }
    onResize(event) {
        let width;
        if (event != undefined) {
            width = event.target.innerWidth;
        }
        else {
            width = document.body.clientWidth;
        }
        console.log(width);
        if (width >= 720) {
            this.openedSidenav = true;
        }
        else {
            this.openedSidenav = false;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
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
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/experiences/experiences.component */ "./src/app/components/experiences/experiences.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _components_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_10__["ExperiencesComponent"],
            _components_education_education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
            _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"]
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
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

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



let AboutComponent = class AboutComponent {
    constructor(store) {
        this.store = store;
        console.log(this.store.cvData);
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/education/education.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

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



let EducationComponent = class EducationComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
};
EducationComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education',
        template: __webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html"),
        styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/components/education/education.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], EducationComponent);



/***/ }),

/***/ "./src/app/components/experiences/experiences.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/experiences/experiences.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LnNjc3MifQ== */"

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



let ExperiencesComponent = class ExperiencesComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
};
ExperiencesComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experiences',
        template: __webpack_require__(/*! raw-loader!./experiences.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/experiences/experiences.component.html"),
        styles: [__webpack_require__(/*! ./experiences.component.scss */ "./src/app/components/experiences/experiences.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
], ExperiencesComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-card {\n  width: 14vw;\n  text-align: center;\n}\n\nfa-icon:hover {\n  color: #70454F !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kL2Rldi9wcm9qZWN0cy9naXRodWIvY3Yvc3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElBO0VBQ0kseUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNhcmQge1xuICAgIHdpZHRoOiAxNHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbmZhLWljb246aG92ZXIge1xuICAgIGNvbG9yOiAjNzA0NTRGICFpbXBvcnRhbnQ7XG59IiwiLmxvZ28tY2FyZCB7XG4gIHdpZHRoOiAxNHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZhLWljb246aG92ZXIge1xuICBjb2xvcjogIzcwNDU0RiAhaW1wb3J0YW50O1xufSJdfQ== */"

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








let SkillsComponent = class SkillsComponent {
    constructor(library, faConfig, store) {
        this.store = store;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fab"]);
        faConfig.defaultPrefix = 'far';
    }
    ngOnInit() {
    }
};
SkillsComponent.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"] },
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaConfig"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"] }
];
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/skills/skills.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaConfig"],
        _services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"]])
], SkillsComponent);



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

/***/ "./src/assets/data/perso.json":
/*!************************************!*\
  !*** ./src/assets/data/perso.json ***!
  \************************************/
/*! exports provided: profile, social, experiences, educations, skills, default */
/***/ (function(module) {

module.exports = {"profile":{"firstname":"MARCEL","lastname":" LEENINGS ","title":"Software developer","photo":"./assets/img/avataaars.png","city":"Bonn, Germany","phone":"","mail":"marcel.leenings@gmail.com","summary":"Software developer with with excellent math skills and a love of sport."},"social":[{"name":"xing","link":"https://www.xing.com/profile/Marcel_Leenings/cv","icon":["fab","xing"]},{"name":"linkedin","link":"https://www.linkedin.com/in/marcel-leenings-b454b4186/","icon":["fab","linkedin"]},{"name":"github","link":"https://github.com/mleenings/","icon":["fab","github"]}],"experiences":[{"company":"Bechtle","picture":"https://www.bechtle.com/.resources/bechtle-ui/webresources/assets/img/logo-bechtle.png","location":"Bonn, Germany","title":"Software developer","period":"OCT 2019 - TODAY","description":["Java Fullstack developer","Working at a customer for banking supervision in the public sector. ","Tech-Stack: Java, JSF, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse"]},{"company":"Senacor","picture":"https://media-exp1.licdn.com/dms/image/C4E0BAQHTQptOLzZsOw/company-logo_200_200/0?e=1601510400&v=beta&t=XcpbPyzP04_5UNN4fEfA9XH-4XgvLq7lGUfNDdGtdMo","location":"Bonn, Germany","title":"Software developer","period":"MAR 2017 - SEP 2019","description":["Frontend developer","Developing of a consulting webfrontends for a big national bank in an international team at the customer.","Tech-Stack: Java, Spring, Wicket, JavaScript, React, Maven, Scrum, Wasserfall, Atlassian, IntelliJ"]},{"company":"RWTH Aachen","picture":"https://www.itc.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaafpoycw&w=223&q=77&meta=0","location":"Aachen, Germany","title":"Software developer (Scientific Assistant)","period":"SEP 2014 - FEB 2017","description":["Windows application for automatic testplaning at embedded and security relevant systems","Developing of a image- and datamanagement Webapplication for clinical studies of rare diseases","Tech-Stack: C#, MySQL, SVN, Java, GWT, Hibernate, SOAP, Maven, Tomcat"]}],"educations":[{"title":"Master's degree of Technomathematik","city":"Aachen, Germany","degree":"Master of Science","period":"SEP 2014 - JAN 2017","university":"FH Aachen","picture":"https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"},{"title":"Bachelor's degree in Scientific Programming","city":"Aachen, Germany","degree":"Bachelor of Science","period":"SEP 2011 - AUG 2014","university":"FH Aachen","picture":"https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"},{"title":"Mathematisch-technischer Softwareentwickler","city":"Aachen, Germany","degree":"IHK Training as 'Mathematisch-technischer Softwareentwickler'","period":"SEP 2011 - AUG 2014","university":"INFORM GmbH","picture":"https://www.inform-software.de/typo3conf/ext/mmpackage/Resources/Public/Images/inform-logo.png"}],"skills":[{"name":"Java","icon":["fab","java"]},{"name":"Javascript","icon":["fab","js"]},{"name":"Angular","icon":["fab","angular"]},{"name":"React","icon":["fab","react"]},{"name":"nodejs","icon":["fab","node-js"]},{"name":"database","icon":["fas","database"]},{"name":"html","icon":["fab","html5"]},{"name":"css","icon":["fab","css3-alt"]},{"name":"git","icon":["fab","git-alt"]},{"name":"Python","icon":["fab","python"]},{"name":"Docker","icon":["fab","docker"]},{"name":"linux","icon":["fab","linux"]},{"name":"apple","icon":["fab","apple"]},{"name":"windows","icon":["fab","windows"]}]};

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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


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