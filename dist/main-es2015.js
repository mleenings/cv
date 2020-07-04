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

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\n<mat-toolbar *ngIf=\"!openedSidenav\">\n\n    <mat-toolbar-row>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <img [src]=\"l10n.profile.photo\" alt=\"cv-photo-ico\" class=\"cv-photo-ico\">\n        </button>\n        <mat-menu #menu=\"matMenu\">\n        </mat-menu>\n        <!-- <span class=\"txt-toolbar\">{{l10n.profile.firstname}} {{l10n.profile.lastname}}</span> -->\n        <span class=\"toolbar-spacer\"></span>\n        <div class=\"bottom-right\" *ngFor=\"let item of l10n.social\">\n            <a [href]=\"item.link\" class=\"social\">\n                <fa-icon [icon]=\"item.icon\" class=\"fa-lg toolbar-icon\"> </fa-icon>\n            </a>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [opened]=\"openedSidenav\" class=\"sidenav\" [fixedInViewport]=\"true\">\n        <div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center center\" class=\"container\">\n            <!-- content here -->\n            <div fxLayout=\" wrap\">\n                <div fxFlex=\"25\" fxLayout=\"column\" style=\"padding: 5px;\">\n                    <img [src]=\"l10n.profile.photo\" alt=\"cv-photo\" class=\"cv-photo\">\n                </div>\n\n            </div>\n            <!--  SOCIAL -->\n            <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0.5vw\" fxLayoutGap.xs=\"1vw\">\n                <div class=\"bottom-right\" *ngFor=\"let item of this.l10n.social\">\n                    <a [href]=\"item.link\" class=\"social\">\n                        <fa-icon [icon]=\"item.icon\" class=\"fa-lg\"> </fa-icon>\n                    </a>\n                </div>\n            </div>\n            <div class=\"new-line\"></div>\n            <div fxLayout fxLayout.xs=\"row\" fxLayoutGap=\"0.5vw\" fxLayoutGap.xs=\"1vw\">\n                <div class=\"mat-mini-fab\">\n                    <fa-icon [icon]=\"faLightbulb\" (click)=\"toggleTheme()\" class=\"lightblub\"></fa-icon>\n                </div>\n                <app-l10n color=\"default\"></app-l10n>\n            </div>\n        </div>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n\n        <!-- ABOUT  -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-about></app-about>\n        </div>\n\n        <!-- EXPERIENCES -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-experiences></app-experiences>\n        </div>\n\n        <!-- EDUCATION -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-education></app-education>\n        </div>\n\n        <!-- SKILLS -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-skills></app-skills>\n        </div>\n\n        <!-- VOLUNTARY WORK -->\n        <div fxLayout=\"column wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" class=\"full-h\">\n            <app-voluntary></app-voluntary>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{l10n.profile.firstname}}\n    <span class=\"text-primary\">{{l10n.profile.lastname}}</span>\n</h1>\n\n<h2 class=\"text-primary\">\n    {{l10n.profile.title}}\n</h2>\n\n<div class=\"text-secondary sub-h\">\n    {{l10n.profile.city}} {{l10n.profile.phone}}\n    <a [href]=\"l10n.profile.mail\" class='text-primary'> {{l10n.profile.mail}}</a>\n</div>\n<p>\n    {{l10n.profile.summary}}\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/education/education.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <!-- material cntent here -->\n            <h1>\n                {{l10n.education}}\n            </h1>\n            <mat-card *ngFor=\"let ex of l10n.educations\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\"></div>\n                    <mat-card-title>{{ex.university}}</mat-card-title>\n                    <mat-card-subtitle>\n                        {{ex.degree}}\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                    <p class=\"p-list\"> {{ex.title}}</p>\n                    <p class=\"p-list\">\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        {{ex.city}}\n                    </p>\n                </mat-card-content>\n                <mat-card-actions>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/experiences/experiences.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/experiences/experiences.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\n\n<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\n\n\n    <!-- content here -->\n    <div fxLayout=\" wrap\">\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\n            <h1>\n                {{l10n.experience}}\n            </h1>\n            <mat-card *ngFor=\"let ex of l10n.experiences\" class=\"card-element card-text\">\n                <mat-card-header>\n                    <div mat-card-avatar class=\"example-header-image\"\n                        [style.background-image]=\"'url(' + ex.picture + ')'\">\n                    </div>\n                    <mat-card-title>{{ex.title}}</mat-card-title>\n                    <mat-card-subtitle>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\n                        <span class=\"text-primary\" style=\"margin-right: 10px;\">\n                            {{ex.period}}\n                        </span>\n                        <mat-icon aria-hidden=\"false\" aria-label=\"home icon\">home</mat-icon>\n                        {{ex.location}}\n                        ({{ex.company}})\n                    </mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                        <p *ngFor=\"let task of ex.description\" class=\"p-list\"> ➡️ {{task}}</p>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\n<h1>\n    {{l10n.skill}}\n</h1>\n<div fxLayout=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap.xs=\"2dpx\" fxLayoutAlign=\"center center\" >\n    <mat-card *ngFor=\"let item of l10n.skills\" class=\"logo-card\">\n        <fa-icon [icon]=\"item.icon\" [matTooltip]=\"item.name\" class=\"fa-3x\"></fa-icon>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/voluntary/voluntary.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/voluntary/voluntary.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- material cntent here -->\r\n\r\n<div fxFlex fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center \" class=\"container\">\r\n    <!-- content here -->\r\n    <div fxLayout=\" wrap\">\r\n        <div fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" fxLayout=\"column\" style=\"padding: 5px;\">\r\n            <h1>\r\n                {{l10n.voluntary}}\r\n            </h1>\r\n            <mat-card *ngFor=\"let ex of l10n.voluntaries\" class=\"card-element card-text\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"example-header-image\"\r\n                        [style.background-image]=\"'url(' + ex.picture + ')'\">\r\n                    </div>\r\n                    <mat-card-title>{{ex.title}}</mat-card-title>\r\n                    <mat-card-subtitle>\r\n                        <p class=\"p-list\">\r\n                            <mat-icon aria-hidden=\"false\" aria-label=\"date icon\">date_range</mat-icon>\r\n                            <span class=\"text-primary\" style=\"margin-right: 10px;\">\r\n                                {{ex.period}}\r\n                            </span>\r\n                            {{ex.description}}\r\n                        </p>\r\n                    </mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/l10n/l10n.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/l10n/l10n.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"language-selection\" matTooltip=\"Select Language\" matTooltipPosition=\"right\" mat-button mat-mini-fab [matMenuTriggerFor]=\"appMenu\" [color]=color>\r\n    <mat-icon aria-label=\"Select Language\">translate</mat-icon>\r\n    <mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\r\n      <button mat-menu-item (click)=\"changeLocalization(lang.id)\" *ngFor=\"let lang of l10n_languages\">{{lang.name}}</button>\r\n    </mat-menu>\r\n</button>"

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

