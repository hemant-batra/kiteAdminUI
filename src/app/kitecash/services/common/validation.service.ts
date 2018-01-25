import {FormControl} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Constants} from '../../constants/constants';

@Injectable()
export class ValidationService {

  public getUserNameValidationMessage(control: FormControl): string {
    if (!control.touched) {
      return;
    }
    const errors = control['errors'];
    if (errors === null) {
      return;
    }
    if (errors['required']) {
      return Constants.Messages.USERNAME_REQUIRED_MESSAGE;
    }
    if (errors['pattern']) {
      return Constants.Messages.USERNAME_INVALID_PATTERN_MESSAGE;
    }
    return null;
  }

  public getPasswordValidationMessage(control: FormControl): string {
    if (!control.touched) {
      return;
    }
    const errors = control['errors'];
    if (errors === null) {
      return;
    }
    if (errors['required']) {
      return Constants.Messages.PASSWORD_REQUIRED_MESSAGE;
    }
    if (errors['pattern']) {
      return Constants.Messages.PASSWORD_INVALID_PATTERN_MESSAGE;
    }
    return null;
  }

  public getRequiredMessage(control: FormControl, messageKey: string): string {
      const errors = control['errors'];
      if (errors === null) {
        return null;
      }
      if (errors['required']) {
        return Constants.Messages[messageKey];
      }
    return null;
  }

  public getMobileNumberValidationMessage(control: FormControl): string {
      const errors = control['errors'];
      if (errors === null) {
        return null;
      }
      if (errors['required']) {
        return Constants.Messages.MOBILE_NUMBER_REQUIRED_MESSAGE;
      }
      if (errors['pattern']) {
        return Constants.Messages.MOBILE_NUMBER_PATTERN_MESSAGE;
      }
    return null;
  }

  public getAmountValidationMessage(control: FormControl): string {
      const errors = control['errors'];
      if (errors === null) {
        return null;
      }
      if (errors['required']) {
        return Constants.Messages.AMOUNT_REQUIRED_MESSAGE;
      }
      if (errors['pattern']) {
        return Constants.Messages.AMOUNT_NUMERIC_MESSAGE;
      }
    return null;
  }

}
