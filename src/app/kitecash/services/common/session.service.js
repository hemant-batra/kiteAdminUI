"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pages_1 = require("../../constants/pages");
var util_1 = require("util");
var SessionService = (function () {
    function SessionService() {
        this.activatedMenu = null;
        this.userName = null;
        this.sessionId = null;
        this.validNavigation = false;
        this.userRole = null;
        this.menus = null;
    }
    SessionService.prototype.getActivatedMenu = function () {
        return this.activatedMenu;
    };
    SessionService.prototype.setActivatedMenu = function (activatedMenu) {
        this.activatedMenu = activatedMenu;
    };
    SessionService.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    SessionService.prototype.getUserName = function () {
        return this.userName;
    };
    SessionService.prototype.isActive = function () {
        return this.sessionId != null;
    };
    SessionService.prototype.setUserRole = function (userRole) {
        this.userRole = userRole;
    };
    SessionService.prototype.getSessionId = function () {
        return this.sessionId;
    };
    SessionService.prototype.setSessionId = function (sessionId) {
        this.sessionId = sessionId;
    };
    SessionService.prototype.allowNavigation = function () {
        this.validNavigation = true;
    };
    SessionService.prototype.disallowNavigation = function () {
        this.validNavigation = false;
    };
    SessionService.prototype.isNavigationAllowed = function () {
        return this.validNavigation;
    };
    SessionService.prototype.getMenus = function () {
        return this.menus;
    };
    SessionService.prototype.setMenus = function (menus) {
        this.menus = menus;
    };
    SessionService.prototype.filterChildren = function (menuCode, children) {
        if (util_1.isUndefined(children)) {
            return children;
        }
        var filteredChildren = pages_1.roles[this.userRole].find(function (role) { return role.code === menuCode; }).children;
        if (util_1.isUndefined(filteredChildren)) {
            return filteredChildren;
        }
        filteredChildren = filteredChildren.map(function (roleCode) { return children.find(function (child) { return child.code === roleCode; }); }).filter(function (menu) { return !util_1.isUndefined(menu); });
        return filteredChildren;
    };
    return SessionService;
}());
exports.SessionService = SessionService;