module.exports = ".new-line {\n  margin-bottom: 15px !important;\n}\n\n.lightblub {\n  color: var(--header-text-color);\n  cursor: pointer;\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kL2Rldi9wcm9qZWN0cy9naXRodWIvY3Yvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1saW5lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpZ2h0Ymx1YiB7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQtY29sb3IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufSIsIi5uZXctbGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmxpZ2h0Ymx1YiB7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItdGV4dC1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufSJdfQ== */"

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
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/theme */ "./src/app/theme/theme.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _theme_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/theme.service */ "./src/app/theme/theme.service.ts");
/* harmony import */ var _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./l10n/l10n.service */ "./src/app/l10n/l10n.service.ts");










let AppComponent = class AppComponent {
    constructor(store, titleService, themeService, localizationService) {
        this.store = store;
        this.titleService = titleService;
        this.themeService = themeService;
        this.localizationService = localizationService;
        this.title = 'cv-app';
        this.openedSidenav = false;
        this.store.cvData = _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__;
        this.titleService.setTitle('| CV | ' + _assets_data_perso_json__WEBPACK_IMPORTED_MODULE_2__.profile.lastname);
        this.themeService.setActiveTheme(_theme_theme__WEBPACK_IMPORTED_MODULE_5__["dark"]);
        this.localizationService.languageChanged.subscribe((data) => { this.l10n = data; });
    }
    getLocalization() {
        this.l10n = this.localizationService.getDefault();
    }
    ngOnInit(e) {
        this.onResize(e);
        this.getLocalization();
        this.setLightbulb();
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
            this.faLightbulb = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLightbulb"];
        }
        else {
            this.faLightbulb = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLightbulb"];
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
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"] },
    { type: _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_9__["LocalizationService"] }
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
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
        _theme_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_9__["LocalizationService"]])
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
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
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
        template: __webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html"),
        styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/components/education/education.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
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
        template: __webpack_require__(/*! raw-loader!./experiences.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/experiences/experiences.component.html"),
        styles: [__webpack_require__(/*! ./experiences.component.scss */ "./src/app/components/experiences/experiences.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
], ExperiencesComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-card {\n  width: 14vw;\n  text-align: center;\n}\n\nfa-icon:hover {\n  color: #779ecb !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kL2Rldi9wcm9qZWN0cy9naXRodWIvY3Yvc3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElBO0VBQ0kseUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNhcmQge1xuICAgIHdpZHRoOiAxNHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbmZhLWljb246aG92ZXIge1xuICAgIGNvbG9yOiAjNzc5ZWNiICFpbXBvcnRhbnQ7XG59IiwiLmxvZ28tY2FyZCB7XG4gIHdpZHRoOiAxNHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZhLWljb246aG92ZXIge1xuICBjb2xvcjogIzc3OWVjYiAhaW1wb3J0YW50O1xufSJdfQ== */"

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
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/skills/skills.component.scss")]
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\n  background-position: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9kL2Rldi9wcm9qZWN0cy9naXRodWIvY3Yvc3JjL2FwcC9jb21wb25lbnRzL3ZvbHVudGFyeS92b2x1bnRhcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdm9sdW50YXJ5L3ZvbHVudGFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZvbHVudGFyeS92b2x1bnRhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59IiwiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufSJdfQ== */"

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
        template: __webpack_require__(/*! raw-loader!./voluntary.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/voluntary/voluntary.component.html"),
        styles: [__webpack_require__(/*! ./voluntary.component.scss */ "./src/app/components/voluntary/voluntary.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"],
        _l10n_l10n_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]])
], VoluntaryComponent);



