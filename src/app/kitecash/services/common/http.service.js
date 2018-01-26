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
var Observable_1 = require("rxjs/Observable");
var HttpService = (function () {
    function HttpService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpService.prototype.put = function (url, formGroup) {
        console.log('HTTP PUT Request: ' + JSON.stringify(formGroup.getRawValue()));
        return this.httpClient.put(url, formGroup.getRawValue())
            .map(function (response) { return response['message']; })
            .catch(function (error) {
            try {
                if (error['error'].errorList == null) {
                    return Observable_1.Observable.throw(constants_1.Constants.Messages.NO_INTERNET);
                }
                return Observable_1.Observable.throw(error['error'].errorList[0].errorMessage);
            }
            catch (err) {
                console.log('HTTP PUT Error ' + err.message);
                return Observable_1.Observable.throw(constants_1.Constants.Messages.INTERNAL_SERVER_ERROR);
            }
        });
    };
    HttpService.prototype.post = function (url, formGroup) {
        console.log('HTTP POST Request: ' + JSON.stringify(formGroup.getRawValue()));
        return this.httpClient.post(url, formGroup.getRawValue())
            .map(function (response) { return response['message']; })
            .catch(function (error) {
            try {
                if (error['error'].errorList == null) {
                    return Observable_1.Observable.throw(constants_1.Constants.Messages.NO_INTERNET);
                }
                return Observable_1.Observable.throw(error['error'].errorList[0].errorMessage);
            }
            catch (err) {
                console.log('HTTP POST Error ' + err.message);
                return Observable_1.Observable.throw(constants_1.Constants.Messages.INTERNAL_SERVER_ERROR);
            }
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable()
], HttpService);
exports.HttpService = HttpService;
