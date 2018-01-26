"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var constants_1 = require("../../constants/constants");
var TitleService = (function () {
    function TitleService() {
        this.statusText = null;
        this.titleService = null;
        this._statusEventEmitter = new core_1.EventEmitter();
        this._statusTextEventEmitter = new core_1.EventEmitter();
        this._titleEventEmitter = new core_1.EventEmitter();
        this.emitter = {
            status: this._statusEventEmitter,
            statusText: this._statusTextEventEmitter,
            title: this._titleEventEmitter
        };
    }
    TitleService.prototype.setStatus = function (status) {
        this.status = status;
        this._statusEventEmitter.emit(this.status);
    };
    TitleService.prototype.setStatusText = function (statusText) {
        this.statusText = statusText;
        this._statusTextEventEmitter.emit(this.statusText);
    };
    TitleService.prototype.setTitle = function (titleCode) {
        this.titleService = constants_1.Constants.PageTitles[titleCode];
        this._titleEventEmitter.emit(this.titleService);
    };
    TitleService.prototype.showSpinner = function () {
        this.setStatus(1);
        this.setStatusText(null);
    };
    TitleService.prototype.setSuccess = function (message) {
        this.setStatus(2);
        this.setStatusText(message);
    };
    TitleService.prototype.setError = function (message) {
        this.setStatus(3);
        this.setStatusText(message);
    };
    TitleService.prototype.init = function (titleCode) {
        this.setTitle(titleCode);
        this.setStatus(0);
        this.setStatusText(null);
    };
    return TitleService;
}());
exports.TitleService = TitleService;
