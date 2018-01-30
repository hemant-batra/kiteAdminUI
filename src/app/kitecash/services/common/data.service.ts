import {Injectable} from '@angular/core';
import {Constants} from '../../constants/constants';

@Injectable()
export class DataService {

  c = Constants;

  private userRole: string = null;
  private userName: string = null;
  private fullName: string = null;
  private mobileNumber: string = null;

  public Message = this.c.Messages;
  public TextLabel = this.c.TextLabels;
  public ButtonLabel = this.c.ButtonLabels;
  public DropDownOption = this.c.DropDownOptions;
  public PageTitle = this.c.PageTitles;
  public URL = this.c.URL;
  public RegEx = this.c.RegEx;

  public getMessageWithParams(messageKey: string, params: {paramName: string; paramValue: string}[]) {
    let message = this.c.Messages[messageKey];
    for (const param of params) {
      message = message.replace('{' + param.paramName + '}', param.paramValue);
    }
    return message;
  }

  public getImageSrc(imageKey: string) {
    return this.c.Images[imageKey]['src'];
  }

  public getImageAltText(imageKey: string) {
    return this.c.Images[imageKey]['altText'];
  }

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
    // return this.mobileNumber;
    return '+91 9717763389';
  }

  public setMobileNumber(mobileNumber: string) {
    this.mobileNumber = mobileNumber;
  }
}
