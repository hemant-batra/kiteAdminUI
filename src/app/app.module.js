"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
// guards
var page_guard_1 = require("./kitecash/guards/page-guard");
var login_guard_1 = require("./kitecash/guards/login-guard");
// interceptors
var interceptor_1 = require("./kitecash/interceptors/interceptor");
// constants
var constants_1 = require("./kitecash/constants/constants");
var pages_1 = require("./kitecash/constants/pages");
// services
var authentication_service_1 = require("./kitecash/services/authentication.service");
var validation_service_1 = require("./kitecash/services/common/validation.service");
var title_service_1 = require("./kitecash/services/common/title.service");
var session_service_1 = require("./kitecash/services/common/session.service");
var http_service_1 = require("./kitecash/services/common/http.service");
var data_service_1 = require("./kitecash/services/common/data.service");
// components
var app_component_1 = require("./kitecash/components/app.component");
var header_component_1 = require("./kitecash/components/frames/header/header.component");
var footer_component_1 = require("./kitecash/components/frames/footer/footer.component");
var body_component_1 = require("./kitecash/components/frames/body/body.component");
var admin_component_1 = require("./kitecash/components/admin/admin.component");
var message_component_1 = require("./kitecash/components/auth/message/message.component");
var manual_refund_component_1 = require("./kitecash/components/admin/manual-refund/manual-refund.component");
var mail_merchant_component_1 = require("./kitecash/components/admin/mail-merchant/mail-merchant.component");
var title_component_1 = require("./kitecash/components/frames/title/title.component");
var change_password_component_1 = require("./kitecash/components/auth/change-password/change-password.component");
var forgot_password_component_1 = require("./kitecash/components/auth/forgot-password/forgot-password.component");
var login_component_1 = require("./kitecash/components/auth/login/login.component");
var appRoutes = [
    { path: '', canActivate: [login_guard_1.LoginGuard], component: login_component_1.LoginComponent },
    { path: 'forgotPassword', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'logout', component: message_component_1.MessageComponent, data: { message: constants_1.Constants.Messages.LOGOUT_MESSAGE } },
    { path: 'expired', component: message_component_1.MessageComponent, data: { message: constants_1.Constants.Messages.EXPIRY_MESSAGE } },
    { path: 'invalid', component: message_component_1.MessageComponent, data: { message: constants_1.Constants.Messages.BACK_BUTTON_MESSAGE } },
    { path: 'changePassword', canActivate: [page_guard_1.PageGuard], component: change_password_component_1.ChangePasswordComponent },
    { path: 'admin', canActivateChild: [page_guard_1.PageGuard], children: pages_1.paths },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            body_component_1.BodyComponent,
            admin_component_1.AdminComponent,
            message_component_1.MessageComponent,
            manual_refund_component_1.ManualRefundComponent,
            app_component_1.AppComponent,
            title_component_1.TitleComponent,
            mail_merchant_component_1.MailMerchantComponent,
            change_password_component_1.ChangePasswordComponent,
            forgot_password_component_1.ForgotPasswordComponent,
            login_component_1.LoginComponent
        ],
        imports: [
            http_1.HttpClientModule,
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            session_service_1.SessionService,
            page_guard_1.PageGuard,
            login_guard_1.LoginGuard,
            validation_service_1.ValidationService,
            http_service_1.HttpService,
            title_service_1.TitleService,
            authentication_service_1.AuthenticationService,
            data_service_1.DataService,
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: interceptor_1.HttpRequestInterceptor,
                multi: true
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
