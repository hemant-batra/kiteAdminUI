"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValidationService = (function () {
    function ValidationService(constantsService) {
        this.constantsService = constantsService;
        this.Generic = (function () {
            function class_1(constantsService) {
                this.constantsService = constantsService;
            }
            class_1.prototype.required = function (control, message) {
                if (control.untouched) {
                    return;
                }
                var errors = control['errors'];
                if (errors === null) {
                    return null;
                }
                if (errors['required']) {
                    return message;
                }
                return null;
            };
            return class_1;
        }());
        this.LoginComponent = (function () {
            function class_2(constantsService) {
                this.constantsService = constantsService;
                this.m = this.constantsService.getLoginConstants().Message;
            }
            class_2.prototype.userName = function (userName) {
                if (userName.untouched) {
                    return;
                }
                var errors = userName['errors'];
                if (errors === null) {
                    return;
                }
                if (errors['required']) {
                    return this.m.USERNAME_REQUIRED_MESSAGE;
                }
                if (errors['pattern']) {
                    return this.m.USERNAME_INVALID_PATTERN_MESSAGE;
                }
            };
            class_2.prototype.password = function (password) {
                if (password.untouched) {
                    return;
                }
                var errors = password['errors'];
                if (errors === null) {
                    return;
                }
                if (errors['required']) {
                    return this.m.PASSWORD_REQUIRED_MESSAGE;
                }
            };
            return class_2;
        }());
        this.ChangePasswordComponent = (function () {
            function class_3(constantsService) {
                this.constantsService = constantsService;
                this.m = this.constantsService.getChangePasswordConstants().Message;
            }
            class_3.prototype.newPassword = function (password) {
                if (password.untouched) {
                    return;
                }
                var errors = password['errors'];
                if (errors === null) {
                    return;
                }
                if (errors['required']) {
                    return this.m.NEW_PASSWORD_REQUIRED_MESSAGE;
                }
                if (errors['pattern']) {
                    return this.m.PASSWORD_INVALID_PATTERN_MESSAGE;
                }
            };
            class_3.prototype.confirmNewPassword = function (password) {
                if (password.untouched) {
                    return;
                }
                var errors = password['errors'];
                if (errors === null) {
                    return;
                }
                if (errors['required']) {
                    return this.m.CONFIRM_NEW_PASSWORD_REQUIRED_MESSAGE;
                }
                if (errors['pattern']) {
                    return this.m.PASSWORD_INVALID_PATTERN_MESSAGE;
                }
            };
            return class_3;
        }());
        this.ManualRefundComponent = (function () {
            function class_4(constantsService) {
                this.constantsService = constantsService;
                this.m = this.constantsService.getManualRefundConstants().Message;
            }
            class_4.prototype.mobileNumber = function (control) {
                if (control.untouched) {
                    return;
                }
                var errors = control['errors'];
                if (errors === null) {
                    return null;
                }
                if (errors['required']) {
                    return this.m.MOBILE_NUMBER_REQUIRED_MESSAGE;
                }
                if (errors['pattern']) {
                    return this.m.MOBILE_NUMBER_PATTERN_MESSAGE;
                }
                return null;
            };
            class_4.prototype.amount = function (control) {
                if (control.untouched) {
                    return;
                }
                var errors = control['errors'];
                if (errors === null) {
                    return null;
                }
                if (errors['required']) {
                    return this.m.AMOUNT_REQUIRED_MESSAGE;
                }
                if (errors['pattern']) {
                    return this.m.AMOUNT_REQUIRED_MESSAGE;
                }
                return null;
            };
            return class_4;
        }());
    }
    ValidationService.prototype.getGenericValidations = function () {
        return new this.Generic(this.constantsService);
    };
    ValidationService.prototype.getLoginValidations = function () {
        return new this.LoginComponent(this.constantsService);
    };
    ValidationService.prototype.getChangePasswordValidations = function () {
        return new this.ChangePasswordComponent(this.constantsService);
    };
    ValidationService.prototype.getManualRefundValidations = function () {
        return new this.ManualRefundComponent(this.constantsService);
    };
    return ValidationService;
}());
ValidationService = __decorate([
    core_1.Injectable()
], ValidationService);
exports.ValidationService = ValidationService;
