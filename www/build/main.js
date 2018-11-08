webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionOauth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getRefreshToken__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectionOauth = /** @class */ (function () {
    function ConnectionOauth(navCtrl, navParams, connectionService, gettoken) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connectionService = connectionService;
        this.gettoken = gettoken;
        this.data = [];
    }
    ConnectionOauth.prototype.oauthreq = function () {
        //this.searchService.
        this.token = this.connectionService.connection();
        return (this.token);
    };
    ConnectionOauth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connection',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Connection/connection.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Connection</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n\n  <button id="login" ion-button color="mauve"(tap)="oauthreq()">LOGIN</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Connection/connection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */], __WEBPACK_IMPORTED_MODULE_3__getRefreshToken__["a" /* getrefreshtoken */]])
    ], ConnectionOauth);
    return ConnectionOauth;
}());

/*export class ConnectionPage {

  identifiant: string;
  password: string;

  constructor(public navCtrl: NavController) {
    console.log("connection ook");
  }
  get_login() {
    console.log("biloute");
    this.navCtrl.push(login_inPage, {
      identifiant: this.identifiant,
      password: this.password
    });
  }
}*/
//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Connection_connection__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, dataClient, homeService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataClient = dataClient;
        this.homeService = homeService;
        dataClient.access_token = this.getUrlParameter('account_id');
        dataClient.expires_in = this.getUrlParameter('expires_in');
        dataClient.token_type = this.getUrlParameter('token_type');
        dataClient.refresh_token = this.getUrlParameter('refresh_token');
        dataClient.account_username = this.getUrlParameter('account_username');
        dataClient.account_id = this.getUrlParameter('account_id');
        this.section = "hot";
        this.sort = "viral";
        this.window = "day";
        this.data = [];
    }
    HomePage.prototype.getUrlParameter = function (sParam) {
        var pos = window.location.href.search(sParam);
        var href = window.location.href;
        href = href.substring(pos + sParam.length + 1);
        pos = href.search('&');
        if (pos != -1)
            href = href.substring(0, pos);
        return (href);
    };
    ;
    HomePage.prototype.connect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Connection_connection__["a" /* ConnectionOauth */]);
    };
    HomePage.prototype.search = function () {
        var _this = this;
        //console.log(this.dataClient);
        //this.searchService.
        this.homeService.search(this.query, this.section, this.sort, this.window).then(function (data) {
            var i = 0;
            var images = Array();
            while (i < data.length) {
                if (data[i].is_album == false) {
                    if (data[i].link.search(".mp4") == -1) {
                        data[i].video = 0;
                    }
                    else {
                        data[i].video = 1;
                    }
                    images.push(data[i]);
                    //console.log(data[i].id);
                }
                if (data[i].images != undefined) {
                    data[i].images[0].title = data[i].title;
                    //console.log(data[i].images[0].link.search(".mp4"));
                    if (data[i].images[0].link.search(".mp4") == -1)
                        data[i].images[0].video = 0;
                    else {
                        data[i].images[0].video = 1;
                    }
                    images.push(data[i].images[0]);
                }
                i++;
            }
            console.log(images);
            _this.data = images;
            //console.log(data)
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.add_to_favorite = function (balise) {
        console.log(balise);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Welcome To the best Epicture</h3>\n\n  <p>\n    Merci de vous connecter !\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n  <button id= connect ion-button (tap)="connect()" color="Dark">Connection</button>\n  <ion-item>\n    <ion-label color="light" floating>Query</ion-label>\n    <ion-input [(ngModel)]="query"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Section</ion-label>\n    <ion-select [(ngModel)]="section">\n      <ion-option value="hot" selected=true>Hot</ion-option>\n      <ion-option value="top">Top</ion-option>\n      <ion-option value="user">User</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>Sort</ion-label>\n    <ion-select [(ngModel)]="sort">\n      <ion-option value="viral" selected=true>Viral</ion-option>\n      <ion-option value="top">Top</ion-option>\n      <ion-option value="time">Time</ion-option>\n      <ion-option value="rising">Rising</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Window</ion-label>\n    <ion-select [(ngModel)]="window">\n      <ion-option value="day" selected=true>Day</ion-option>\n      <ion-option value="week">Week</ion-option>\n      <ion-option value="month">Month</ion-option>\n      <ion-option value="year">Year</ion-option>\n      <ion-option value="all">All</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <button id="login" ion-button (tap)="search()">Rechercher</button>\n  <div *ngFor="let item of data">\n    <span *ngIf="item.video == 0">\n      <div class="img-block">\n          <img src = "{{ item.link }}"/>\n        <div class="img-title">\n          <button id="img-{{ item.id }}" data-id="{{ item.id }}" ion-button (tap)="add_to_favorite(item.id)">Rechercher</button>\n          {{ item.title }}\n        </div>\n      </div>\n    </span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */], __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* HomeService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConnectionService = /** @class */ (function () {
    function ConnectionService() {
        this.baseUrl = 'https://api.imgur.com/';
    }
    ConnectionService.prototype.connection = function () {
        var _this = this;
        var browserRef = open(this.baseUrl + 'oauth2/authorize?client_id=24753a039b8a2e6&response_type=token', '_self', 'location=no');
        browserRef.addEventListener("loadstart", function (event) {
            console.log("34567");
            if ((event.url).indexOf('access_token=') !== -1) {
                _this.token = event.url.slice(event.url.indexOf('access_token=') + 'access_token='.length);
                // here is your token, now you can close the InAppBrowser
                browserRef.close();
                return (_this.token);
            }
            else {
                console.log("ERROR");
            }
        });
    };
    ConnectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ConnectionService);
    return ConnectionService;
}());

//# sourceMappingURL=connection.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getrefreshtoken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var getrefreshtoken = /** @class */ (function () {
    function getrefreshtoken(http) {
        this.http = http;
        this.getrefreshtokenUrl = 'https://api.imgur.com/oauth2/token';
    }
    getrefreshtoken.prototype.getTokenRefresh = function () {
        var clientId = '24753a039b8a2e6';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Client-ID ' + clientId });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.getrefreshtokenUrl, options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    getrefreshtoken.prototype.extractData = function (res) {
        console.log(res);
        var responseData = res.json();
        console.log(responseData.data);
        //this.data = responseData.data;
        return responseData.data || {};
    };
    getrefreshtoken.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    getrefreshtoken = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], getrefreshtoken);
    return getrefreshtoken;
}());

