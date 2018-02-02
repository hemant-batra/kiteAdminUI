import {FormControl} from '@angular/forms';
import {Injectable} from '@angular/core';
import {ConstantsService} from './constants.service';

@Injectable()
export class ValidationService {

  constructor (public constantsService: ConstantsService) {
    this.generic = new this.Generic(constantsService);
    this.loginComponent = new this.LoginComponent(constantsService);
    this.forgotPasswordComponent = new this.ForgotPasswordComponent(constantsService);
    this.changePasswordComponent = new this.ChangePasswordComponent(constantsService);
    this.manualRefundComponent = new this.ManualRefundComponent(constantsService);
  }

  private generic: any;
  private loginComponent: any;
  private forgotPasswordComponent: any;
  private changePasswordComponent: any;
  private manualRefundComponent: any;

  private Generic = class {
    constructor (private constantsService: ConstantsService) {}
    public required(control: FormControl, message: string): string {
      if (control.untouched) {
        return;
      }
      const errors = control['errors'];
      if (errors === null) {
        return null;
      }
      if (errors['required']) {
        return message;
      }
      return null;
    }
  };

  private LoginComponent = class {
    constructor (private constantsService: ConstantsService) {}
    private m = this.constantsService.getLoginConstants().Message;
    public userName(userName: FormControl) {
      if (userName.untouched) {
        return;
      }
      const errors = userName['errors'];
      if (errors === null) {
        return;
      }
      if (errors['required']) {
        return this.m.USERNAME_REQUIRED_MESSAGE;
      }
      if (errors['pattern']) {
        return this.m.USERNAME_INVALID_PATTERN_MESSAGE;
      }
    }

    public password(password: FormControl) {
      if (password.untouched) {
        return;
      }
      const errors = password['errors'];
      if (errors === null) {
        return;
      }
      if (errors['required']) {
        return this.m.PASSWORD_REQUIRED_MESSAGE;
      }
    }
  };

  private ForgotPasswordComponent = class {
    constructor (private constantsService: ConstantsService) {}
    private m = this.constantsService.getForgotPasswordConstants().Message;
    public newPassword(password: FormControl) {
      if (password.untouched) {
        return;
      }
      const errors = password['errors'];
      if (errors === null) {
        return;
      }
      if (errors['required']) {
        return this.m.PASSWORD_REQUIRED;
      }
      if (errors['pattern']) {
        return this.m.PASSWORD_PATTERN;
      }
    }
    public confirmNewPassword(password: FormControl) {
      if (password.untouched) {
        return;
      }
      const errors = password['errors'];
      if (errors === null) {
        return;
      }
      if (errors['required']) {
        return this.m.PASSWORD_REQUIRED;
      }
      if (errors['pattern']) {
        return this.m.PASSWORD_PATTERN;
      }
    }
  };

  private ChangePasswordComponent = class {
    constructor (private constantsService: ConstantsService) {}
    private m = this.constantsService.getChangePasswordConstants().Message;
    public newPassword(password: FormControl) {
      if (password.untouched) {
        return;
      }
      const errors = password['errors'];
      if (errors === null) {
        return;
      }
      if (errors['required']) {
        return this.m.NEW_PASSWORD_REQUIRED_MESSAGE;
      }
      if (errors['pattern']) {
        return this.m.PASSWORD_INVALID_PATTERN_MESSAGE;
      }
    }
    public confirmNewPassword(password: FormControl) {
      if (password.untouched) {
        return;
      }
      const errors = password['errors'];
      if (errors === null) {
        return;
      }
      if (errors['required']) {
        return this.m.CONFIRM_NEW_PASSWORD_REQUIRED_MESSAGE;
      }
      if (errors['pattern']) {
        return this.m.PASSWORD_INVALID_PATTERN_MESSAGE;
      }
    }
  };

  private ManualRefundComponent = class {
    constructor (private constantsService: ConstantsService) {}
    private m = this.constantsService.getManualRefundConstants().Message;
    public mobileNumber(control: FormControl): string {
      if (control.untouched) {
        return;
      }
      const errors = control['errors'];
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
    }

    public amount(control: FormControl): string {
      if (control.untouched) {
        return;
      }
      const errors = control['errors'];
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
    }
  };

  public getGenericValidations() {
    return this.generic;
  }
  public getLoginValidations() {
    return this.loginComponent;
  }
  public getForgotPasswordValidations() {
    return this.forgotPasswordComponent;
  }
  public getChangePasswordValidations() {
    return this.changePasswordComponent;
  }
  public getManualRefundValidations() {
    return this.manualRefundComponent;
  }
}
