(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setcolor {\r\n    color: blue\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0Y29sb3Ige1xyXG4gICAgY29sb3I6IGJsdWVcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'git1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _userview_userview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userview/userview.component */ "./src/app/userview/userview.component.ts");
/* harmony import */ var _loginview_loginview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginview/loginview.component */ "./src/app/loginview/loginview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _errorcomp_errorcomp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errorcomp/errorcomp.component */ "./src/app/errorcomp/errorcomp.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _userview_userview_component__WEBPACK_IMPORTED_MODULE_4__["UserviewComponent"],
                _loginview_loginview_component__WEBPACK_IMPORTED_MODULE_5__["LoginviewComponent"],
                _errorcomp_errorcomp_component__WEBPACK_IMPORTED_MODULE_10__["ErrorcompComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'login', component: _loginview_loginview_component__WEBPACK_IMPORTED_MODULE_5__["LoginviewComponent"] },
                    { path: 'user',
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
                        component: _userview_userview_component__WEBPACK_IMPORTED_MODULE_4__["UserviewComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '**', component: _errorcomp_errorcomp_component__WEBPACK_IMPORTED_MODULE_10__["ErrorcompComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _req_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./req.service */ "./src/app/req.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(reqS, route) {
        this.reqS = reqS;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.reqS.checkLog()) {
            return true;
        }
        else {
            this.route.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_req_service__WEBPACK_IMPORTED_MODULE_3__["ReqService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/errorcomp/errorcomp.component.css":
/*!***************************************************!*\
  !*** ./src/app/errorcomp/errorcomp.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yY29tcC9lcnJvcmNvbXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/errorcomp/errorcomp.component.html":
/*!****************************************************!*\
  !*** ./src/app/errorcomp/errorcomp.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"mt-5 ml-5\">\n        \n        <img src=\"../../assets/image.png\" alt=\"\"></div>\n        </div>\n        <div class=\"col\">\n          <div class=\"mt-5 mr-5\">\n          <a [routerLink] = \"['/user']\" ><button class=\"btn btn-primary\">Go Back</button></a>\n          </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/errorcomp/errorcomp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/errorcomp/errorcomp.component.ts ***!
  \**************************************************/
/*! exports provided: ErrorcompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorcompComponent", function() { return ErrorcompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorcompComponent = /** @class */ (function () {
    function ErrorcompComponent() {
    }
    ErrorcompComponent.prototype.ngOnInit = function () {
    };
    ErrorcompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errorcomp',
            template: __webpack_require__(/*! ./errorcomp.component.html */ "./src/app/errorcomp/errorcomp.component.html"),
            styles: [__webpack_require__(/*! ./errorcomp.component.css */ "./src/app/errorcomp/errorcomp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorcompComponent);
    return ErrorcompComponent;
}());



/***/ }),

/***/ "./src/app/loginview/loginview.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginview/loginview.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ludmlldy9sb2dpbnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loginview/loginview.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginview/loginview.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"row justify-content-center mt-5 mb-4\">\n    <img src=\"../assets/github-logo_icon-icons.com_73546.png\" alt=\"\">\n  </div>\n  <div class=\"row justify-content-center\">\n      <h3 class=\"font-weight-light\">Sign in to GitHub</h3>\n  </div>\n  <div class=\"row justify-content-center\">\n      <div class=\"col col-xl-3 col-lg-4 col-md-5 col-sm-6 p-4 m-4 border rounded\">\n    <form class=\"\">\n      <div class=\"form-group \">\n        <label for=\"exampleInputEmail1\"><span class=\"font-weight-bold \"><h6>Username or email address</h6></span></label>\n        <input [(ngModel)] = 'typedData.email' name = \"email \"type=\"email\" class=\"form-control \" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\"></small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\"><span class=\"font-weight-bold\"><h6>Password</h6></span></label>\n        <input [(ngModel)] ='typedData.password' name =\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\n      </div>\n      <div class=\"alert alert-danger\" *ngIf =\"errorMessage\" >Invalid username/password</div>\n      <button type=\"submit\" class=\"btn btn-success btn-block\" (click) = 'testcall()'><span class=\"font-weight-bold\">Sign in</span></button>\n    </form>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loginview/loginview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginview/loginview.component.ts ***!
  \**************************************************/
/*! exports provided: LoginviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginviewComponent", function() { return LoginviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _req_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../req.service */ "./src/app/req.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





var LoginviewComponent = /** @class */ (function () {
    function LoginviewComponent(reqService, router, share) {
        this.reqService = reqService;
        this.router = router;
        this.share = share;
        this.typedData = {};
    }
    //checking if token is saved for auto-login
    LoginviewComponent.prototype.ngOnInit = function () {
        if (this.reqService.checkLog()) {
            this.router.navigate(['/user']);
        }
    };
    //Call to send input data
    LoginviewComponent.prototype.testcall = function () {
        var _this = this;
        this.reqService.simpleReq(this.typedData.email, this.typedData.password).subscribe(function (data) {
            _this.savedtoken = data.token;
            localStorage.setItem('token', data.token);
            _this.router.navigate(['/user']);
        }, function (error) { return _this.errorMessage = error; });
    };
    LoginviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginview',
            template: __webpack_require__(/*! ./loginview.component.html */ "./src/app/loginview/loginview.component.html"),
            styles: [__webpack_require__(/*! ./loginview.component.css */ "./src/app/loginview/loginview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_req_service__WEBPACK_IMPORTED_MODULE_3__["ReqService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], LoginviewComponent);
    return LoginviewComponent;
}());



/***/ }),

/***/ "./src/app/req.service.ts":
/*!********************************!*\
  !*** ./src/app/req.service.ts ***!
  \********************************/
/*! exports provided: ReqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqService", function() { return ReqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");








var ReqService = /** @class */ (function () {
    function ReqService(http, route, shared) {
        this.http = http;
        this.route = route;
        this.shared = shared;
        this.myUrl = 'https://api.github.com/authorizations/clients/';
        this.dataUrl = 'https://api.github.com/user';
        this.userUrl = 'https://api.github.com/users/';
        this.client_id = 'dd7f821f31f9546c9a84';
        this.client_secret = 'e565736db621016ce2d44b375375b21e4849951a';
    }
    //Authorization call here
    ReqService.prototype.simpleReq = function (em, pas) {
        var rand = Math.random().toString(36).substr(2, 5);
        var cont = {
            "scopes": ["repo", "write:org"],
            "note": "Forauth",
            "client_secret": "e565736db621016ce2d44b375375b21e4849951a",
            "fingerprint": rand,
        };
        var sav = em + ':' + pas;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(sav)
            })
        };
        return this.http.put(this.myUrl + this.client_id, cont, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Call for userData after successful authorization
    ReqService.prototype.dataReq = function () {
        var tok = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'token ' + tok
            })
        };
        return this.http.get(this.dataUrl, httpOptions);
    };
    ReqService.prototype.initialVal = function (user) {
        this.userN = user;
        //console.log(this.userN)
    };
    //Call for Authguard
    ReqService.prototype.checkLog = function () {
        return !!localStorage.getItem('token');
    };
    //Logout call
    ReqService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this.route.navigate(['/login']);
    };
    //Updated string call for Searchbox
    ReqService.prototype.updateUser = function (newUser) {
        this.userN = newUser;
        var tok = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'token ' + tok
            })
        };
        return this.http.get(this.userUrl + this.userN, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Repositories call
    ReqService.prototype.getrepos = function () {
        var tok = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'token ' + tok
            })
        };
        return this.http.get(this.userUrl + this.userN + '/repos', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Gists Call
    ReqService.prototype.getgist = function () {
        var tok = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'token ' + tok
            })
        };
        return this.http.get(this.userUrl + this.userN + '/gists', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Follower's call
    ReqService.prototype.getfollower = function () {
        var tok = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'token ' + tok
            })
        };
        return this.http.get(this.userUrl + this.userN + '/followers', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // Following call
    ReqService.prototype.getfollowing = function () {
        var tok = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'token ' + tok
            })
        };
        return this.http.get(this.userUrl + this.userN + '/following', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Error handling
    ReqService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is " + err.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ReqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], ReqService);
    return ReqService;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService.prototype.setValue = function (value) {
        this.data = value;
    };
    SharedService.prototype.getValue = function () {
        return this.data;
    };
    SharedService.prototype.setThis = function (value) {
        this.name = value;
    };
    SharedService.prototype.getThis = function () {
        return this.name;
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/userview/userview.component.css":
/*!*************************************************!*\
  !*** ./src/app/userview/userview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJ2aWV3L3VzZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userview/userview.component.html":
/*!**************************************************!*\
  !*** ./src/app/userview/userview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" href=\"#\" (click)= \"ngOnInit()\">Home </a>\r\n            </li>\r\n          </ul>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\" (click) = \"reqServ.logoutUser()\">Logout <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</nav>    \r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-3 col-lg-3 col-md-4\">\r\n      <div class=\"row m-4\">\r\n        <div class=\"card border border-info\" style=\"width: 18rem;\">\r\n          <img src=\"{{userData.avatar_url}}\" class=\"card-img-top\" alt=\"...\">\r\n          <div class=\"card-body\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row m-4\">\r\n        <p class=\"font-weight-normal\">Name: {{userData.login}}</p>\r\n      </div>\r\n      <div class=\"row m-4\">\r\n        <p class=\"font-weight-normal\">{{userData.type}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-xl-9 col-lg-9 col-md-8\">\r\n      <div class=\"row m-4\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)] =\"newUser\" (keyup)=\"searchUser()\"> \r\n          <!--<button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Search</button>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"row m-4\">\r\n        <nav class=\"nav\">\r\n        <a class=\"nav-link border btn btn-info\" (click) = \"repoView()\"> Repositories <span class=\"badge badge-light\">{{userData.public_repos}}</span></a>\r\n        <a class=\"nav-link border btn btn-info\" (click) = \"gistView()\"> Gists <span class=\"badge badge-light\">{{userData.public_gists}}</span></a> \r\n        <a class=\"nav-link border btn btn-info\" (click) = \"followerView()\"> Followers <span class=\"badge badge-light\">{{userData.followers}}</span> </a> \r\n        <a class=\"nav-link border btn btn-info\" (click) = \"followingView()\"> Following <span class=\"badge badge-light\">{{userData.following}}</span> </a>\r\n        </nav>\r\n      </div>\r\n      <div class=\"row m-4\">\r\n          <div class=\"col\">\r\n            <div *ngFor = \"let data of clickData\">\r\n              <div class=\"row border-bottom\">\r\n                <div class=\"col\">\r\n                  <h4 *ngIf = \"data.name\"><a href=\"{{data.html_url}}\" target=\"_blank\">{{data.name}}</a></h4>\r\n                  <h4 *ngIf = \"data.login\"><a href=\"{{data.html_url}}\" target=\"_blank\">{{data.login}}</a></h4>\r\n                  <h4 *ngIf = \"data.git_push_url\"><a href=\"{{data.html_url}}\" target=\"_blank\">Git Push Url: {{data.git_push_url}}</a></h4>\r\n                  <h4 *ngIf = \"data.git_pull_url\"><a href=\"{{data.html_url}}\" target=\"_blank\">Git Pull Url: {{data.git_pull_url}}</a></h4>\r\n                  <p >Description: {{data.description}}</p>\r\n                </div>\r\n                <div class=\"col pb-2 pt-2\">\r\n                <div *ngIf = \"data.watchers\"><span class=\"label label-primary\">{{data.watchers}} Watchers</span></div>\r\n                <div *ngIf = \"data.forks\"><span class=\"label label-primary\">{{data.forks}} Forks</span></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userview/userview.component.ts":
/*!************************************************!*\
  !*** ./src/app/userview/userview.component.ts ***!
  \************************************************/
/*! exports provided: UserviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewComponent", function() { return UserviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _req_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../req.service */ "./src/app/req.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserviewComponent = /** @class */ (function () {
    function UserviewComponent(shared, reqServ, route) {
        this.shared = shared;
        this.reqServ = reqServ;
        this.route = route;
        this.typedData = {};
    }
    //Data Request on component initiation
    UserviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqServ.dataReq().subscribe(function (res) {
            _this.userData = res;
        }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    localStorage.removeItem('token');
                    _this.route.navigate(['/login']);
                }
            }
        });
    };
    //Searching User call
    UserviewComponent.prototype.searchUser = function () {
        var _this = this;
        this.reqServ.updateUser(this.newUser).subscribe(function (dat) {
            _this.userData = dat;
        }, function (error) { return _this.errorMes = error; });
    };
    //Repositories call
    UserviewComponent.prototype.repoView = function () {
        var _this = this;
        var some = this.reqServ.initialVal(this.userData.login);
        this.reqServ.getrepos().subscribe(function (re) {
            _this.clickData = re;
            //console.log(re)
        }, function (error) { return _this.errorMes = error; });
    };
    //Gists call
    UserviewComponent.prototype.gistView = function () {
        var _this = this;
        var some = this.reqServ.initialVal(this.userData.login);
        this.reqServ.getgist().subscribe(function (res) {
            _this.clickData = res;
            //console.log(res)
        }, function (error) { return _this.errorMes = error; });
    };
    //Follower's call
    UserviewComponent.prototype.followerView = function () {
        var _this = this;
        var some = this.reqServ.initialVal(this.userData.login);
        this.reqServ.getfollower().subscribe(function (re) {
            _this.clickData = re;
            //console.log(re)
        }, function (error) { return _this.errorMes = error; });
    };
    //Following call
    UserviewComponent.prototype.followingView = function () {
        var _this = this;
        var some = this.reqServ.initialVal(this.userData.login);
        this.reqServ.getfollowing().subscribe(function (res) {
            _this.clickData = res;
            //console.log(res)
        }, function (error) { return _this.errorMes = error; });
    };
    UserviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userview',
            template: __webpack_require__(/*! ./userview.component.html */ "./src/app/userview/userview.component.html"),
            styles: [__webpack_require__(/*! ./userview.component.css */ "./src/app/userview/userview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _req_service__WEBPACK_IMPORTED_MODULE_3__["ReqService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserviewComponent);
    return UserviewComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mypc\Pictures\Saved Pictures\Github\git1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map