//# sourceMappingURL=getRefreshToken.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//https://api.imgur.com/3/gallery/{{section}}/{{sort}}/{{window}}/{{page}}?showViral={{showViral}}&mature={{showMature}}&album_previews={{albumPreviews}}
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.searchUrl = 'https://api.imgur.com/3/gallery/hot/viral/day/0?showViral=true&mature=false&album_previews=true';
    }
    HomeService.prototype.search = function (query, section, sort, window) {
        console.log(section);
        console.log(sort);
        console.log(window);
        this.searchUrl = 'https://api.imgur.com/3/gallery/' + section + '/' + sort + '/' + window + '/0?showViral=true&mature=false&album_previews=true';
        var clientId = 'd66c3cd99090df2';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Client-ID ' + clientId });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (query != undefined)
            query = '?q=' + query;
        else
            query = '';
        console.log(this.searchUrl + query);
        return this.http.get(this.searchUrl + query, options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    HomeService.prototype.extractData = function (res) {
        var responseData = res.json();
        //console.log(responseData.data);
        //this.data = responseData.data;
        return responseData.data || {};
    };
    HomeService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 15; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
        this.access_token = this.getUrlParameter('account_id');
        this.expires_in = this.getUrlParameter('expires_in');
        this.token_type = this.getUrlParameter('token_type');
        this.refresh_token = this.getUrlParameter('refresh_token');
        this.account_username = this.getUrlParameter('account_username');
        this.account_id = this.getUrlParameter('account_id');
        console.log(this);
    }
    ListPage_1 = ListPage;
    ListPage.prototype.getUrlParameter = function (sParam) {
        var pos = window.location.href.search(sParam);
        var href = window.location.href;
        href = href.substring(pos + sParam.length + 1);
        pos = href.search('&');
        if (pos != -1)
            href = href.substring(0, pos);
        return (href);
    };
    ;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, searchService, dataClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchService = searchService;
        this.dataClient = dataClient;
        this.data = [];
    }
    SearchPage_1 = SearchPage;
    SearchPage.prototype.search = function () {
        var _this = this;
        //console.log(this.dataClient);
        //this.searchService.
        this.searchService.search(this.query).then(function (data) {
            var i = 0;
            var images = Array();
            while (i < data.length) {
                if (data[i].is_album == false) {
                    if (data[i].link.search(".mp4") == -1) {
                        data[i].video = 0;
                    }
                    else {
                        data[i].video = 1;
                        console.log(data[i]);
                    }
                    images.push(data[i]);
                    //console.log(data[i].id);
                }
                if (data[i].images != undefined) {
                    data[i].images[0].title = data[i].title;
                    //console.log(data[i].images[0].link.search(".mp4"));
                    if (data[i].images[0].link.search(".mp4") == -1)
                        data[i].images[0].video = 0;
                    else {
                        console.log(data[i].images[0]);
                        data[i].images[0].video = 1;
                    }
                    images.push(data[i].images[0]);
                }
                i++;
            }
            _this.data = images;
            //console.log(data)
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchPage.prototype.add_to_favorite = function (balise) {
        console.log(balise);
    };
    SearchPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(SearchPage_1, {
            item: item
        });
    };
    SearchPage = SearchPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="light" floating>Query</ion-label>\n    <ion-input [(ngModel)]="query"></ion-input>\n  </ion-item>\n  <button id="login" ion-button (tap)="search()">Rechercher</button>\n  <div *ngFor="let item of data">\n    <span *ngIf="item.video == 0">\n      <div class="img-block">\n          <img src = "{{ item.link }}"/>\n        <div class="img-title">\n          <button id="img-{{ item.id }}" data-id="{{ item.id }}" ion-button (tap)="add_to_favorite(item.id)">Rechercher</button>\n          {{ item.title }}\n        </div>\n      </div>\n    </span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */]])
    ], SearchPage);
    return SearchPage;
    var SearchPage_1;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.searchUrl = 'https://api.imgur.com/3/gallery/search/top/0';
    }
    SearchService.prototype.search = function (query) {
        var clientId = 'd66c3cd99090df2';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Client-ID ' + clientId });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (query != undefined)
            query = '?q=' + query;
        else
            query = '';
        console.log(this.searchUrl + query);
        return this.http.get(this.searchUrl + query, options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    SearchService.prototype.extractData = function (res) {
        var responseData = res.json();
        //console.log(responseData.data);
        //this.data = responseData.data;
        return responseData.data || {};
    };
    SearchService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_image_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyImagePage = /** @class */ (function () {
    function MyImagePage(navCtrl, navParams, searchService, dataClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchService = searchService;
        this.dataClient = dataClient;
        this.data = [];
    }
    MyImagePage_1 = MyImagePage;
    MyImagePage.prototype.search = function () {
        var _this = this;
        console.log(this.dataClient);
        //this.searchService.
        this.searchService.search(this.query).then(function (data) {
            console.log(data);
            //this.data = data;
            console.log(data);
        }, function (error) { return _this.errorMessage = error; });
    };
    MyImagePage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(MyImagePage_1, {
            item: item
        });
    };
    MyImagePage = MyImagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_image',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/my_images/my_image.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Connection</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="primary" floating>Query</ion-label>\n    <ion-input [(ngModel)]="query"></ion-input>\n  </ion-item>\n  <button id="login" ion-button (tap)="search()">Rechercher</button>\n  <li *ngFor="let item of data">\n    {{ item.title }}\n    <img src = "{{ item.link }}"/>\n    <ul *ngFor="let image of item.images">\n      <img src = "{{ image.link }}"/>\n    </ul>\n  </li>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/my_images/my_image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__my_image_service__["a" /* MyImageService */], __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */]])
    ], MyImagePage);
    return MyImagePage;
    var MyImagePage_1;
}());

