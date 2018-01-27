"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var constants_1 = require("../constants/constants");
var PageGuard = (function () {
    function PageGuard(router, sessionService, authenticationService, titleService) {
        this.router = router;
        this.sessionService = sessionService;
        this.authenticationService = authenticationService;
        this.titleService = titleService;
    }
    PageGuard.prototype.canActivate = function (route, state) {
        return this.canActivateChild(route, state);
    };
    PageGuard.prototype.canActivateChild = function (route, state) {
        if (!this.sessionService.isActive()) {
            /* navigate to the login screen when the session
               is inactive irrespective of the page URL that
               the user is trying to open. This includes:
               1) Opening a valid or invalid URL in the URL bar
               2) Pressing the refresh button
               3) Opening the same page in a new window (CTRL + N)
             */
            console.log('Session is inactive');
            this.router.navigate(['/enter-username']);
        }
        else if (!this.sessionService.isNavigationAllowed()) {
            /* navigate to the invalid access screen if the
               session is active and the user presses the back
               button
             */
            console.log('Browser back button is not allowed');
            this.authenticationService.doLogout();
            this.router.navigate(['/invalid']);
        }
        else {
            this.sessionService.disallowNavigation();
            this.titleService.init(constants_1.Constants.PageTitles.NULL);
        }
        return true;
    };
    return PageGuard;
}());
PageGuard = __decorate([
    core_1.Injectable()
], PageGuard);
exports.PageGuard = PageGuard;
