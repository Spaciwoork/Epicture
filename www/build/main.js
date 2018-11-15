webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionOauth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__(199);
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
    function ConnectionOauth(navCtrl, navParams, connectionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connectionService = connectionService;
        this.data = [];
    }
    ConnectionOauth.prototype.oauthreq = function () {
        //this.searchService.
        this.token = this.connectionService.connection();
        return (this.token);
    };
    ConnectionOauth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connection',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Connection/connection.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Connection</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background">\n\n  <button id="login" ion-button (tap)="oauthreq()">LOGIN</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Connection/connection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]])
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

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Connection_connection__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Favorites_AddFavorite_service__ = __webpack_require__(53);
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
    function HomePage(navCtrl, alertCtrl, dataClient, homeService, addfavoriteservice) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.dataClient = dataClient;
        this.homeService = homeService;
        this.addfavoriteservice = addfavoriteservice;
        this.page = 0;
        dataClient.access_token = this.getUrlParameter('access_token');
        dataClient.expires_in = this.getUrlParameter('expires_in');
        dataClient.token_type = this.getUrlParameter('token_type');
        dataClient.refresh_token = this.getUrlParameter('refresh_token');
        dataClient.account_username = this.getUrlParameter('account_username');
        dataClient.account_id = this.getUrlParameter('account_id');
        this.section = "hot";
        this.sort = "viral";
        this.window = "day";
        this.data = [];
        this.search();
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
        this.homeService.search(this.query, this.section, this.sort, this.window, this.page).then(function (data) {
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
            _this.page += 1;
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.add_to_favorite = function (balise) {
        console.log(balise);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        this.search();
        infiniteScroll.complete();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Welcome To the best Epicture</h3>\n\n  <p>\n    Merci de vous connecter !\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n  <button id= connect ion-button (tap)="connect()" color="Dark">Connection</button>\n\n  <ion-item>\n    <ion-label>Section</ion-label>\n    <ion-select [(ngModel)]="section">\n      <ion-option value="hot" selected=true (ionSelect)="search()">Hot</ion-option>\n      <ion-option value="top" (ionSelect)="search()">Top</ion-option>\n      <ion-option value="user" (ionSelect)="search()">User</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>Sort</ion-label>\n    <ion-select [(ngModel)]="sort">\n      <ion-option value="viral" selected=true (ionSelect)="search()">Viral</ion-option>\n      <ion-option value="top" (ionSelect)="search()">Top</ion-option>\n      <ion-option value="time" (ionSelect)="search()">Time</ion-option>\n      <ion-option value="rising"(ionSelect)="search()">Rising</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Window</ion-label>\n    <ion-select [(ngModel)]="window">\n      <ion-option value="day" selected=true (ionSelect)="search()">Day</ion-option>\n      <ion-option value="week" (ionSelect)="search()" >Week</ion-option>\n      <ion-option value="month" (ionSelect)="search()">Month</ion-option>\n      <ion-option value="year" (ionSelect)="search()">Year</ion-option>\n      <ion-option value="all" (ionSelect)="search()">All</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <button id="login" ion-button (tap)="search()">Rechercher</button>\n  <div *ngFor="let item of data">\n    <span *ngIf="item.video == 0">\n      <div class="img-block">\n          <img src = "{{ item.link }}"/>\n        <div style="background-color: #4d4d4d; padding-bottom: 11%;" class="img-title">\n          <button id="img-{{ item.id }}" data-id="{{ item.id }}" ion-button (tap)="addfavoriteservice.addingfavorite(item.id)">Favorite</button>\n          <span>{{ item.title }} </span>\n        </div>\n      </div>\n    </span>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */], __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_5__Favorites_AddFavorite_service__["a" /* AddFavoriteService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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
    HomeService.prototype.search = function (query, section, sort, window, page) {
        this.searchUrl = 'https://api.imgur.com/3/gallery/' + section + '/' + sort + '/' + window + '/' + page + '?showViral=true&mature=false&album_previews=true';
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Favorites_AddFavorite_service__ = __webpack_require__(53);
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
    function SearchPage(navCtrl, navParams, searchService, dataClient, addfavoriteservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchService = searchService;
        this.dataClient = dataClient;
        this.addfavoriteservice = addfavoriteservice;
        this.data = [];
    }
    SearchPage_1 = SearchPage;
    SearchPage.prototype.search = function () {
        var _this = this;
        this.searchService.search(this.query, this.page).then(function (data) {
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
                }
                if (data[i].images != undefined) {
                    data[i].images[0].title = data[i].title;
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
            console.log(_this.page);
            _this.data = images;
            _this.page += 1;
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(SearchPage_1, {
            item: item
        });
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        this.search();
        infiniteScroll.complete();
    };
    SearchPage = SearchPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="light" floating>Query</ion-label>\n    <ion-input  class="text-input" type="text" color="light" [(ngModel)]="query"></ion-input>\n  </ion-item>\n  <button id="login" ion-button (tap)="search()">Rechercher</button>\n  <div *ngFor="let item of data">\n    <span *ngIf="item.video == 0">\n      <div class="img-block">\n          <img src = "{{ item.link }}"/>\n        <div style="background-color: #4d4d4d; padding-bottom: 11%;" class="img-title">\n          <button id="img-{{ item.id }}" data-id="{{ item.id }}" ion-button (tap)="addfavoriteservice.addingfavorite(item.id)">Favoris</button>\n          {{ item.title }}\n        </div>\n      </div>\n    </span>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */], __WEBPACK_IMPORTED_MODULE_4__Favorites_AddFavorite_service__["a" /* AddFavoriteService */]])
    ], SearchPage);
    return SearchPage;
    var SearchPage_1;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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
        this.searchUrl = 'https://api.imgur.com/3/gallery/search/top/';
    }
    SearchService.prototype.search = function (query, page) {
        var clientId = 'd66c3cd99090df2';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Client-ID ' + clientId });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (query != undefined)
            query = '?q=' + query;
        else
            query = '';
        console.log(this.searchUrl + page + query);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return upload_inPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_service__ = __webpack_require__(204);
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
            selector: 'upload',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/upload/upload.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Upload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="modal fade" id="uploader" tabindex="-1" role="dialog" aria-labelledby="myUploadModal" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h1 class="modal-title mytitle" id="myUploadModal">Upload My Photo</h1>\n        </div>\n\n        <div class="modal-body">\n          <div>\n            <label class="mylabel" for="upload">Choose a Photo:</label>\n            <br/>\n            <input type="file" id="upload" (change)="handleImage($event)" />\n          </div>\n          <div>\n            <button ion-button (click)="uploadImage()">upload</button>\n          </div>\n          <div class="info" *ngIf="data">\n            <p class="info-para1" style="color: white">Photo was uploaded successfully!</p>\n            <p class="info-para2" style="color: white"><i class="fa fa-arrow-down"></i>Click thumbnail to view Imgur page</p>\n            <a [href]="data.link" target="_blank"><img [src]="data.link" alt=""/></a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__upload_service__["a" /* UploadService */]])
    ], upload_inPage);
    return upload_inPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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





