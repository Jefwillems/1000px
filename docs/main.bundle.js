webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__ = __webpack_require__("./src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_guards_auth_guard__ = __webpack_require__("./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__picture_picture_component__ = __webpack_require__("./src/app/picture/picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_picture_resolver_service__ = __webpack_require__("./src/app/picture/picture-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_admin_admin_component__ = __webpack_require__("./src/app/shared/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_guards_admin_guard__ = __webpack_require__("./src/app/shared/guards/admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__["a" /* UploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    {
        path: 'p', children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__picture_picture_component__["a" /* PictureComponent */], resolve: { picture: __WEBPACK_IMPORTED_MODULE_5__picture_picture_resolver_service__["a" /* PictureResolver */] } }
        ]
    },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__shared_components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_guards_admin_guard__["a" /* AdminGuard */]] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile_module__ = __webpack_require__("./src/app/profile/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discover_discover_module__ = __webpack_require__("./src/app/discover/discover.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_blog_module__ = __webpack_require__("./src/app/blog/blog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_blog_service__ = __webpack_require__("./src/app/shared/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_storage_manager_service__ = __webpack_require__("./src/app/shared/services/storage-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__upload_upload_component__ = __webpack_require__("./src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__picture_picture_component__ = __webpack_require__("./src/app/picture/picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__picture_picture_resolver_service__ = __webpack_require__("./src/app/picture/picture-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_guards_auth_guard__ = __webpack_require__("./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_guards_admin_guard__ = __webpack_require__("./src/app/shared/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_profile_profile_resolver_service__ = __webpack_require__("./src/app/profile/profile/profile-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__picture_edit_picture_edit_picture_component__ = __webpack_require__("./src/app/picture/edit-picture/edit-picture.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_16__picture_picture_component__["a" /* PictureComponent */],
            __WEBPACK_IMPORTED_MODULE_21__picture_edit_picture_edit_picture_component__["a" /* EditPictureComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_3__blog_blog_module__["a" /* BlogModule */],
            __WEBPACK_IMPORTED_MODULE_2__discover_discover_module__["a" /* DiscoverModule */],
            __WEBPACK_IMPORTED_MODULE_1__profile_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__shared_services_storage_manager_service__["a" /* StorageManagerService */], __WEBPACK_IMPORTED_MODULE_10__shared_services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_13__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_17__picture_picture_resolver_service__["a" /* PictureResolver */], __WEBPACK_IMPORTED_MODULE_18__shared_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__shared_guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_20__profile_profile_profile_resolver_service__["a" /* ProfileResolver */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/blog/blog-add/blog-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"wrapper\">\n    <form [formGroup]=\"blogpost\" (submit)=\"submit($event)\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" id=\"title\" name=\"title\" formControlName=\"title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"body\">Text</label>\n        <textarea name=\"text\" id=\"body\" rows=\"10\" formControlName=\"text\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog-add/blog-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text],\ntextarea {\n  -webkit-transition: all 0.30s ease-in-out;\n  -moz-transition: all 0.30s ease-in-out;\n  -ms-transition: all 0.30s ease-in-out;\n  -o-transition: all 0.30s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD; }\n  input[type=text].ng-invalid,\n  textarea.ng-invalid {\n    border: 1px solid #e46767; }\n\ninput[type=text]:focus,\ntextarea:focus {\n  box-shadow: 0 0 5px #51cbee;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #51cbee; }\n  input[type=text]:focus.ng-invalid,\n  textarea:focus.ng-invalid {\n    box-shadow: 0 0 5px #cc2424;\n    border: 1px solid #cc2424; }\n\n.page {\n  margin-top: 25px;\n  width: 100%; }\n  .page .wrapper {\n    width: 90%;\n    margin: 0 auto; }\n    .page .wrapper form .form-group {\n      width: 60%;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n      .page .wrapper form .form-group label {\n        margin-right: 25px;\n        text-align: right;\n        text-align: right;\n        box-sizing: border-box;\n        padding-right: 10px;\n        padding-top: 5px; }\n      .page .wrapper form .form-group input,\n      .page .wrapper form .form-group textarea {\n        width: 80%;\n        font-size: 1.5rem;\n        font-weight: 200; }\n      .page .wrapper form .form-group button {\n        display: inline-block;\n        font-family: 'Maven Pro', sans-serif;\n        line-height: 1.5em;\n        font-size: 16px;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        color: #2c3e50;\n        padding: 10px 30px;\n        width: 20%;\n        position: relative;\n        box-shadow: 0 0 1px transparent;\n        background: #009ee3;\n        transition-property: color;\n        transition-duration: 1s;\n        overflow: hidden;\n        -webkit-transform: perspective(1px) translateZ(0);\n                transform: perspective(1px) translateZ(0); }\n        .page .wrapper form .form-group button::before {\n          content: '';\n          position: absolute;\n          z-index: -1;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background: #e1e1e1;\n          border-radius: 100%;\n          -webkit-transform: scale(2);\n                  transform: scale(2);\n          transition-property: -webkit-transform;\n          transition-property: transform;\n          transition-property: transform, -webkit-transform;\n          transition-duration: 0.3s;\n          transition-timing-function: ease-out; }\n        .page .wrapper form .form-group button:hover:before, .page .wrapper form .form-group button:focus:before, .page .wrapper form .form-group button:active:before {\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n        .page .wrapper form .form-group button:hover {\n          color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/blog/blog-add/blog-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_blog_service__ = __webpack_require__("./src/app/shared/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogAddComponent = (function () {
    function BlogAddComponent(bs, fb, router) {
        this.bs = bs;
        this.fb = fb;
        this.router = router;
    }
    BlogAddComponent.prototype.ngOnInit = function () {
        this.blogpost = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50)])],
            text: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    BlogAddComponent.prototype.submit = function ($event) {
        var _this = this;
        var title = this.blogpost.value.title;
        var text = this.blogpost.value.text;
        this.bs.uploadPost(title, text).subscribe(function (post) {
            if (post.id && post.title && post.text) {
                _this.router.navigate(['/blog']);
            }
            else {
                _this.router.navigate(['/blog/add']);
            }
        });
    };
    return BlogAddComponent;
}());
BlogAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blog-add',
        template: __webpack_require__("./src/app/blog/blog-add/blog-add.component.html"),
        styles: [__webpack_require__("./src/app/blog/blog-add/blog-add.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BlogAddComponent);

var _a, _b, _c;
//# sourceMappingURL=blog-add.component.js.map

/***/ }),

/***/ "./src/app/blog/blog-detail/blog-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"text\" [innerHTML]=\"blogpost.text | markdown\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog-detail/blog-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/blog/blog-detail/blog-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogDetailComponent = (function () {
    function BlogDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolved) {
            _this._blogpost = resolved['blogpost'];
        });
    };
    Object.defineProperty(BlogDetailComponent.prototype, "blogpost", {
        get: function () {
            return this._blogpost;
        },
        enumerable: true,
        configurable: true
    });
    return BlogDetailComponent;
}());
BlogDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blog-detail',
        template: __webpack_require__("./src/app/blog/blog-detail/blog-detail.component.html"),
        styles: [__webpack_require__("./src/app/blog/blog-detail/blog-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BlogDetailComponent);

var _a, _b;
//# sourceMappingURL=blog-detail.component.js.map

/***/ }),

/***/ "./src/app/blog/blog-detail/blog-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_blog_service__ = __webpack_require__("./src/app/shared/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogResolver = (function () {
    function BlogResolver(bs) {
        this.bs = bs;
    }
    BlogResolver.prototype.resolve = function (route, state) {
        return this.bs.getPost(route.params['id']);
    };
    return BlogResolver;
}());
BlogResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], BlogResolver);

var _a;
//# sourceMappingURL=blog-resolver.service.js.map

/***/ }),