//# sourceMappingURL=my_image.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyImageService = /** @class */ (function () {
    function MyImageService(http) {
        this.http = http;
        this.searchUrl = 'https://api.imgur.com/3/account/me/images';
    }
    MyImageService.prototype.search = function (query) {
        var clientId = 'd66c3cd99090df2';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + '315b5b242d8413b50cf5b00c220c98fb28e6c5f0' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.searchUrl + query, options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    MyImageService.prototype.extractData = function (res) {
        var responseData = res.json();
        //console.log(responseData.data);
        //this.data = responseData.data;
        return responseData.data || {};
    };
    MyImageService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    MyImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MyImageService);
    return MyImageService;
}());

//# sourceMappingURL=my_image.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return upload_inPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var upload_inPage = /** @class */ (function () {
    function upload_inPage(uploadService) {
        this.uploadService = uploadService;
        this.base64textString = "";
    }
    upload_inPage.prototype.handleImage = function (e) {
        var images = e.target.files;
        var image = images[0];
        if (images && image) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(image);
        }
    };
    upload_inPage.prototype.handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
    };
    upload_inPage.prototype.uploadImage = function () {
        var _this = this;
        this.uploadService.uploaddata(this.base64textString)
            .then(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
    };
    upload_inPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'upload',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/upload/upload.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Upload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="modal fade" id="uploader" tabindex="-1" role="dialog" aria-labelledby="myUploadModal" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n            &times;\n          </button>\n          <h3 class="modal-title mytitle" id="myUploadModal">Upload My Photo</h3>\n        </div>\n\n        <div class="modal-body">\n          <div>\n            <label class="mylabel" for="upload">Choose a Photo:</label>\n            <br />e\n            <input type="file" id="upload" (change)="handleImage($event)" />\n          </div>\n          <div>\n            <button ion-button (click)="uploadImage()">upload</button>\n          </div>\n          <div class="info" *ngIf="data">\n            <p class="info-para1">Photo was uploaded successfully!</p>\n            <p class="info-para2"><i class="fa fa-arrow-down"></i>Click thumbnail to view Imgur page</p>\n            <a [href]="data.link" target="_blank"><img [src]="data.link" alt=""/></a>\n\n          </div>\n        </div>\n\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default footer-btn" data-dismiss="modal"><i class="fa fa-times"></i> &nbsp; Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], upload_inPage);
    return upload_inPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.uploadUrl = 'https://api.imgur.com/3/image';
    }
    UploadService.prototype.uploaddata = function (image) {
        var clientId = '24753a039b8a2e6';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Client-ID ' + clientId });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.uploadUrl, { image: image }, options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    UploadService.prototype.extractData = function (res) {
        var responseData = res.json();
        return responseData.data || {};
    };
    UploadService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UploadService);
    return UploadService;
}());

