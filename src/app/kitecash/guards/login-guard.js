"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginGuard = (function () {
    function LoginGuard(authenticationService, sessionService, router) {
        this.authenticationService = authenticationService;
        this.sessionService = sessionService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        /*
          perform logout and show the session expiry page when
          back button is pressed on the admin page
         */
        if (this.sessionService.isActive()) {
            this.authenticationService.doLogout();
            this.router.navigate(['/invalid']);
        }
        return true;
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    core_1.Injectable()
], LoginGuard);
exports.LoginGuard = LoginGuard;