/***/ "./src/app/blog/blog-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_detail_blog_detail_component__ = __webpack_require__("./src/app/blog/blog-detail/blog-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_add_blog_add_component__ = __webpack_require__("./src/app/blog/blog-add/blog-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_guards_auth_guard__ = __webpack_require__("./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_detail_blog_resolver_service__ = __webpack_require__("./src/app/blog/blog-detail/blog-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: 'blog', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__blog_component__["a" /* BlogComponent */], pathMatch: 'full' },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_4__blog_add_blog_add_component__["a" /* BlogAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__shared_guards_auth_guard__["a" /* AuthGuard */]] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__blog_detail_blog_detail_component__["a" /* BlogDetailComponent */], resolve: { blogpost: __WEBPACK_IMPORTED_MODULE_6__blog_detail_blog_resolver_service__["a" /* BlogResolver */] } }
        ]
    }
];
var BlogRoutingModule = (function () {
    function BlogRoutingModule() {
    }
    return BlogRoutingModule;
}());
BlogRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], BlogRoutingModule);

//# sourceMappingURL=blog-routing.module.js.map

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"header\">\n    <button [routerLink]=\"['/blog/add']\">Add post</button>\n  </div>\n  <div class=\"posts\">\n    <div class=\"posts-list\">\n      <div class=\"posts-list-item\" *ngFor=\"let post of posts\">\n        <a [routerLink]=\"['/blog/'+post.id]\">\n          <div class=\"post\">\n            <div class=\"title\">{{post.title}}</div>\n            <div class=\"author\">{{post.author.username}}</div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  width: 90%;\n  margin: 0 auto; }\n  .page .header {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .page .header button {\n      display: inline-block;\n      font-family: 'Maven Pro', sans-serif;\n      line-height: 1.5em;\n      font-size: 16px;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      color: #2c3e50;\n      padding: 10px 30px;\n      width: 20%;\n      position: relative;\n      box-shadow: 0 0 1px transparent;\n      background: #009ee3;\n      transition-property: color;\n      transition-duration: 1s;\n      overflow: hidden;\n      -webkit-transform: perspective(1px) translateZ(0);\n              transform: perspective(1px) translateZ(0); }\n      .page .header button::before {\n        content: '';\n        position: absolute;\n        z-index: -1;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: #e1e1e1;\n        border-radius: 100%;\n        -webkit-transform: scale(2);\n                transform: scale(2);\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        transition-property: transform, -webkit-transform;\n        transition-duration: 0.3s;\n        transition-timing-function: ease-out; }\n      .page .header button:hover:before, .page .header button:focus:before, .page .header button:active:before {\n        -webkit-transform: scale(0);\n                transform: scale(0); }\n      .page .header button:hover {\n        color: white; }\n  .page .posts {\n    width: 100%; }\n    .page .posts-list {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-top: 25px; }\n      .page .posts-list-item {\n        margin-bottom: 25px;\n        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23); }\n        .page .posts-list-item .post {\n          margin: 0 auto;\n          width: 50%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          padding: 2px 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_blog_service__ = __webpack_require__("./src/app/shared/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = (function () {
    function BlogComponent(blogService) {
        this.blogService = blogService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getLatestCreations().subscribe(function (posts) {
            _this._posts = posts;
        });
    };
    Object.defineProperty(BlogComponent.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        enumerable: true,
        configurable: true
    });
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("./src/app/blog/blog.component.html"),
        styles: [__webpack_require__("./src/app/blog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], BlogComponent);

var _a;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_routing_module__ = __webpack_require__("./src/app/blog/blog-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_detail_blog_detail_component__ = __webpack_require__("./src/app/blog/blog-detail/blog-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_pipes_markdown_pipe__ = __webpack_require__("./src/app/shared/pipes/markdown.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_add_blog_add_component__ = __webpack_require__("./src/app/blog/blog-add/blog-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_blog_service__ = __webpack_require__("./src/app/shared/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_detail_blog_resolver_service__ = __webpack_require__("./src/app/blog/blog-detail/blog-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__blog_routing_module__["a" /* BlogRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__blog_component__["a" /* BlogComponent */], __WEBPACK_IMPORTED_MODULE_4__blog_detail_blog_detail_component__["a" /* BlogDetailComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_pipes_markdown_pipe__["a" /* MarkdownPipe */], __WEBPACK_IMPORTED_MODULE_6__blog_add_blog_add_component__["a" /* BlogAddComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_9__blog_detail_blog_resolver_service__["a" /* BlogResolver */]]
    })
], BlogModule);

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ "./src/app/discover/discover-nav/discover-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"page-nav-wrapper\">\n    <div>\n      <a [routerLink]=\"['/discover/editors']\" routerLinkActive=\"active-link\">Editors' Picks</a>\n    </div>\n    <div>\n      <a [routerLink]=\"['/discover/popular']\" routerLinkActive=\"active-link\">Popular</a>\n    </div>\n    <div>\n      <a [routerLink]=\"['/discover/fresh']\" routerLinkActive=\"active-link\">Fresh</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/discover/discover-nav/discover-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  width: 100vw;\n  border-bottom: 1px solid #eeeff2;\n  height: 50px; }\n  nav .page-nav-wrapper {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 0 auto;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    nav .page-nav-wrapper div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n      nav .page-nav-wrapper div a {\n        color: #71767a;\n        text-decoration: none;\n        padding: 15px 25px;\n        text-transform: uppercase;\n        font-weight: 500; }\n        nav .page-nav-wrapper div a:visited {\n          color: inherit; }\n        nav .page-nav-wrapper div a.active-link {\n          color: #0099e5;\n          border-bottom: 2px solid #0099e5; }\n        nav .page-nav-wrapper div a:hover {\n          color: #0099e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/discover/discover-nav/discover-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscoverNavComponent = (function () {
    function DiscoverNavComponent() {
    }
    DiscoverNavComponent.prototype.ngOnInit = function () {
    };
    return DiscoverNavComponent;
}());
DiscoverNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-discover-nav',
        template: __webpack_require__("./src/app/discover/discover-nav/discover-nav.component.html"),
        styles: [__webpack_require__("./src/app/discover/discover-nav/discover-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DiscoverNavComponent);

//# sourceMappingURL=discover-nav.component.js.map

/***/ }),

/***/ "./src/app/discover/discover-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fresh_fresh_component__ = __webpack_require__("./src/app/discover/fresh/fresh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popular_popular_component__ = __webpack_require__("./src/app/discover/popular/popular.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editors_editors_component__ = __webpack_require__("./src/app/discover/editors/editors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: 'discover', children: [
            { path: '', redirectTo: 'editors', pathMatch: 'full' },
            { path: 'editors', component: __WEBPACK_IMPORTED_MODULE_2__editors_editors_component__["a" /* EditorsComponent */] },
            { path: 'popular', component: __WEBPACK_IMPORTED_MODULE_1__popular_popular_component__["a" /* PopularComponent */] },
            { path: 'fresh', component: __WEBPACK_IMPORTED_MODULE_0__fresh_fresh_component__["a" /* FreshComponent */] },
        ]
    }
];
var DiscoverRoutingModule = (function () {
    function DiscoverRoutingModule() {
    }
    return DiscoverRoutingModule;
}());
DiscoverRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ]
    })
], DiscoverRoutingModule);

//# sourceMappingURL=discover-routing.module.js.map

/***/ }),

/***/ "./src/app/discover/discover.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__discover_routing_module__ = __webpack_require__("./src/app/discover/discover-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editors_editors_component__ = __webpack_require__("./src/app/discover/editors/editors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popular_popular_component__ = __webpack_require__("./src/app/discover/popular/popular.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fresh_fresh_component__ = __webpack_require__("./src/app/discover/fresh/fresh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_nav_discover_nav_component__ = __webpack_require__("./src/app/discover/discover-nav/discover-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DiscoverModule = (function () {
    function DiscoverModule() {
    }
    return DiscoverModule;
}());
DiscoverModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__discover_routing_module__["a" /* DiscoverRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__editors_editors_component__["a" /* EditorsComponent */], __WEBPACK_IMPORTED_MODULE_4__popular_popular_component__["a" /* PopularComponent */], __WEBPACK_IMPORTED_MODULE_5__fresh_fresh_component__["a" /* FreshComponent */], __WEBPACK_IMPORTED_MODULE_6__discover_nav_discover_nav_component__["a" /* DiscoverNavComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__shared_services_image_service__["a" /* ImageService */]]
    })
], DiscoverModule);

