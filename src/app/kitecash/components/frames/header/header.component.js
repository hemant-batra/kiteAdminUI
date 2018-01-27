"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent(authenticationService, router, sessionService, dataService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.sessionService = sessionService;
        this.dataService = dataService;
    }
    HeaderComponent.prototype.navigate = function (path) {
        var activatedMenu = this.sessionService.getActivatedMenu();
        if (activatedMenu !== null) {
            activatedMenu.style.setProperty('height', '0px');
            activatedMenu.style.setProperty('z-index', '-1');
        }
        this.sessionService.allowNavigation();
        this.router.navigate([path]);
    };
    HeaderComponent.prototype.logout = function () {
        this.authenticationService.doLogout();
        this.router.navigate(['/logout']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
