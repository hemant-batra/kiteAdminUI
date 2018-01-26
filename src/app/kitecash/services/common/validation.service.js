"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var constants_1 = require("../../constants/constants");
var ValidationService = (function () {
    function ValidationService(dataService) {
        this.dataService = dataService;
    }
    ValidationService.prototype.getUsernameValidationMessage = function (userName) {
        if (userName.untouched) {
            return;
        }
        var errors = userName['errors'];
        if (errors === null) {
            return;
        }
        if (errors['required']) {
            return this.dataService.getMessage('USERNAME_REQUIRED_MESSAGE');
        }
        if (errors['pattern']) {
            return this.dataService.getMessage('USERNAME_INVALID_PATTERN_MESSAGE');
        }
    };
    ValidationService.prototype.getPasswordValidationMessage = function (password) {
        if (password.untouched) {
            return;
        }
        var errors = password['errors'];
        if (errors === null) {
            return;
        }
        if (errors['required']) {
            return this.dataService.getMessage('PASSWORD_REQUIRED_MESSAGE');
        }
    };
    ValidationService.prototype.getRequiredMessage = function (control, messageKey) {
        var errors = control['errors'];
        if (errors === null) {
            return null;
        }
        if (errors['required']) {
            return constants_1.Constants.Messages[messageKey];
        }
        return null;
    };
    ValidationService.prototype.getMobileNumberValidationMessage = function (control) {
        var errors = control['errors'];
        if (errors === null) {
            return null;
        }
        if (errors['required']) {
            return this.dataService.getMessage('MOBILE_NUMBER_REQUIRED_MESSAGE');
        }
        if (errors['pattern']) {
            return this.dataService.getMessage('MOBILE_NUMBER_PATTERN_MESSAGE');
        }
        return null;
    };
    ValidationService.prototype.getAmountValidationMessage = function (control) {
        var errors = control['errors'];
        if (errors === null) {
            return null;
        }
        if (errors['required']) {
            return this.dataService.getMessage('AMOUNT_REQUIRED_MESSAGE');
        }
        if (errors['pattern']) {
            return this.dataService.getMessage('AMOUNT_NUMERIC_MESSAGE');
        }
        return null;
    };
    return ValidationService;
}());
ValidationService = __decorate([
    core_1.Injectable()
], ValidationService);
exports.ValidationService = ValidationService;