//# sourceMappingURL=discover.module.js.map

/***/ }),

/***/ "./src/app/discover/editors/editors.component.html":
/***/ (function(module, exports) {

module.exports = "<app-discover-nav></app-discover-nav>\n<div class=\"wrapper\">\n  <div class=\"images\">\n    <div *ngFor='let image of images' class=\"images-item\">\n      <app-image [image]=\"image\"></app-image>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/discover/editors/editors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 90%;\n  margin: 0 auto; }\n  .wrapper .images {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -ms-flex-line-pack: start;\n        align-content: flex-start; }\n    .wrapper .images:after {\n      content: \"\";\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 30%;\n              flex: 0 1 30%;\n      margin: 10px; }\n    .wrapper .images-item {\n      width: 30%;\n      margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/discover/editors/editors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorsComponent = (function () {
    function EditorsComponent(is) {
        var _this = this;
        this.is = is;
        this.is.fetchPicked().subscribe(function (images) {
            _this._images = images;
        });
    }
    EditorsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditorsComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    return EditorsComponent;
}());
EditorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editors',
        template: __webpack_require__("./src/app/discover/editors/editors.component.html"),
        styles: [__webpack_require__("./src/app/discover/editors/editors.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */]) === "function" && _a || Object])
], EditorsComponent);

var _a;
//# sourceMappingURL=editors.component.js.map

/***/ }),

/***/ "./src/app/discover/fresh/fresh.component.html":
/***/ (function(module, exports) {

module.exports = "<app-discover-nav></app-discover-nav>\n<div class=\"wrapper\">\n  <div class=\"images\">\n    <div *ngFor='let image of images' class=\"images-item\">\n      <app-image [image]=\"image\"></app-image>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/discover/fresh/fresh.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 90%;\n  margin: 0 auto; }\n  .wrapper .images {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -ms-flex-line-pack: start;\n        align-content: flex-start; }\n    .wrapper .images:after {\n      content: \"\";\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 30%;\n              flex: 0 1 30%;\n      margin: 10px; }\n    .wrapper .images-item {\n      width: 30%;\n      margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/discover/fresh/fresh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreshComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FreshComponent = (function () {
    function FreshComponent(imageService, auth) {
        var _this = this;
        this.imageService = imageService;
        this.auth = auth;
        this.imageService.fetchFresh().subscribe(function (images) {
            _this._images = images;
        });
    }
    FreshComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FreshComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    return FreshComponent;
}());
FreshComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fresh',
        template: __webpack_require__("./src/app/discover/fresh/fresh.component.html"),
        styles: [__webpack_require__("./src/app/discover/fresh/fresh.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], FreshComponent);

var _a, _b;
//# sourceMappingURL=fresh.component.js.map

/***/ }),

/***/ "./src/app/discover/popular/popular.component.html":
/***/ (function(module, exports) {

module.exports = "<app-discover-nav></app-discover-nav>\n<div class=\"wrapper\">\n    <div class=\"images\">\n      <div *ngFor='let image of images' class=\"images-item\">\n        <app-image [image]=\"image\"></app-image>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/discover/popular/popular.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 90%;\n  margin: 0 auto; }\n  .wrapper .images {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -ms-flex-line-pack: start;\n        align-content: flex-start; }\n    .wrapper .images:after {\n      content: \"\";\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 30%;\n              flex: 0 1 30%;\n      margin: 10px; }\n    .wrapper .images-item {\n      width: 30%;\n      margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/discover/popular/popular.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopularComponent = (function () {
    function PopularComponent(is) {
        var _this = this;
        this.is = is;
        this.is.fetchPopular().subscribe(function (images) {
            _this._images = images;
        });
    }
    PopularComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PopularComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    return PopularComponent;
}());
PopularComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-popular',
        template: __webpack_require__("./src/app/discover/popular/popular.component.html"),
        styles: [__webpack_require__("./src/app/discover/popular/popular.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */]) === "function" && _a || Object])
], PopularComponent);

var _a;
//# sourceMappingURL=popular.component.js.map

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_page_component__ = __webpack_require__("./src/app/home/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_guards_auth_guard__ = __webpack_require__("./src/app/shared/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__page_page_component__["a" /* PageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_guards_auth_guard__["a" /* AuthGuard */]] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_storage_manager_service__ = __webpack_require__("./src/app/shared/services/storage-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_page_component__ = __webpack_require__("./src/app/home/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_tip_tip_component__ = __webpack_require__("./src/app/home/page/tip/tip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__page_page_component__["a" /* PageComponent */],
            __WEBPACK_IMPORTED_MODULE_5__page_tip_tip_component__["a" /* TipComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__shared_services_storage_manager_service__["a" /* StorageManagerService */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "./src/app/home/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tip></app-tip>\n<div class=\"wrapper\">\n  <div class=\"images\">\n    <div *ngFor='let image of images' class=\"images-item\">\n      <app-image [image]=\"image\"></app-image>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/page/page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 90%;\n  margin: 0 auto; }\n  .wrapper .images {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    margin: 0 auto;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -ms-flex-line-pack: start;\n        align-content: flex-start; }\n    .wrapper .images:after {\n      content: \"\";\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 30%;\n              flex: 0 1 30%;\n      margin: 10px; }\n    .wrapper .images-item {\n      width: 30%;\n      margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = (function () {
    function PageComponent(us, auth) {
        this.us = us;
        this.auth = auth;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.fetchActivity().subscribe(function (images) {
            _this._images = images;
        });
    };
    Object.defineProperty(PageComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    return PageComponent;
}());
PageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page',
        template: __webpack_require__("./src/app/home/page/page.component.html"),
        styles: [__webpack_require__("./src/app/home/page/page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], PageComponent);

var _a, _b;
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "./src/app/home/page/tip/tip.component.html":
/***/ (function(module, exports) {

module.exports = "<p (click)=\"disappear()\" *ngIf=\"isVisible\">\n  Did you know you can also write blog posts on this website?\n</p>\n"

/***/ }),

/***/ "./src/app/home/page/tip/tip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  background-color: deepskyblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/page/tip/tip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_storage_manager_service__ = __webpack_require__("./src/app/shared/services/storage-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipComponent = (function () {
    function TipComponent(storageManager) {
        this.storageManager = storageManager;
        this.key = 'isVisible';
        this.isVisible = true;
        if (this.storageManager.exists(this.key)) {
            this.isVisible = this.storageManager.retrieveObject(this.key).value;
        }
    }
    TipComponent.prototype.ngOnInit = function () {
    };
    TipComponent.prototype.disappear = function () {
        this.isVisible = false;
        this.storageManager.store(this.key, { value: false });
    };
    return TipComponent;
}());
TipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-tip',
        template: __webpack_require__("./src/app/home/page/tip/tip.component.html"),
        styles: [__webpack_require__("./src/app/home/page/tip/tip.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_storage_manager_service__["a" /* StorageManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_storage_manager_service__["a" /* StorageManagerService */]) === "function" && _a || Object])
], TipComponent);

var _a;
//# sourceMappingURL=tip.component.js.map

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bg\">\n  <img src=\"assets/img/triangle-white.svg\" alt=\"etecatcher\" class=\"triangle\">\n</div>\n<nav role=\"navigation\" class=\"nav\">\n  <ul class=\"nav-list\">\n    <li class=\"nav-list-item\">\n      <a [routerLink]=\"['/']\">Home</a>\n    </li>\n    <li class=\"nav-list-item\">\n      <a [routerLink]=\"['/discover']\">Discover</a>\n    </li>\n    <li class=\"nav-list-item\">\n      <a [routerLink]=\"['/blog']\">Blog</a>\n    </li>\n    <li class=\"nav-list-item\">\n      <a [routerLink]=\"['/upload']\">Upload</a>\n    </li>\n    <li *ngIf=\"(currentUser | async) else loginLink\" class=\"dropdown nav-list-item\">\n      <div class=\"dropdown-text\">Account</div>\n      <ul class=\"dropdown-content\">\n        <li class=\"dropdown-content-item\">\n          <a [routerLink]=\"['/profile']\">Profile</a>\n        </li>\n        <li class=\"dropdown-content-item\">\n          <a (click)=\"logout()\">log out</a>\n        </li>\n      </ul>\n    </li>\n    <ng-template #loginLink>\n      <li class=\"nav-list-item\">\n        <a [routerLink]=\"['/login']\">Login</a>\n      </li>\n    </ng-template>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-bg {\n  position: relative;\n  height: 100px;\n  width: 100vw;\n  background: linear-gradient(-45deg, #009ee3, #63c6c8); }\n  .nav-bg .triangle {\n    position: absolute;\n    width: 103vw;\n    bottom: -1px;\n    left: -1vw;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\na {\n  color: #fff;\n  text-decoration: none; }\n\n.nav {\n  position: absolute;\n  top: 10px;\n  right: 30px;\n  z-index: 10; }\n  .nav-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    list-style-type: none;\n    padding: 0; }\n    .nav-list-item {\n      display: inline-block;\n      margin: 0 10px; }\n      .nav-list-item:hover > a {\n        text-decoration: underline; }\n\n.dropdown-text {\n  color: #fff;\n  text-decoration: none; }\n\n.dropdown-content {\n  display: none;\n  padding: 5px;\n  background-color: rgba(15, 81, 214, 0.3);\n  position: relative;\n  top: 5px;\n  left: 10px;\n  list-style-type: none; }\n  .dropdown-content-item {\n    display: inline-block; }\n\n.dropdown:hover .dropdown-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    /**
     * Creates an instance of NavigationComponent.
     * @param {AuthService} auth
     * @memberof NavigationComponent
     */
    function NavigationComponent(auth) {
        this.auth = auth;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NavigationComponent.prototype, "currentUser", {
        get: function () {
            return this.auth.user$;
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("./src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("./src/app/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "./src/app/picture/edit-picture/edit-picture.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-picture works!\n</p>\n"

/***/ }),

/***/ "./src/app/picture/edit-picture/edit-picture.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/picture/edit-picture/edit-picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditPictureComponent = (function () {
    function EditPictureComponent() {
    }
    EditPictureComponent.prototype.ngOnInit = function () {
    };
    return EditPictureComponent;
}());
EditPictureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-picture',
        template: __webpack_require__("./src/app/picture/edit-picture/edit-picture.component.html"),
        styles: [__webpack_require__("./src/app/picture/edit-picture/edit-picture.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditPictureComponent);

//# sourceMappingURL=edit-picture.component.js.map

/***/ }),

/***/ "./src/app/picture/picture-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PictureResolver = (function () {
    function PictureResolver(is) {
        this.is = is;
    }
    PictureResolver.prototype.resolve = function (route, state) {
        return this.is.fetchImage(route.params['id']);
    };
    return PictureResolver;
}());
PictureResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_image_service__["a" /* ImageService */]) === "function" && _a || Object])
], PictureResolver);

