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
var forms_1 = require("@angular/forms");
var ManualRefundComponent = (function () {
    function ManualRefundComponent(titleService, httpService) {
        this.titleService = titleService;
        this.httpService = httpService;
        this.c = constants_1.Constants;
    }
    ManualRefundComponent.prototype.ngOnInit = function () {
        this.titleService.init('MANUAL_REFUND');
        this.manualRefundForm = new forms_1.FormGroup({
            'mobileNumber': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern(new RegExp(/^[0-9]{10,10}$/))]),
            'systemAccountNumber': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'amount': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern(new RegExp(/^[1-9]\d*(\.\d+)?$/))]),
            'refundType': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'transactionId': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'remarks': new forms_1.FormControl(null)
        });
        this.manualRefundForm.get('systemAccountNumber').patchValue('');
        this.manualRefundForm.get('refundType').patchValue('');
    };
    ManualRefundComponent.prototype.onSubmit = function () {
        var _this = this;
        this.titleService.showSpinner();
        this.httpService.post(constants_1.Constants.URL.MANUAL_REFUND, this.manualRefundForm).subscribe(function (response) { _this.titleService.setSuccess(response), _this.manualRefundForm.reset(); }, function (error) { _this.titleService.setError(error), _this.manualRefundForm.reset(); });
    };
    ManualRefundComponent.prototype.getRemainingCharacters = function () {
        var val = this.manualRefundForm.get('remarks').value;
        if (val === null) {
            return 50;
        }
        return 50 - val.length;
    };
    return ManualRefundComponent;
}());
ManualRefundComponent = __decorate([
    core_1.Component({
        selector: 'app-manual-refund',
        templateUrl: './manual-refund.component.html',
        styleUrls: ['./manual-refund.component.css']
    })
], ManualRefundComponent);
exports.ManualRefundComponent = ManualRefundComponent;