/***/ }),

/***/ "./src/app/l10n/l10n.component.css":
/*!*****************************************!*\
  !*** ./src/app/l10n/l10n.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 400px) {\r\n    button.language-selection {\r\n      max-width: 36px;\r\n      max-height: 36px;\r\n    }\r\n  \r\n    button.language-selection .mat-icon {\r\n      font-size: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbDEwbi9sMTBuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFLGVBQWU7TUFDZixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sMTBuL2wxMG4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBidXR0b24ubGFuZ3VhZ2Utc2VsZWN0aW9uIHtcclxuICAgICAgbWF4LXdpZHRoOiAzNnB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYnV0dG9uLmxhbmd1YWdlLXNlbGVjdGlvbiAubWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

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
    }
    getLocalization() {
        const all = this.localizationService.getAll();
        for (const language_id in all) {
            if (all.hasOwnProperty(language_id)) {
                this.l10n_languages.push({ 'id': language_id, 'name': all[language_id].language_name });
            }
        }
    }
    ngOnInit() {
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
        template: __webpack_require__(/*! raw-loader!./l10n.component.html */ "./node_modules/raw-loader/index.js!./src/app/l10n/l10n.component.html"),
        styles: [__webpack_require__(/*! ./l10n.component.css */ "./src/app/l10n/l10n.component.css")]
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
const light = {
    name: "light",
    properties: {
        "--background-color": "#FFFFFF",
        "--background-sidebar-color": "#F5F5F5",
        "--background-main-color": "#FFFFFF",
        "--header-text-color": "#4d4d4d",
        "--cv-photo-color": "#424242",
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
const L10N = {
    'EN': {
        language_name: 'English',
        "profile": {
            "firstname": "MARCEL",
            "lastname": " LEENINGS ",
            "title": "Software developer",
            "photo": "./assets/img/avataaars.png",
            "city": "Bonn, Germany",
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
        "experience": "BERUFSERFAHRUNGEN",
        "experiences": [{
                "company": "Bechtle",
                "picture": "https://www.bechtle.com/.resources/bechtle-ui/webresources/assets/img/logo-bechtle.png",
                "location": "Bonn, Germany",
                "title": "Software developer",
                "period": "OCT 2019 - TODAY",
                "description": [
                    "Java Fullstack developer",
                    "Working at a customer for banking supervision in the public sector. ",
                    "Tech-Stack: Java, JSF, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse"
                ]
            },
            {
                "company": "Senacor",
                "picture": "https://media-exp1.licdn.com/dms/image/C4E0BAQHTQptOLzZsOw/company-logo_200_200/0?e=1601510400&v=beta&t=XcpbPyzP04_5UNN4fEfA9XH-4XgvLq7lGUfNDdGtdMo",
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
        "profile": {
            "firstname": "MARCEL",
            "lastname": " LEENINGS ",
            "title": "Software-Entwickler",
            "photo": "./assets/img/avataaars.png",
            "city": "Bonn, Deutschland",
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
        "experience": "BERUFSERFAHRUNGEN",
        "experiences": [{
                "company": "Bechtle",
                "picture": "https://www.bechtle.com/.resources/bechtle-ui/webresources/assets/img/logo-bechtle.png",
                "location": "Bonn, Deutschland",
                "title": "Software Entwickler",
                "period": "OKT 2019 - HEUTE",
                "description": [
                    "Java Fullstack Entwickler",
                    "Entwicklung einer Anwendung für den Öffentlichen Sektor zur Bankenüberwachung, beim Kunden.",
                    "Tech-Stack: Java, JSF, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse"
                ]
            },
            {
                "company": "Senacor",
                "picture": "https://media-exp1.licdn.com/dms/image/C4E0BAQHTQptOLzZsOw/company-logo_200_200/0?e=1601510400&v=beta&t=XcpbPyzP04_5UNN4fEfA9XH-4XgvLq7lGUfNDdGtdMo",
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

/***/ "./src/assets/data/perso.json":
/*!************************************!*\
  !*** ./src/assets/data/perso.json ***!
  \************************************/
/*! exports provided: profile, social, experiences, educations, skills, voluntaries, default */
/***/ (function(module) {

module.exports = {"profile":{"firstname":"MARCEL","lastname":" LEENINGS ","title":"Software developer","photo":"./assets/img/avataaars.png","city":"Bonn, Germany","phone":"","mail":"marcel.leenings@gmail.com","summary":"Software developer with with excellent math skills and a love of sport."},"social":[{"name":"xing","link":"https://www.xing.com/profile/Marcel_Leenings/cv","icon":["fab","xing"]},{"name":"linkedin","link":"https://www.linkedin.com/in/marcel-leenings-b454b4186/","icon":["fab","linkedin"]},{"name":"github","link":"https://github.com/mleenings/","icon":["fab","github"]}],"experiences":[{"company":"Bechtle","picture":"https://www.bechtle.com/.resources/bechtle-ui/webresources/assets/img/logo-bechtle.png","location":"Bonn, Germany","title":"Software developer","period":"OCT 2019 - TODAY","description":["Java Fullstack developer","Working at a customer for banking supervision in the public sector. ","Tech-Stack: Java, JSF, Spring, Hibernate, JPA, Oracle, Git, Gradle, Scrum, Atlassian, Eclipse"]},{"company":"Senacor","picture":"https://media-exp1.licdn.com/dms/image/C4E0BAQHTQptOLzZsOw/company-logo_200_200/0?e=1601510400&v=beta&t=XcpbPyzP04_5UNN4fEfA9XH-4XgvLq7lGUfNDdGtdMo","location":"Bonn, Germany","title":"Software developer","period":"MAR 2017 - SEP 2019","description":["Frontend developer","Developing of a consulting webfrontends for a big national bank in an international team at the customer.","Tech-Stack: Java, Spring, Wicket, JavaScript, React, Maven, Scrum, Wasserfall, Atlassian, IntelliJ"]},{"company":"RWTH Aachen","picture":"https://www.itc.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaafpoycw&w=223&q=77&meta=0","location":"Aachen, Germany","title":"Software developer (Scientific Assistant)","period":"SEP 2014 - FEB 2017","description":["Windows application for automatic testplaning at embedded and security relevant systems","Developing of a image- and datamanagement Webapplication for clinical studies of rare diseases","Tech-Stack: C#, MySQL, SVN, Java, GWT, Hibernate, SOAP, Maven, Tomcat"]}],"educations":[{"title":"Master's degree of Technomathematik","city":"Aachen, Germany","degree":"Master of Science","period":"SEP 2014 - JAN 2017","university":"FH Aachen","picture":"https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"},{"title":"Bachelor's degree in Scientific Programming","city":"Aachen, Germany","degree":"Bachelor of Science","period":"SEP 2011 - AUG 2014","university":"FH Aachen","picture":"https://www.fh-aachen.de/fileadmin/template/pics/logo_alt/logo-FH.png"},{"title":"Mathematisch-technischer Softwareentwickler","city":"Aachen, Germany","degree":"IHK Training as 'Mathematisch-technischer Softwareentwickler'","period":"SEP 2011 - AUG 2014","university":"INFORM GmbH","picture":"https://www.inform-software.de/typo3conf/ext/mmpackage/Resources/Public/Images/inform-logo.png"}],"skills":[{"name":"Java","icon":["fab","java"]},{"name":"Javascript","icon":["fab","js"]},{"name":"Angular","icon":["fab","angular"]},{"name":"React","icon":["fab","react"]},{"name":"Node.js","icon":["fab","node-js"]},{"name":"Database","icon":["fas","database"]},{"name":"HTML5","icon":["fab","html5"]},{"name":"CSS3","icon":["fab","css3-alt"]},{"name":"Git","icon":["fab","git-alt"]},{"name":"Python","icon":["fab","python"]},{"name":"Docker","icon":["fab","docker"]},{"name":"Linux","icon":["fab","linux"]},{"name":"Apple","icon":["fab","apple"]},{"name":"Windows","icon":["fab","windows"]},{"name":"Artificial Intelligence","icon":["fas","brain"]}],"voluntaries":[{"title":"Trainer and clubmanagement","description":"Various judo clubs","period":"2007 - 2018","picture":"https://www.judobund.de/fileadmin/templates/judobund2018/images/logo_djb.png"},{"title":"Development and maintenance of a club website","description":"HSZ Aachen","period":"2012 - 2018","picture":"https://hochschulsport.rwth-aachen.de/global/show_picture.asp?id=aaaaaaaaaasxplr"},{"title":"Athlete","description":"German judo national league","period":"2014 - 2018","picture":"https://www.deutsche-judo-bundesliga.de/images/header/logo-judo-bundesliga.png"}]};

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