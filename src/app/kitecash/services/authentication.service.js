"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var pages_1 = require("../constants/pages");
var util_1 = require("util");
var AuthenticationService = (function () {
    function AuthenticationService(httpClient, sessionService, dataService) {
        this.httpClient = httpClient;
        this.sessionService = sessionService;
        this.dataService = dataService;
    }
    // TODO handle preflight OPTIONS request at the server side
    AuthenticationService.prototype.doLogin = function (jsObj) {
        var _this = this;
        return this.httpClient.post(this.dataService.getURL('LOGIN'), jsObj)
            .map(function (response) {
            var additionalInfo = response['additionalInfo'];
            var userRole = additionalInfo.userRole;
            _this.sessionService.setUserRole(userRole);
            _this.sessionService.setMenus(pages_1.roles[userRole].map(function (role) { return pages_1.paths.find(function (path) { return path.code === role.code; }); }));
            if (_this.sessionService.getMenus().length === 0) {
                return _this.dataService.getMessage('NO_MENU_FOUND');
            }
            _this.sessionService.setSessionId(additionalInfo.sessionId);
            console.log('----- Login Successful -----');
            console.log('Session ID = ' + _this.sessionService.getSessionId());
            return null;
        })
            .catch(function (error) {
            try {
                if (util_1.isUndefined(error['error'].errorList)) {
                    return Observable_1.Observable.throw(_this.dataService.getMessage('NO_INTERNET'));
                }
                return Observable_1.Observable.throw(error['error'].errorList[0].errorMessage);
            }
            catch (err) {
                console.log('Login Error ' + err.message);
                return Observable_1.Observable.throw(_this.dataService.getMessage('INTERNAL_SERVER_ERROR'));
            }
        });
    };
    AuthenticationService.prototype.doLogout = function () {
        if (this.sessionService.isActive()) {
            this.httpClient.put(this.dataService.getURL('LOGOUT'), null).subscribe();
            this.sessionService.setSessionId(null);
            this.sessionService.setMenus([]);
            console.log('----- Logout Successful -----');
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
