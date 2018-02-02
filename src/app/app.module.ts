// @angular
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// guards
import {SessionGuard} from './kitecash/guards/session-guard';
import {BackButtonGuard} from './kitecash/guards/back-button-guard';
// interceptors
import {HttpRequestInterceptor} from './kitecash/interceptors/interceptor';
// constants
import {paths} from './kitecash/constants/pages';
// services
import {ValidationService} from './kitecash/services/common/validation.service';
import {TitleService} from './kitecash/services/common/title.service';
import {SessionService} from './kitecash/services/common/session.service';
import {HttpService} from './kitecash/services/common/http.service';
import {DataService} from './kitecash/services/common/data.service';
import {NavigationService} from './kitecash/services/common/navigation.service';
import {ConstantsService} from './kitecash/services/common/constants.service';
import {FactoryService} from './kitecash/services/common/factory.service';
// components
import {AppComponent} from './kitecash/components/app.component';
import {HeaderComponent} from './kitecash/components/frames/header/header.component';
import {FooterComponent} from './kitecash/components/frames/footer/footer.component';
import {BodyComponent} from './kitecash/components/frames/body/body.component';
import {AdminComponent} from './kitecash/components/admin/admin.component';
import {MessageComponent} from './kitecash/components/auth/message/message.component';
import {ManualRefundComponent} from './kitecash/components/admin/manual-refund/manual-refund.component';
import {MailMerchantComponent} from './kitecash/components/admin/mail-merchant/mail-merchant.component';
import {TitleComponent} from './kitecash/components/frames/title/title.component';
import {ChangePasswordComponent} from './kitecash/components/auth/change-password/change-password.component';
import {ForgotPasswordComponent} from './kitecash/components/auth/forgot-password/forgot-password.component';
import {LoginComponent} from './kitecash/components/auth/login/login.component';
import {MyProfileComponent} from './kitecash/components/auth/my-profile/my-profile.component';
import {LogoutComponent} from './kitecash/components/auth/logout/logout.component';
import {UnauthorizedComponent} from './kitecash/components/auth/unauthorized/unauthorized.component';

const appRoutes = [
  {path: '', canActivate: [BackButtonGuard], component: LoginComponent}, // always allow
  {path: 'resetPassword', children: [
    {path: '', canActivate: [BackButtonGuard], component: UnauthorizedComponent}, // never allow
    {path: '**', canActivate: [BackButtonGuard], component: ForgotPasswordComponent} // allow only when the unique id is present and is valid
  ]},
  {path: 'admin', canActivateChild: [BackButtonGuard, SessionGuard], children: paths}, // allow only when session is active
  {path: 'message', canActivate: [BackButtonGuard], component: MessageComponent}, // allow only when set true in navigator
  {path: 'unauthorized', canActivate: [BackButtonGuard], component: UnauthorizedComponent}, // always allow
  {path: '**', redirectTo: 'unauthorized'} // never allow
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AdminComponent,
    MessageComponent,
    ManualRefundComponent,
    AppComponent,
    TitleComponent,
    MailMerchantComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    LoginComponent,
    LogoutComponent,
    MyProfileComponent,
    UnauthorizedComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SessionGuard,
    BackButtonGuard,
    SessionService,
    ValidationService,
    HttpService,
    TitleService,
    DataService,
    NavigationService,
    ConstantsService,
    FactoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