//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return favoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Favorites_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AddFavorite_service__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var favoritesPage = /** @class */ (function () {
    function favoritesPage(navCtrl, navParams, favoriteService, dataClient, addfavoriteservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteService = favoriteService;
        this.dataClient = dataClient;
        this.addfavoriteservice = addfavoriteservice;
        this.data = [];
    }
    favoritesPage.prototype.favorites = function () {
        var _this = this;
        //this.searchService.
        this.favoriteService.favorite().then(function (data) {
            _this.data = data;
            _this.data = data;
            var i = 0;
            console.log(_this.dataClient.all_favorites);
            while (i < _this.data.length) {
                _this.dataClient.all_favorites.push(_this.data[i].id);
                i++;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    favoritesPage.prototype.addfavorite = function (id) {
        this.addfavoriteservice.addingfavorite(id, this.dataClient.refresh_token);
    };
    favoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Favorites/Favorites.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorite</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="light" floating>Query</ion-label>\n    <ion-input [(ngModel)]="query"></ion-input>\n  </ion-item>\n  <button id="addfav" ion-button (tap)="addfavorite(this.dataClient.account_id)">Rechercher</button>\n  <button id="login" ion-button (tap)="favorites()">Rechercher</button>\n  <li *ngFor="let item of data">\n    {{ item.title }}\n    <img src = "{{ item.link }}"/>\n    <ul *ngFor="let image of item.images">\n      <img src = "{{ image.link }}"/>\n    </ul>\n  </li>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Favorites/Favorites.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Favorites_service__["a" /* FavoritesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Favorites_service__["a" /* FavoritesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__AddFavorite_service__["a" /* AddFavoriteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__AddFavorite_service__["a" /* AddFavoriteService */]) === "function" && _e || Object])
    ], favoritesPage);
    return favoritesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=Favorites.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesService = /** @class */ (function () {
    function FavoritesService(http, dataClient) {
        this.http = http;
        this.dataClient = dataClient;
        this.searchUrl = 'https://api.imgur.com/3/account/';
        this.endpointsearch = '/gallery_favorites';
    }
    FavoritesService.prototype.favorite = function () {
        this.finalUrl = this.searchUrl + this.dataClient.account_username + this.endpointsearch;
        var clientId = '24753a039b8a2e6';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Client-ID ' + clientId });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.finalUrl, options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    FavoritesService.prototype.extractData = function (res) {
        var responseData = res.json();
        //console.log(responseData.data);
        //this.data = responseData.data;
        return responseData.data || {};
    };
    FavoritesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    FavoritesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__["a" /* DataClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__["a" /* DataClient */]) === "function" && _b || Object])
    ], FavoritesService);
    return FavoritesService;
    var _a, _b;
}());

