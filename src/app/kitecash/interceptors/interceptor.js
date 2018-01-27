"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var session_service_1 = require("../services/common/session.service");
var environment_1 = require("../../../environments/environment");
var HttpRequestInterceptor = (function () {
    function HttpRequestInterceptor(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    HttpRequestInterceptor.prototype.intercept = function (httpRequest, next) {
        var sessionService;
        try {
            sessionService = this.injector.get(session_service_1.SessionService);
        }
        catch (err) {
            console.log('Error in acquiring session ID inside HTTP interceptor: ' + err.message);
            return this.handler(httpRequest, next, sessionService);
        }
        /*
          intercept the HTTP request and add the authorization header to it
         */
        var authReq = httpRequest.clone({
            headers: httpRequest.headers.set('Authorization', 'session ' + sessionService.getSessionId())
        });
        return this.handler(authReq, next, sessionService);
    };
    HttpRequestInterceptor.prototype.handler = function (httpRequest, next, sessionService) {
        var _this = this;
        return next.handle(httpRequest).catch(function (err) {
            /* show the session expiry page when the intercepted
               HTTP response returns error 440. However do not
               show the expiry page when the user has clicked on
               the logout button
            */
            if (err['status'] === 440) {
                if (httpRequest.url !== environment_1.environment.serverUrl + '/logout') {
                    console.log('HttpRequestInterceptor session is expired in response');
                    sessionService.setSessionId(null);
                    sessionService.setMenus([]);
                    _this.router.navigate(['/expired']);
                }
            }
            return Observable_1.Observable.throw(err);
        });
    };
    return HttpRequestInterceptor;
}());
HttpRequestInterceptor = __decorate([
    core_1.Injectable()
], HttpRequestInterceptor);
exports.HttpRequestInterceptor = HttpRequestInterceptor;
