// @angular
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// guards
import { PageGuard } from './kitecash/guards/page-guard';
import { LoginGuard } from './kitecash/guards/login-guard';

// interceptors
import { HttpRequestInterceptor } from './kitecash/interceptors/interceptor';

// constants
import { Constants } from './kitecash/constants/constants';
import { paths } from './kitecash/constants/pages';

// services
import { AuthenticationService} from './kitecash/services/authentication.service';
import { UtilityService } from './kitecash/services/common/utility.service';
import { TitleService } from './kitecash/services/common/title.service';
import { SessionService } from './kitecash/services/common/session.service';

// components
import { AppComponent } from './kitecash/components/app.component';
import { HeaderComponent } from './kitecash/components/frames/header/header.component';
import { FooterComponent } from './kitecash/components/frames/footer/footer.component';
import { LoginComponent } from './kitecash/components/auth/login/login.component';
import { BodyComponent } from './kitecash/components/frames/body/body.component';
import { AdminComponent } from './kitecash/components/admin/admin.component';
import { MessageComponent } from './kitecash/components/auth/message/message.component';
import { ManualRefundComponent } from './kitecash/components/admin/manual-refund/manual-refund.component';
import { MailMerchantComponent } from './kitecash/components/admin/mail-merchant/mail-merchant.component';
import { TitleComponent } from './kitecash/components/frames/title/title.component';
import { ChangePasswordComponent } from './kitecash/components/auth/change-password/change-password.component';
/*import {BrowserAnimationsModule} from '@angular/platform-browser/animations';*/

const appRoutes = [
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'logout', component: MessageComponent, data: {message: Constants.Messages.LOGOUT_MESSAGE} },
  { path: 'expired', component: MessageComponent, data: {message: Constants.Messages.EXPIRY_MESSAGE} },
  { path: 'invalid', component: MessageComponent, data: {message: Constants.Messages.BACK_BUTTON_MESSAGE} },
  { path: 'changePassword', canActivate: [PageGuard], component: ChangePasswordComponent },
  { path: 'admin', canActivateChild: [PageGuard], children: paths },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BodyComponent,
    AdminComponent,
    MessageComponent,
    ManualRefundComponent,
    AppComponent,
    TitleComponent,
    MailMerchantComponent,
    ChangePasswordComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    /*BrowserAnimationsModule,*/
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SessionService,
    PageGuard,
    LoginGuard,
    UtilityService,
    TitleService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
