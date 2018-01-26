import {FormControl} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Constants} from '../../constants/constants';
import {DataService} from './data.service';

@Injectable()
export class ValidationService {

  constructor(private dataService: DataService) {}

  public getUsernameValidationMessage(userName: FormControl) {
    if (userName.untouched) {
      return;
    }
    const errors = userName['errors'];
    if (errors === null) {
      return;
    }
    if (errors['required']) {
      return this.dataService.getMessage('USERNAME_REQUIRED_MESSAGE');
    }
    if (errors['pattern']) {
      return this.dataService.getMessage('USERNAME_INVALID_PATTERN_MESSAGE');
    }
  }

  public getPasswordValidationMessage(password: FormControl) {
    if (password.untouched) {
      return;
    }
    const errors = password['errors'];
    if (errors === null) {
      return;
    }
    if (errors['required']) {
      return this.dataService.getMessage('PASSWORD_REQUIRED_MESSAGE');
    }
  }

  public getRequiredMessage(control: FormControl, messageKey: string): string {
    if (control.untouched) {
      return;
    }
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
    if (control.untouched) {
      return;
    }
    const errors = control['errors'];
    if (errors === null) {
      return null;
    }
    if (errors['required']) {
      return this.dataService.getMessage('MOBILE_NUMBER_REQUIRED_MESSAGE');
    }
    if (errors['pattern']) {
      return this.dataService.getMessage('MOBILE_NUMBER_PATTERN_MESSAGE');
    }
    return null;
  }

  public getAmountValidationMessage(control: FormControl): string {
    if (control.untouched) {
      return;
    }
    const errors = control['errors'];
    if (errors === null) {
      return null;
    }
    if (errors['required']) {
      return this.dataService.getMessage('AMOUNT_REQUIRED_MESSAGE');
    }
    if (errors['pattern']) {
      return this.dataService.getMessage('AMOUNT_NUMERIC_MESSAGE');
    }
    return null;
  }

}
