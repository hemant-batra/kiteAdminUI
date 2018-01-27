import {Injectable} from '@angular/core';
import {Constants} from '../../constants/constants';

@Injectable()
export class DataService {

  c = Constants;

  private userRole: string = null;
  private userName: string = null;
  private fullName: string = null;
  private mobileNumber: string = null;

  getUserRole() {
    return this.userRole;
  }

  setUserRole(userRole: string) {
    this.userRole = userRole;
  }

  public getUserName() {
    return this.userName;
  }

  public setUserName(userName: string) {
    this.userName = userName;
  }

  public getFullName() {
    // return this.fullName;
    return 'Hemant Batra';
  }

  public setFullName(fullName: string) {
    this.fullName = fullName;
  }

  public getMobileNumber() {
    return this.mobileNumber;
  }

  public setMobileNumber(mobileNumber: string) {
    // this.mobileNumber = mobileNumber;
    return '+91 9717763389';
  }

  public messages() {
    return this.c.Messages;
  }

  public getMessageWithParams(messageKey: string, params: {paramName: string; paramValue: string}[]) {
    let message = this.c.Messages[messageKey];
    for (const param of params) {
      message = message.replace('{' + param.paramName + '}', param.paramValue);
    }
    return message;
  }

  public textLabels() {
    return this.c.TextLabels;
  }

  public buttonLabels() {
    return this.c.ButtonLabels;
  }

  public dropDownOptions() {
    return this.c.DropDownOptions;
  }

  public pageTitles() {
    return this.c.PageTitles;
  }

  public urls() {
    return this.c.URL;
  }

  public getImageSrc(imageKey: string) {
    return this.c.Images[imageKey]['src'];
  }

  public getImageAltText(imageKey: string) {
    return this.c.Images[imageKey]['altText'];
  }

  public regEx() {
    return this.c.RegEx;
  }
}