var UploadService = /** @class */ (function () {
    function UploadService(http, dataclient) {
        this.http = http;
        this.dataclient = dataclient;
        this.uploadUrl = 'https://api.imgur.com/3/image';
    }
    UploadService.prototype.uploaddata = function (image) {
        var clientId = '24753a039b8a2e6';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.dataclient });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.uploadUrl + '?album', { image: image }, options)
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__["a" /* DataClient */]])
    ], UploadService);
    return UploadService;
}());

//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return favoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Favorites_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AddFavorite_service__ = __webpack_require__(53);
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
    favoritesPage.prototype.addfavorite = function () {
        this.addfavoriteservice.addingfavorite(this.query, this.dataClient.refresh_token);
    };
    favoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Favorites/Favorites.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favorite</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label color="light" floating>Query</ion-label>\n    <ion-input [(ngModel)]="query"></ion-input>\n  </ion-item>\n  <button id="addfav" ion-button (tap)="addfavorite()">Addtofavorite</button>\n  <button id="login" ion-button (tap)="favorites()">Your Favorite</button>\n  <li *ngFor="let item of data">\n    {{ item.title }}\n    <img src = "{{ item.link }}"/>\n    <ul *ngFor="let image of item.images">\n      <img src = "{{ image.link }}"/>\n    </ul>\n  </li>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/Favorites/Favorites.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__Favorites_service__["a" /* FavoritesService */],
            __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */], __WEBPACK_IMPORTED_MODULE_4__AddFavorite_service__["a" /* AddFavoriteService */]])
    ], favoritesPage);
    return favoritesPage;
}());

//# sourceMappingURL=Favorites.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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
        console.log("BITEEEEE");
        console.log(responseData);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__["a" /* DataClient */]])
    ], FavoritesService);
    return FavoritesService;
}());

