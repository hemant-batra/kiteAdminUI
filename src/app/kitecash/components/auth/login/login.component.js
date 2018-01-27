"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(router, dataService, sessionService, validationService, authenticationService) {
        this.router = router;
        this.dataService = dataService;
        this.sessionService = sessionService;
        this.validationService = validationService;
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            'userName': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern(this.dataService.getRegEx('EMAIL_ID'))]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var formGroup = new forms_1.FormGroup({
            'identifier': new forms_1.FormGroup({
                'idType': new forms_1.FormControl('PHONE'),
                'idValue': new forms_1.FormControl('9873009342', [forms_1.Validators.required, forms_1.Validators.pattern(new RegExp(/^[0-9]{10,10}$/))]),
            }),
            'password': new forms_1.FormControl('Admpass1#', forms_1.Validators.required)
        });
        this.startSpinner();
        this.authenticationService.doLogin(formGroup.getRawValue()).subscribe(function (response) {
            _this.stopSpinner();
            _this.sessionService.setUserName(_this.loginForm.get('userName').value);
            _this.sessionService.allowNavigation();
            _this.router.navigate(['admin']);
        }, function (error) {
            _this.stopSpinner();
            _this.loginForm.reset();
            _this.loginForm.setErrors({ 'serverError': error });
        });
    };
    LoginComponent.prototype.startSpinner = function () {
        var classList = this.glyphicon.nativeElement.classList;
        classList.remove('glyphicon-log-in');
        classList.add('glyphicon-refresh', 'glyphicon-spin');
    };
    LoginComponent.prototype.stopSpinner = function () {
        var classList = this.glyphicon.nativeElement.classList;
        classList.remove('glyphicon-refresh', 'glyphicon-spin');
        classList.add('glyphicon-log-in');
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.sessionService.setUserName(this.loginForm.get('userName').value);
        this.router.navigate(['forgotPassword']);
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('glyphicon')
], LoginComponent.prototype, "glyphicon", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
