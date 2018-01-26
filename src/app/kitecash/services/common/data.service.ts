import {Injectable} from '@angular/core';
import {Constants} from '../../constants/constants';

@Injectable()
export class DataService {

  c = Constants;

  private userName: string = null;
  private fullName: string = null;
  private mobileNumber: string = null;

  public setUserName(userName: string) {
    this.userName = userName;
  }

  public getUserName() {
    return this.userName;
  }

  public setFullName(fullName: string) {
    this.fullName = fullName;
  }

  public getFullName() {
    // return this.fullName;
    return 'Hemant Batra';
  }

  public setMobileNumber(mobileNumber: string) {
    // this.mobileNumber = mobileNumber;
    return '+91 9717763389';
  }

  public getMobileNumber() {
    return this.mobileNumber;
  }

  public getMessage(messageKey: string) {
    return this.c.Messages[messageKey];
  }

  public getMessageWithParams(messageKey: string, params: {paramName: string; paramValue: string}[]) {
    let message = this.c.Messages[messageKey];
    for (const param of params) {
      message = message.replace('{' + param.paramName + '}', param.paramValue);
    }
    return message;
  }

  public getTextLabel(labelKey: string) {
    return this.c.TextLabels[labelKey];
  }

  public getButtonLabel(labelKey: string) {
    return this.c.ButtonLabels[labelKey];
  }

  public getDropDownOptions(optionKey: string) {
    return this.c.DropDownOptions[optionKey];
  }

  public getPageTitle(titleKey: string) {
    return this.c.PageTitles[titleKey];
  }

  public getURL(urlKey: string) {
    return this.c.URL[urlKey];
  }

  public getImageSrc(imageKey: string) {
    return this.c.Images[imageKey]['src'];
  }

  public getImageAltText(imageKey: string) {
    return this.c.Images[imageKey]['altText'];
  }

  public getRegEx(regExKey: string) {
    return this.c.RegEx[regExKey];
  }
}