//# sourceMappingURL=Favorites.service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_user_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagesUserPage = /** @class */ (function () {
    function ImagesUserPage(navCtrl, navParams, imagesUserService, dataClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagesUserService = imagesUserService;
        this.dataClient = dataClient;
        this.data = [];
        this.search();
    }
    ImagesUserPage_1 = ImagesUserPage;
    ImagesUserPage.prototype.search = function () {
        var _this = this;
        //console.log(this.dataClient);
        //this.searchService.
        this.imagesUserService.search(this.query).then(function (data) {
            console.log(data);
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
            _this.data = data;
            console.log(_this.data);
        }, function (error) { return _this.errorMessage = error; });
    };
    ImagesUserPage.prototype.delete = function (balise) {
        console.log(balise);
    };
    ImagesUserPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ImagesUserPage_1, {
            item: item
        });
    };
    ImagesUserPage = ImagesUserPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagesuser',template:/*ion-inline-start:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/images_user/images_user.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Image</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor="let item of data">\n      <div class="img-block">\n          <img src = "{{ item.link }}"/>\n        <div class="img-title">\n          <button id="img-{{ item.id }}" data-id="{{ item.id }}" ion-button (tap)="delete(item)">Delete</button>\n        </div>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/spaciwork/TEK3_2018/DEV_epicture_2018/src/pages/images_user/images_user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__images_user_service__["a" /* ImagesUserService */], __WEBPACK_IMPORTED_MODULE_3__Connection_dataClient__["a" /* DataClient */]])
    ], ImagesUserPage);
    return ImagesUserPage;
    var ImagesUserPage_1;
}());

//# sourceMappingURL=images_user.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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





var ImagesUserService = /** @class */ (function () {
    function ImagesUserService(http, dataClient) {
        this.http = http;
        this.dataClient = dataClient;
        this.searchUrl = 'https://api.imgur.com/3/account/'; // LEpitechTEpitech/images/0';
    }
    ImagesUserService.prototype.search = function (query) {
        var clientId = 'd66c3cd99090df2';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.dataClient.access_token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(this.searchUrl + this.dataClient.account_username + '/images/0');
        return this.http.get(this.searchUrl + this.dataClient.account_username + '/images/0', options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ImagesUserService.prototype.extractData = function (res) {
        var responseData = res.json();
        //console.log(responseData.data);
        //this.data = responseData.data;
        return responseData.data || {};
    };
    ImagesUserService.prototype.handleError = function (error) {
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
    ImagesUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__["a" /* DataClient */]])
    ], ImagesUserService);
    return ImagesUserService;
}());

//# sourceMappingURL=images_user.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 21:
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

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_images_user_images_user__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Connection_connection__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_in_login_in__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_upload_upload_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_images_user_images_user_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Favorites_Favorites_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Favorites_Favorites__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Connection_connection_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Connection_getRefreshToken__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Favorites_AddFavorite_service__ = __webpack_require__(53);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_images_user_images_user__["a" /* ImagesUserPage */],
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
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_images_user_images_user__["a" /* ImagesUserPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_in_login_in__["a" /* login_inPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_upload_upload__["a" /* upload_inPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Favorites_Favorites__["a" /* favoritesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Connection_connection__["a" /* ConnectionOauth */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__pages_upload_upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_15__pages_images_user_images_user_service__["a" /* ImagesUserService */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Favorites_Favorites_service__["a" /* FavoritesService */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Connection_connection_service__["a" /* ConnectionService */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Connection_getRefreshToken__["a" /* getrefreshtoken */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Connection_connection__["a" /* ConnectionOauth */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Connection_dataClient__["a" /* DataClient */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Favorites_AddFavorite_service__["a" /* AddFavoriteService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Connection_connection__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_upload_upload__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Favorites_Favorites__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_images_user_images_user__ = __webpack_require__(207);
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
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */] },
            { title: 'Image User', component: __WEBPACK_IMPORTED_MODULE_9__pages_images_user_images_user__["a" /* ImagesUserPage */] },
            { title: 'Connection', component: __WEBPACK_IMPORTED_MODULE_6__pages_Connection_connection__["a" /* ConnectionOauth */] },
            { title: 'Upload', component: __WEBPACK_IMPORTED_MODULE_7__pages_upload_upload__["a" /* upload_inPage */] },
            { title: 'Favorite', component: __WEBPACK_IMPORTED_MODULE_8__pages_Favorites_Favorites__["a" /* favoritesPage */] },
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login_inPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getrefreshtoken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFavoriteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(27);
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





var AddFavoriteService = /** @class */ (function () {
    function AddFavoriteService(http, dataClient) {
        this.http = http;
        this.dataClient = dataClient;
        this.searchUrl = 'https://api.imgur.com/3/image/';
        this.endpoint = '/favorite';
    }
    AddFavoriteService.prototype.addingfavorite = function (id, token) {
        console.log(token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.dataClient.access_token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.finalurl = this.searchUrl + id + this.endpoint;
        console.log(this.finalurl);
        return this.http.post(this.searchUrl + id + this.endpoint, '', options)
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    AddFavoriteService.prototype.extractData = function (res) {
        var responseData = res.json();
        console.log(responseData.data);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__Connection_dataClient__["a" /* DataClient */]])
    ], AddFavoriteService);
    return AddFavoriteService;
}());

//# sourceMappingURL=AddFavorite.service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map