//# sourceMappingURL=Favorites.service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Connection_connection__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_in_login_in__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_upload_upload_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_images_my_image__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Favorites_Favorites_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Favorites_Favorites__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Connection_connection_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Connection_getRefreshToken__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Connection_dataClient__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_my_images_my_image_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_images_my_image__["a" /* MyImagePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_in_login_in__["a" /* login_inPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__["a" /* upload_inPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Favorites_Favorites__["a" /* favoritesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Connection_connection__["a" /* ConnectionOauth */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_images_my_image__["a" /* MyImagePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_in_login_in__["a" /* login_inPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__["a" /* upload_inPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Favorites_Favorites__["a" /* favoritesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Connection_connection__["a" /* ConnectionOauth */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__pages_upload_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_21__pages_my_images_my_image_service__["a" /* MyImageService */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Favorites_Favorites_service__["a" /* FavoritesService */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Connection_connection_service__["a" /* ConnectionService */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Connection_getRefreshToken__["a" /* getrefreshtoken */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Connection_connection__["a" /* ConnectionOauth */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Connection_dataClient__["a" /* DataClient */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_images_my_image__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Connection_connection__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Favorites_Favorites__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */] },
            { title: 'MyImagePage', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_images_my_image__["a" /* MyImagePage */] },
            { title: 'Connection', component: __WEBPACK_IMPORTED_MODULE_8__pages_Connection_connection__["a" /* ConnectionOauth */] },
            { title: 'Upload', component: __WEBPACK_IMPORTED_MODULE_9__pages_upload_upload__["a" /* upload_inPage */] },
            { title: 'Favorite', component: __WEBPACK_IMPORTED_MODULE_10__pages_Favorites_Favorites__["a" /* favoritesPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login_inPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var login_inPage = /** @class */ (function () {
    function login_inPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.identifiant = navParams.get('identifiant');
        this.password = navParams.get('password');
        console.log(this.identifiant);
        console.log(this.password);
    }
    login_inPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login_in',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/login_in/login_in.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Welcome To the best Epicture</h3>\n\n  <p>\n    Merci de vous connecter !\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n  <button id= connect ion-button (tap)="connect()" color="Dark">Connection</button>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/login_in/login_in.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], login_inPage);
    return login_inPage;
}());

//# sourceMappingURL=login_in.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFavoriteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFavoriteService = /** @class */ (function () {
    function AddFavoriteService(http) {
        this.http = http;
        this.searchUrl = 'https://api.imgur.com/3/image/';
        this.endpoint = '/favorite';
    }
    AddFavoriteService.prototype.addingfavorite = function (id, token) {
        this.finalurl = this.searchUrl + id + this.endpoint;
        var clientId = '24753a039b8a2e6';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        return this.http.get(this.finalurl)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    AddFavoriteService.prototype.extractData = function (res) {
        var responseData = res.json();
        //console.log(responseData.data);
        //this.data = responseData.data;
        return responseData.data || {};
    };
    AddFavoriteService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    AddFavoriteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AddFavoriteService);
    return AddFavoriteService;
    var _a;
}());

//# sourceMappingURL=AddFavorite.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataClient; });
var DataClient = /** @class */ (function () {
    function DataClient() {
        this.all_favorites = [];
    }
    return DataClient;
}());

//# sourceMappingURL=dataClient.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map