var _a;
//# sourceMappingURL=picture-resolver.service.js.map

/***/ }),

/***/ "./src/app/picture/picture.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"container\">\n    <div class=\"left\">\n      <img src=\"{{img.pathToPicture}}\" alt=\"picture\">\n    </div>\n    <div class=\"right\">\n      <div class=\"header\">\n        <div class=\"avatar\"></div>\n        <div class=\"author\">\n          <a [routerLink]=\"['/profile/'+img?.author.id]\">{{img?.author.username}}</a>\n        </div>\n      </div>\n      <div class=\"buttons\">\n        <button class=\"like\" (click)=\"like($event)\" [ngClass]=\"[liked?'liked':'not-liked']\">\n          <i class=\"material-icons\">favorite_border</i>{{img?.likes}}\n        </button>\n      </div>\n      <div class=\"info\">\n        <h4>{{img?.title}}</h4>\n        <p>{{img?.description}}</p>\n        <p>{{img?.camera}}</p>\n        <p>{{img?.lens}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/picture/picture.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  padding: 15px; }\n  .page .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .page .container .left {\n      width: 75%; }\n      .page .container .left img {\n        max-height: 90vh;\n        max-width: 100%; }\n    .page .container .right {\n      width: 25%;\n      border: solid 1px #eeeff2; }\n      .page .container .right .header {\n        display: block;\n        padding: 2rem;\n        border-bottom: solid 1px #eeeff2; }\n        .page .container .right .header .author a {\n          text-decoration: none;\n          font-family: 'Maven Pro', sans-serif;\n          line-height: 1.5em;\n          font-size: 18px;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          color: #2c3e50;\n          transition-property: color;\n          transition-duration: 0.3s;\n          transition-timing-function: linear;\n          font-weight: 400; }\n          .page .container .right .header .author a:hover {\n            color: #009ee3; }\n          .page .container .right .header .author a:visited {\n            color: #2c3e50; }\n      .page .container .right .buttons {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        padding: 2rem;\n        border-bottom: solid 1px #eeeff2; }\n        .page .container .right .buttons .like {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          font-family: 'Maven Pro', sans-serif;\n          line-height: 1.5em;\n          font-size: 16px;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          color: #2c3e50;\n          padding: 10px 30px;\n          width: 30%;\n          position: relative;\n          box-shadow: 0 0 1px transparent;\n          background: #ff4c4c;\n          transition-property: color;\n          transition-duration: 1s;\n          overflow: hidden;\n          -webkit-transform: perspective(1px) translateZ(0);\n                  transform: perspective(1px) translateZ(0); }\n          .page .container .right .buttons .like i {\n            margin-right: 10px; }\n          .page .container .right .buttons .like::before {\n            content: '';\n            position: absolute;\n            z-index: -1;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: #e1e1e1;\n            border-radius: 100%;\n            -webkit-transform: scale(2);\n                    transform: scale(2);\n            transition-property: -webkit-transform;\n            transition-property: transform;\n            transition-property: transform, -webkit-transform;\n            transition-duration: 0.3s;\n            transition-timing-function: ease-out; }\n          .page .container .right .buttons .like:hover.liked, .page .container .right .buttons .like:focus.liked, .page .container .right .buttons .like:active.liked {\n            outline: none; }\n            .page .container .right .buttons .like:hover.liked:before, .page .container .right .buttons .like:focus.liked:before, .page .container .right .buttons .like:active.liked:before {\n              -webkit-transform: scale(0);\n                      transform: scale(0); }\n          .page .container .right .buttons .like:hover.not-liked::before, .page .container .right .buttons .like:focus.not-liked::before, .page .container .right .buttons .like:active.not-liked::before {\n            -webkit-transform: scale(2);\n                    transform: scale(2); }\n          .page .container .right .buttons .like:hover, .page .container .right .buttons .like.liked {\n            border-color: #ff3333;\n            color: white; }\n            .page .container .right .buttons .like:hover::before, .page .container .right .buttons .like.liked::before {\n              -webkit-transform: scale(0);\n                      transform: scale(0); }\n          .page .container .right .buttons .like.not-liked {\n            border: none; }\n            .page .container .right .buttons .like.not-liked:focus, .page .container .right .buttons .like.not-liked:hover, .page .container .right .buttons .like.not-liked:active {\n              outline: none; }\n      .page .container .right .info {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding: 2rem; }\n        .page .container .right .info h4 {\n          margin: 0;\n          padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/picture/picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PictureComponent = (function () {
    function PictureComponent(route, router, is) {
        this.route = route;
        this.router = router;
        this.is = is;
        this.liked = false;
    }
    PictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolved) {
            _this.img = resolved['picture'];
        });
        this.is.hasBeenLiked(this.img.id).subscribe(function (bool) {
            _this.liked = bool;
        });
    };
    PictureComponent.prototype.like = function ($event) {
        var _this = this;
        if (this.liked) {
            this.liked = false;
            this.is.unlike(this.img.id).subscribe(function (pic) {
                _this.img = pic;
            });
        }
        else {
            this.liked = true;
            this.is.like(this.img.id).subscribe(function (pic) {
                _this.img = pic;
            });
        }
    };
    return PictureComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], PictureComponent.prototype, "returnUrl", void 0);
PictureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-picture',
        template: __webpack_require__("./src/app/picture/picture.component.html"),
        styles: [__webpack_require__("./src/app/picture/picture.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__["a" /* ImageService */]) === "function" && _c || Object])
], PictureComponent);

var _a, _b, _c;
//# sourceMappingURL=picture.component.js.map

/***/ }),

/***/ "./src/app/profile/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/edit/edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/profile/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditComponent = (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__("./src/app/profile/edit/edit.component.html"),
        styles: [__webpack_require__("./src/app/profile/edit/edit.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditComponent);

//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "./src/app/profile/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <form [formGroup]=\"user\" (ngSubmit)='onSubmit()' class=\"login-form\">\n    <h3>Login</h3>\n    <div class='login-form-group'>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" id=\"username\" formControlName='username'>\n    </div>\n    <div class='login-form-group'>\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" id=\"password\" formControlName='password'>\n    </div>\n    <button type=\"submit\" [disabled]=\"!user.valid\">log in</button>\n    <div *ngIf='errorMsg' class='error'>{{errorMsg}}</div>\n  </form>\n  <a class='link' routerLink=\"/signup\">register</a>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/profile/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.user.value.username, this.user.value.password).subscribe(function (val) {
            if (val) {
                if (_this.auth.redirectUrl) {
                    _this.router.navigateByUrl(_this.auth.redirectUrl);
                    _this.auth.redirectUrl = undefined;
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
        }, function (err) {
            _this.errorMsg = err.json().message;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/profile/login/login.component.html"),
        styles: [__webpack_require__("./src/app/profile/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_guards_auth_guard__ = __webpack_require__("./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/profile/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("./src/app/profile/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("./src/app/profile/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("./src/app/profile/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_resolver_service__ = __webpack_require__("./src/app/profile/profile/profile-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    {
        path: 'profile', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */], resolve: { profile: __WEBPACK_IMPORTED_MODULE_7__profile_profile_resolver_service__["a" /* ProfileResolver */] } },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */], resolve: { profile: __WEBPACK_IMPORTED_MODULE_7__profile_profile_resolver_service__["a" /* ProfileResolver */] } },
            { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */] }
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ]
    })
], ProfileRoutingModule);

//# sourceMappingURL=profile-routing.module.js.map

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_routing_module__ = __webpack_require__("./src/app/profile/profile-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("./src/app/profile/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/profile/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("./src/app/profile/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("./src/app/profile/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_edit_component__ = __webpack_require__("./src/app/profile/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__profile_routing_module__["a" /* ProfileRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_8__edit_edit_component__["a" /* EditComponent */]],
        providers: []
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "./src/app/profile/profile/profile-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileResolver = (function () {
    function ProfileResolver(us) {
        this.us = us;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        if (route.params['id']) {
            return this.us.fetchProfile(route.params['id'], true);
        }
        else {
            return this.us.fetchLoggedIn(true);
        }
    };
    return ProfileResolver;
}());
ProfileResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfileResolver);

var _a;
//# sourceMappingURL=profile-resolver.service.js.map

/***/ }),

