"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var constants_1 = require("../../../constants/constants");
var MailMerchantComponent = (function () {
    function MailMerchantComponent(titleService) {
        this.titleService = titleService;
        this.c = constants_1.Constants;
    }
    MailMerchantComponent.prototype.ngOnInit = function () {
        this.titleService.init('MAIL_MERCHANT');
    };
    MailMerchantComponent.prototype.onSubmit = function () {
        var _this = this;
        this.titleService.showSpinner();
        setTimeout(function () {
            _this.titleService.setSuccess('Transaction has been successfully processed');
        }, 2000);
    };
    return MailMerchantComponent;
}());
MailMerchantComponent = __decorate([
    core_1.Component({
        selector: 'app-mail-merchant',
        templateUrl: './mail-merchant.component.html',
        styleUrls: ['./mail-merchant.component.css']
    })
], MailMerchantComponent);
exports.MailMerchantComponent = MailMerchantComponent;
