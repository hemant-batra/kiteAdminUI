import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../constants/constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UtilityService {

  constructor (private httpClient: HttpClient) {}

  public put(url: string, formGroup: FormGroup): Observable<string> {
    console.log('HTTP PUT Request: ' + JSON.stringify(formGroup.getRawValue()));
    return this.httpClient.put(url, formGroup.getRawValue())
      .map(
        response => response['message']
      )
      .catch(
        (error) => {
          try {
            if (error['error'].errorList == null) {
              return Observable.throw(Constants.Messages.NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            console.log('HTTP PUT Error ' + err.message);
            return Observable.throw(Constants.Messages.INTERNAL_SERVER_ERROR);
          }
        }
      );
  }

  public post(url: string, formGroup: FormGroup): Observable<string> {
    console.log('HTTP POST Request: ' + JSON.stringify(formGroup.getRawValue()));
    return this.httpClient.post(url, formGroup.getRawValue())
      .map(
        response => response['message']
      )
      .catch(
        (error) => {
          try {
            if (error['error'].errorList == null) {
              return Observable.throw(Constants.Messages.NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            console.log('HTTP POST Error ' + err.message);
            return Observable.throw(Constants.Messages.INTERNAL_SERVER_ERROR);
          }
        }
      );
  }

  public invalidControl(control: FormControl): boolean {
    return control.touched && !control.valid;
  }

  public getRequiredMessage(control: FormControl, messageKey: string): string {
    if (this.invalidControl(control)) {
      const errors = control['errors'];
      if (errors === null) {
        return null;
      }
      if (errors['required']) {
        return Constants.Messages[messageKey];
      }
    }
    return null;
  }

  public getMobileNumberValidationMessage(control: FormControl): string {
    if (this.invalidControl(control)) {
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
    }
    return null;
  }

  public getAmountValidationMessage(control: FormControl): string {
    if (this.invalidControl(control)) {
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
    }
    return null;
  }

}