/***/ "./src/app/profile/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2>{{profile?.username}}</h2>\n  <button (click)=\"follow($event)\">follow</button>\n</section>\n<section>\n  <div class=\"wrapper\">\n    <div class=\"images\">\n      <div *ngFor='let image of profile?.pictures' class=\"images-item\">\n        <app-image [image]=\"image\"></app-image>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/profile/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  margin-bottom: 25px; }\n  section .wrapper {\n    width: 90%;\n    margin: 0 auto; }\n    section .wrapper .images {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      margin: 0 auto;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start; }\n      section .wrapper .images:after {\n        content: \"\";\n        -webkit-box-flex: 0;\n            -ms-flex: 0 1 30%;\n                flex: 0 1 30%;\n        margin: 10px; }\n      section .wrapper .images-item {\n        width: 30%;\n        margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/profile/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(us, route, router) {
        this.us = us;
        this.route = route;
        this.router = router;
        this._following = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolved) {
            console.log(resolved['profile']);
            _this._profile = resolved['profile'];
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.follow = function ($event) {
        this.us.followUser(this._profile.id).subscribe(function (user) {
            console.log(user);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/profile/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/profile/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/profile/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/profile/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("./src/app/profile/settings/settings.component.html"),
        styles: [__webpack_require__("./src/app/profile/settings/settings.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "./src/app/profile/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"wrapper\">\n    <form [formGroup]='user' (ngSubmit)='onSubmit()' class=\"form\">\n      <h3 class=\"header\">register new user</h3>\n      <div class=\"form-group\">\n        <label for=\"username\">username</label>\n        <input type=\"text\" id=\"username\" formControlName='username'>\n        <div class='warning' *ngIf=' user.get(\"username\").errors?.required && user.get(\"username\").touched'>\n          a username is required\n        </div>\n        <div class='warning' *ngIf='user.get(\"username\").errors?.minlength && user.get(\"username\").touched'>\n          the username should be at least {{user.get(\"username\").errors?.minlength.requiredLength }} letters\n        </div>\n        <div class='warning' *ngIf='user.get(\"username\").errors?.userAlreadyExists && user.get(\"username\").touched'>\n          a user with that name already exists\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">email</label>\n        <input type=\"email\" id=\"email\" formControlName=\"email\">\n        <div class='warning' *ngIf=' user.get(\"email\").errors?.required && user.get(\"email\").touched'>\n          an email address is required\n        </div>\n        <div class='warning' *ngIf='user.get(\"email\").errors?.emailAlreadyExists && user.get(\"email\").touched'>\n          a user with that email address already exists.\n        </div>\n      </div>\n      <div formGroupName='passwordGroup' class=\"passwordGroup\">\n        <div class=\"form-group\">\n          <label for=\"password\">password:</label>\n          <input type=\"password\" id=\"password\" formControlName='password'>\n          <div class='warning' *ngIf=' passwordControl.errors?.passwordTooShort && passwordControl.touched'>\n            password too short, please use at least {{passwordControl.errors?.passwordTooShort.requiredLength}} letters (got {{passwordControl.errors?.passwordTooShort.actualLength}})\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"confirmpassword\">confirm password:</label>\n          <input type=\"password\" id=\"confirmpassword\" formControlName='confirmPassword'>\n        </div>\n        <div class='warning' *ngIf=' user.get(\"passwordGroup\").errors?.passwordsDiffer && user.get(\"passwordGroup\").get(\"confirmPassword\").touched  && user.get(\"passwordGroup\").get(\"password\").touched'>\n          the two passwords should be the same\n        </div>\n      </div>\n      <div class=\"left\">\n        <button type='submit' [disabled]='!user.valid' class=\"register\">register</button>\n      </div>\n\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text],\ntextarea {\n  -webkit-transition: all 0.30s ease-in-out;\n  -moz-transition: all 0.30s ease-in-out;\n  -ms-transition: all 0.30s ease-in-out;\n  -o-transition: all 0.30s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD; }\n  input[type=text].ng-invalid,\n  textarea.ng-invalid {\n    border: 1px solid #e46767; }\n\ninput[type=text]:focus,\ntextarea:focus {\n  box-shadow: 0 0 5px #51cbee;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #51cbee; }\n  input[type=text]:focus.ng-invalid,\n  textarea:focus.ng-invalid {\n    box-shadow: 0 0 5px #cc2424;\n    border: 1px solid #cc2424; }\n\n.page {\n  margin-top: 25px;\n  width: 100%; }\n  .page .wrapper {\n    width: 90%;\n    margin: 0 auto; }\n    .page .wrapper form .form-group {\n      width: 60%;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n      .page .wrapper form .form-group label {\n        margin-right: 25px;\n        text-align: right;\n        text-align: right;\n        box-sizing: border-box;\n        padding-right: 10px;\n        padding-top: 5px;\n        width: 25%; }\n      .page .wrapper form .form-group input,\n      .page .wrapper form .form-group textarea {\n        width: 70%;\n        font-size: 1.5rem;\n        font-weight: 200; }\n      .page .wrapper form .form-group button {\n        display: inline-block;\n        font-family: 'Maven Pro', sans-serif;\n        line-height: 1.5em;\n        font-size: 16px;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        color: #2c3e50;\n        padding: 10px 30px;\n        width: 20%;\n        position: relative;\n        box-shadow: 0 0 1px transparent;\n        background: #009ee3;\n        transition-property: color;\n        transition-duration: 1s;\n        overflow: hidden;\n        -webkit-transform: perspective(1px) translateZ(0);\n                transform: perspective(1px) translateZ(0); }\n        .page .wrapper form .form-group button::before {\n          content: '';\n          position: absolute;\n          z-index: -1;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background: #e1e1e1;\n          border-radius: 100%;\n          -webkit-transform: scale(2);\n                  transform: scale(2);\n          transition-property: -webkit-transform;\n          transition-property: transform;\n          transition-property: transform, -webkit-transform;\n          transition-duration: 0.3s;\n          transition-timing-function: ease-out; }\n        .page .wrapper form .form-group button:hover:before, .page .wrapper form .form-group button:focus:before, .page .wrapper form .form-group button:active:before {\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n        .page .wrapper form .form-group button:hover {\n          color: white; }\n\n.warning {\n  color: red; }\n\n.left {\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin: 10px auto; }\n  .left .register {\n    display: inline-block;\n    font-family: 'Maven Pro', sans-serif;\n    line-height: 1.5em;\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: #2c3e50;\n    padding: 10px 30px;\n    width: 20%;\n    position: relative;\n    box-shadow: 0 0 1px transparent;\n    background: #009ee3;\n    transition-property: color;\n    transition-duration: 1s;\n    overflow: hidden;\n    -webkit-transform: perspective(1px) translateZ(0);\n            transform: perspective(1px) translateZ(0); }\n    .left .register::before {\n      content: '';\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: #e1e1e1;\n      border-radius: 100%;\n      -webkit-transform: scale(2);\n              transform: scale(2);\n      transition-property: -webkit-transform;\n      transition-property: transform;\n      transition-property: transform, -webkit-transform;\n      transition-duration: 0.3s;\n      transition-timing-function: ease-out; }\n    .left .register:hover:before, .left .register:focus:before, .left .register:active:before {\n      -webkit-transform: scale(0);\n              transform: scale(0); }\n    .left .register:hover {\n      color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/profile/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function passwordValidator(length) {
    return function (control) {
        return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
    };
}
function comparePasswords(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}
var SignupComponent = (function () {
    function SignupComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
    }
    Object.defineProperty(SignupComponent.prototype, "passwordControl", {
        get: function () {
            return this.user.get('passwordGroup').get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4)], this.serverSideValidateUsername()],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email], this.serverSideValidateEmail()],
            passwordGroup: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, passwordValidator(12)]],
                confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
            }, { validator: comparePasswords })
        });
    };
    SignupComponent.prototype.serverSideValidateUsername = function () {
        var _this = this;
        return function (control) {
            return _this.auth.checkUserNameAvailability(control.value).map(function (available) {
                if (available) {
                    return null;
                }
                return { userAlreadyExists: true };
            });
        };
    };
    SignupComponent.prototype.serverSideValidateEmail = function () {
        var _this = this;
        return function (control) {
            return _this.auth.checkEmailAvailability(control.value).map(function (available) {
                if (available) {
                    return null;
                }
                return { emailAlreadyExists: true };
            });
        };
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.signup(this.user.value.username, this.passwordControl.value, this.user.value.email).subscribe(function (val) {
            if (val) {
                _this.router.navigate(['/recipe/list']);
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("./src/app/profile/signup/signup.component.html"),
        styles: [__webpack_require__("./src/app/profile/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "./src/app/shared/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"pictures\">\n    <div class=\"item\" *ngFor=\"let image of images\">\n      <div class=\"thumb\">\n        <img src=\"{{image.pathToPicture}}\" alt=\"picture\">\n      </div>\n      <div class=\"info\">\n        <div class=\"info-sub\">\n          <div class=\"title\">author</div>\n          <div class=\"value\">{{image.author.username}}</div>\n        </div>\n        <div class=\"info-sub\">\n          <div class=\"title\">title</div>\n          <div class=\"value\">{{image.title}}</div>\n        </div>\n        <div class=\"info-sub\">\n          <div class=\"title\">description</div>\n          <div class=\"value\">{{image.description}}</div>\n        </div>\n        <div class=\"info-sub\">\n          <div class=\"title\">date published</div>\n          <div class=\"value\">{{image.datePublished}}</div>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"action\">\n          <button (click)=\"remove(image.id)\">remove</button>\n        </div>\n        <div class=\"action\">\n          <button (click)=\"flag(image.id)\">flag</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page {\n  margin-top: 25px; }\n  .page .pictures {\n    box-sizing: border-box;\n    padding: 3rem; }\n    .page .pictures .item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .page .pictures .item .thumb {\n        max-width: 300px; }\n        .page .pictures .item .thumb img {\n          max-width: 100%; }\n      .page .pictures .item .info {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-flex: 2;\n            -ms-flex-positive: 2;\n                flex-grow: 2; }\n        .page .pictures .item .info-sub {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row; }\n          .page .pictures .item .info-sub .title {\n            width: 25%;\n            font-weight: bold;\n            text-align: right;\n            box-sizing: border-box;\n            padding-right: 10px; }\n          .page .pictures .item .info-sub .value {\n            width: 75%;\n            text-align: left; }\n      .page .pictures .item .actions {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/shared/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(is) {
        this.is = is;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.is.fetchFresh().subscribe(function (imgs) {
            _this._images = imgs;
        });
    };
    Object.defineProperty(AdminComponent.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    AdminComponent.prototype.remove = function (id) {
        var _this = this;
        this.is.remove(id).subscribe(function (img) {
            _this._images = _this._images.filter(function (value) { return img.id !== value.id; });
        });
    };
    AdminComponent.prototype.flag = function (id) {
        this.is.flag(id).subscribe(function (img) {
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/shared/components/admin/admin.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "./src/app/shared/components/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"[urlToPic]\">\n  <div class=\"img\" [ngStyle]=\"{background: 'url(' + url + ')'}\">\n    <div class=\"overlay\">\n      <div class=\"overlay-content\">\n        <div class=\"author\">\n          <span>{{image.author.username}}</span>\n        </div>\n        <div class=\"title\">\n          <span>{{image.title}}</span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</a>\n"

/***/ }),

/***/ "./src/app/shared/components/image/image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\n  position: relative;\n  float: left;\n  width: 100%;\n  padding-top: 100%;\n  background-position: 50% 50% !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important; }\n  .img .overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: none; }\n    .img .overlay .author span {\n      color: white; }\n    .img .overlay .title span {\n      color: white; }\n  .img:hover .overlay {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    background-color: rgba(0, 0, 0, 0.2); }\n    .img:hover .overlay-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      width: 100%;\n      box-sizing: border-box;\n      padding: 0 50px 5px 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/shared/components/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_image_model__ = __webpack_require__("./src/app/shared/models/image.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageComponent = (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.url = this.image.pathToPicture;
        this.urlToPic = '/p/' + this.image.id;
    };
    Object.defineProperty(ImageComponent.prototype, "liked", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return ImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_image_model__["a" /* Image */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_image_model__["a" /* Image */]) === "function" && _a || Object)
], ImageComponent.prototype, "image", void 0);
ImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image',
        template: __webpack_require__("./src/app/shared/components/image/image.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/image/image.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ImageComponent);

var _a;
//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ "./src/app/shared/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(router, us) {
        this.router = router;
        this.us = us;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.us.isAdmin().map(function (bool) {
            if (bool) {
                return true;
            }
            else {
                _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
        });
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_manager_service__ = __webpack_require__("./src/app/shared/services/storage-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, storageManager) {
        this.router = router;
        this.storageManager = storageManager;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.storageManager.retrieveObject('currentUser') || this.storageManager.retrieveObject('isAuthenticated')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_storage_manager_service__["a" /* StorageManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_storage_manager_service__["a" /* StorageManagerService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "./src/app/shared/models/blog-post.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("./src/app/shared/models/user.model.ts");

var BlogPost = (function () {
    function BlogPost() {
    }
    BlogPost.fromJSON = function (json) {
        var post = new BlogPost();
        post.title = json.title;
        post.text = json.text;
        post.author = __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */].fromJSON(json.author, false);
        post.date_created = json.date_created;
        post.id = json._id;
        return post;
    };
    return BlogPost;
}());

//# sourceMappingURL=blog-post.model.js.map

/***/ }),

/***/ "./src/app/shared/models/image.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("./src/app/shared/models/user.model.ts");

var Image = (function () {
    function Image() {
    }
    Image.fromJSON = function (json) {
        var img = new Image();
        img.id = json._id;
        img.url = json.url;
        img.title = json.title;
        img.pathToPicture = json.pathToPicture;
        img.author = __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */].fromJSON(json.author);
        img.description = json.description;
        img.camera = json.camera;
        img.lens = json.lens;
        img.location = json.location;
        img.datePublished = json.datePublished;
        img.likes = json.likes;
        return img;
    };
    Image.prototype.toJSON = function () {
        return {
            _id: this.id,
            url: this.url,
            title: this.title,
            pathToPicture: this.pathToPicture,
            author: this.author,
            description: this.description,
            camera: this.camera,
            lens: this.lens,
            location: this.location,
            datePublished: this.datePublished,
            likes: this.likes
        };
    };
    return Image;
}());

//# sourceMappingURL=image.model.js.map

/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_model__ = __webpack_require__("./src/app/shared/models/image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);


var User = (function () {
    function User() {
    }
    User.fromJSON = function (json, deep) {
        if (deep === void 0) { deep = false; }
        var user = new User();
        user.id = json._id;
        user.username = json.username;
        user.email = json.username;
        user.admin = json.admin;
        if (deep) {
            user.likes = json.likes.map(function (obj) { return __WEBPACK_IMPORTED_MODULE_0__image_model__["a" /* Image */].fromJSON(obj); });
            user.pictures = json.pictures.map(function (obj) { return __WEBPACK_IMPORTED_MODULE_0__image_model__["a" /* Image */].fromJSON(obj); });
        }
        else {
            user.likes = json.likes;
            user.pictures = json.pictures;
        }
        return user;
    };
    User.prototype.toJSON = function () {
        return {
            _id: this.id,
            username: this.username,
            email: this.email,
            admin: this.admin,
            likes: this.likes.map(function (obj) { return obj.toJSON(); }),
            pictures: this.likes.map(function (obj) { return obj.toJSON(); })
        };
    };
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "./src/app/shared/pipes/markdown.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__("./node_modules/marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MarkdownPipe = (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (content) {
        return __WEBPACK_IMPORTED_MODULE_1_marked__(content, { sanitize: true });
    };
    return MarkdownPipe;
}());
MarkdownPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'markdown' })
], MarkdownPipe);

//# sourceMappingURL=markdown.pipe.js.map

/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_manager_service__ = __webpack_require__("./src/app/shared/services/storage-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, storageManager) {
        this.http = http;
        this.storageManager = storageManager;
        this.url = '/api/';
        var current = this.storageManager.retrieveObject('currentUser');
        this._user$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](current && current.username);
    }
    Object.defineProperty(AuthService.prototype, "user$", {
        get: function () {
            return this._user$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return this.storageManager.retrieveObject('currentUser').token;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.url + 'auth/login', { username: username, password: password })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                _this.storageManager.store('currentUser', { username: username, token: token });
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        if (this.user$.getValue()) {
            this.storageManager.removeItem('currentUser');
            setTimeout(function () { return _this._user$.next(null); });
        }
    };
    AuthService.prototype.checkUserNameAvailability = function (username) {
        return this.http.post(this.url + "auth/checkusername", { username: username }).map(function (res) { return res.json(); })
            .map(function (item) {
            if (item.username === 'alreadyexists') {
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthService.prototype.checkEmailAvailability = function (email) {
        return this.http.post(this.url + "auth/checkemail", { email: email })
            .map(function (res) { return res.json(); }).map(function (item) {
            if (item.email === 'alreadyexists') {
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthService.prototype.signup = function (username, password, email) {
        var _this = this;
        return this.http.post(this.url + "auth/signup", { username: username, password: password, email: email })
            .map(function (res) { return res.json(); }).map(function (res) {
            var token = res.token;
            if (token) {
                _this.storageManager.store('currentUser', { username: username, token: res.token });
                _this._user$.next(username);
                return true;
            }
            else {
                return false;
            }
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__storage_manager_service__["a" /* StorageManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_manager_service__["a" /* StorageManagerService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/shared/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_blog_post_model__ = __webpack_require__("./src/app/shared/models/blog-post.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var fromJSON = function (json) {
    return __WEBPACK_IMPORTED_MODULE_1__models_blog_post_model__["a" /* BlogPost */].fromJSON(json);
};
var BlogService = (function () {
    function BlogService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._url = '/api/blog';
    }
    BlogService.prototype.getLatestCreations = function () {
        return this.http.get(this._url + '/all')
            .map(function (response) {
            return response.json().map(fromJSON);
        });
    };
    BlogService.prototype.uploadPost = function (title, text) {
        console.log(title, text);
        var formData = new FormData();
        formData.append('title', title);
        formData.append('text', text);
        return this.http.post(this._url + '/add', {
            title: title,
            text: text
        }, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) { return response.json(); }).map(fromJSON);
    };
    BlogService.prototype.getPost = function (id) {
        return this.http.get(this._url + '/get/' + id)
            .map(function (response) { return response.json(); }).map(fromJSON);
    };
    return BlogService;
}());
BlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], BlogService);

var _a, _b;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "./src/app/shared/services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_image_model__ = __webpack_require__("./src/app/shared/models/image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var fromJSON = function (img) { return __WEBPACK_IMPORTED_MODULE_1__models_image_model__["a" /* Image */].fromJSON(img); };
var ImageService = (function () {
    function ImageService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._url = '/api/img/';
    }
    ImageService.prototype.fetchFresh = function () {
        return this.http.get(this._url + 'fresh').map(function (response) {
            return response.json().map(fromJSON);
        });
    };
    ImageService.prototype.fetchPopular = function () {
        return this.http.get(this._url + 'popular').map(function (response) {
            return response.json().map(fromJSON);
        });
    };
    ImageService.prototype.fetchPicked = function () {
        return this.http.get(this._url + 'picks').map(function (response) {
            return response.json().map(fromJSON);
        });
    };
    ImageService.prototype.fetchImage = function (id) {
        return this.http.get(this._url + 'get/' + id).map(function (response) { return response.json(); }).map(function (json) {
            var img = __WEBPACK_IMPORTED_MODULE_1__models_image_model__["a" /* Image */].fromJSON(json);
            return img;
        });
    };
    ImageService.prototype.hasBeenLiked = function (id) {
        return this.http.get(this._url + 'hasBeenLiked/' + id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); })
            .map(function (json) { return json.response; });
    };
    ImageService.prototype.upload = function (title, file, description, camera, lens) {
        var formData = new FormData();
        formData.append('title', title);
        formData.append('picture', file);
        if (description) {
            formData.append('description', description);
        }
        if (camera) {
            formData.append('camera', camera);
        }
        if (lens) {
            formData.append('lens', lens);
        }
        return this.http.post(this._url + "add", formData, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (res) { return res.json(); }).map(fromJSON);
    };
    ImageService.prototype.like = function (id) {
        return this.http.post(this._url + 'like/' + id, new FormData(), { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); }).map(fromJSON);
    };
    ImageService.prototype.unlike = function (id) {
        return this.http.post(this._url + 'unlike/' + id, new FormData(), { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(fromJSON);
    };
    ImageService.prototype.remove = function (id) {
        return this.http.delete(this._url + 'remove/' + id, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(function (obj) { return __WEBPACK_IMPORTED_MODULE_1__models_image_model__["a" /* Image */].fromJSON(obj); });
    };
    ImageService.prototype.flag = function (id) {
        return this.http.post(this._url + 'flag/' + id, new FormData(), { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(function (json) { return __WEBPACK_IMPORTED_MODULE_1__models_image_model__["a" /* Image */].fromJSON(json); });
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ImageService);

var _a, _b;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "./src/app/shared/services/storage-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageManagerService = (function () {
    function StorageManagerService() {
    }
    StorageManagerService.prototype.store = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    StorageManagerService.prototype.retrieveObject = function (key) {
        var objectString = localStorage.getItem(key);
        return JSON.parse(objectString);
    };
    StorageManagerService.prototype.exists = function (key) {
        return localStorage.getItem(key) !== null;
    };
    StorageManagerService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    return StorageManagerService;
}());
StorageManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageManagerService);

//# sourceMappingURL=storage-manager.service.js.map

/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("./src/app/shared/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_image_model__ = __webpack_require__("./src/app/shared/models/image.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._url = '/api/users/';
    }
    UserService.prototype.fetchActivity = function () {
        return this.http.get(this._url + 'activity', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) {
            return response.json().map(function (json) { return __WEBPACK_IMPORTED_MODULE_5__models_image_model__["a" /* Image */].fromJSON(json); });
        });
    };
    UserService.prototype.fetchProfile = function (id, deep) {
        if (deep === void 0) { deep = false; }
        return this.http.get(this._url + 'profile/' + id, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (res) { return res.json(); }).map(function (json) { return __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */].fromJSON(json, deep); });
    };
    UserService.prototype.isAdmin = function () {
        return this.http.get(this._url + 'isAdmin', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (res) {
            return res.json().isAdmin;
        });
    };
    UserService.prototype.fetchLoggedIn = function (deep) {
        if (deep === void 0) { deep = false; }
        return this.http.get(this._url + 'loggedUser', { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (res) { return res.json(); }).map(function (json) {
            console.log(json);
            return __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */].fromJSON(json, deep);
        });
    };
    UserService.prototype.followUser = function (id) {
        return this.http.post(this._url + 'follow', { id: id }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (response) { return response.json(); }).map(function (json) { return __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */].fromJSON(json, true); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_image_image_component__ = __webpack_require__("./src/app/shared/components/image/image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_component__ = __webpack_require__("./src/app/shared/components/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__components_image_image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_component__["a" /* AdminComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__components_image_image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_admin_admin_component__["a" /* AdminComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"side\">\n    <div class=\"img-container\">\n      <img [src]=\"img\" alt=\"upload image...\">\n    </div>\n  </div>\n  <div class=\"form\">\n    <form [formGroup]=\"upload\" (submit)=\"submit($event)\">\n      <div class=\"form-group\">\n        <label for=\"file\">Choose file</label>\n        <input type=\"file\" name=\"file\" id=\"file\" (change)=\"readUrl($event)\" formControlName=\"file\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" name=\"title\" id=\"title\" formControlName=\"title\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"3\" formControlName=\"description\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"camera\">camera</label>\n        <input type=\"text\" name=\"camera\" id=\"camera\" formControlName=\"camera\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lens\">Lens</label>\n        <input type=\"text\" name=\"lens\" id=\"lens\" formControlName=\"lens\" />\n      </div>\n      <!--  TODO: location   <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" name=\"title\" id=\"title\" formControlName=\"title\" />\n      </div>-->\n      <div class=\"form-group\">\n        <button type=\"submit\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/upload/upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 100vw;\n  min-height: 70vh;\n  margin-top: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .wrapper .side {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .wrapper .side .img-container {\n      width: 100%; }\n      .wrapper .side .img-container img {\n        width: 75%;\n        max-width: 75%; }\n  .wrapper input[type=text],\n  .wrapper textarea {\n    -webkit-transition: all 0.30s ease-in-out;\n    -moz-transition: all 0.30s ease-in-out;\n    -ms-transition: all 0.30s ease-in-out;\n    -o-transition: all 0.30s ease-in-out;\n    outline: none;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border: 1px solid #DDDDDD; }\n    .wrapper input[type=text].ng-invalid,\n    .wrapper textarea.ng-invalid {\n      border: 1px solid #e46767; }\n  .wrapper input[type=text]:focus,\n  .wrapper textarea:focus {\n    box-shadow: 0 0 5px #51cbee;\n    padding: 3px 0px 3px 3px;\n    margin: 5px 1px 3px 0px;\n    border: 1px solid #51cbee; }\n    .wrapper input[type=text]:focus.ng-invalid,\n    .wrapper textarea:focus.ng-invalid {\n      box-shadow: 0 0 5px #cc2424;\n      border: 1px solid #cc2424; }\n  .wrapper .form {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .wrapper .form form {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      height: 100%;\n      box-sizing: border-box;\n      padding: 25px; }\n      .wrapper .form form .form-group {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start; }\n        .wrapper .form form .form-group label {\n          width: 20%;\n          text-align: right;\n          box-sizing: border-box;\n          padding-right: 10px;\n          padding-top: 5px; }\n        .wrapper .form form .form-group input {\n          width: 80%;\n          font-size: 1.5rem;\n          font-weight: 200; }\n        .wrapper .form form .form-group textarea {\n          width: 80%;\n          font-size: 1.5rem;\n          font-weight: 200; }\n        .wrapper .form form .form-group button {\n          display: inline-block;\n          font-family: 'Maven Pro', sans-serif;\n          line-height: 1.5em;\n          font-size: 16px;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          color: #2c3e50;\n          padding: 10px 30px;\n          width: 20%;\n          position: relative;\n          box-shadow: 0 0 1px transparent;\n          background: #009ee3;\n          transition-property: color;\n          transition-duration: 1s;\n          overflow: hidden;\n          -webkit-transform: perspective(1px) translateZ(0);\n                  transform: perspective(1px) translateZ(0); }\n          .wrapper .form form .form-group button::before {\n            content: '';\n            position: absolute;\n            z-index: -1;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: #e1e1e1;\n            border-radius: 100%;\n            -webkit-transform: scale(2);\n                    transform: scale(2);\n            transition-property: -webkit-transform;\n            transition-property: transform;\n            transition-property: transform, -webkit-transform;\n            transition-duration: 0.3s;\n            transition-timing-function: ease-out; }\n          .wrapper .form form .form-group button:hover:before, .wrapper .form form .form-group button:focus:before, .wrapper .form form .form-group button:active:before {\n            -webkit-transform: scale(0);\n                    transform: scale(0); }\n          .wrapper .form form .form-group button:hover {\n            color: white; }\n\n@media screen and (max-width: 750px) {\n  .wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .wrapper .side {\n      width: 100%; }\n    .wrapper .form {\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__ = __webpack_require__("./src/app/shared/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = (function () {
    function UploadComponent(fb, is, router) {
        this.fb = fb;
        this.is = is;
        this.router = router;
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.upload = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            file: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(128)],
            camera: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(20)],
            lens: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(30)]
        });
    };
    UploadComponent.prototype.readUrl = function ($event) {
        var _this = this;
        if ($event.target.files && $event.target.files[0]) {
            this.img = $event.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.img = e.target.result;
            };
            reader.readAsDataURL($event.target.files[0]);
        }
    };
    UploadComponent.prototype.submit = function ($event) {
        var _this = this;
        var title = this.upload.value.title;
        var file = $event.target[0].files[0];
        var description = this.upload.value.description;
        var camera = this.upload.value.camera;
        var lens = this.upload.value.lens;
        this.is.upload(title, file, description, camera, lens).subscribe(function (res) {
            if (res.pathToPicture && res.id) {
                _this.router.navigate(['/profile']);
            }
            else {
                _this.router.navigate(['/upload']);
            }
        });
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-upload',
        template: __webpack_require__("./src/app/upload/upload.component.html"),
        styles: [__webpack_require__("./src/app/upload/upload.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_image_service__["a" /* ImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UploadComponent);

var _a, _b, _c;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map