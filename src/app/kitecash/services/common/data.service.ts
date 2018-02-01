import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

    private userRole: string = null;
    private userName: string = null;
    private fullName: string = null;
    private mobileNumber: string = null;

    public getUserRole() {
      return this.userRole;
    }

    public setUserRole(userRole: string) {
      this.userRole = userRole;
    }

    public getUserName() {
      return this.userName;
    }

    public setUserName(userName: string) {
      this.userName = userName;
    }

    public getFullName() {
      return this.fullName;
    }

    public setFullName(fullName: string) {
      this.fullName = fullName;
    }

    public getMobileNumber() {
      return this.mobileNumber;
    }

    public setMobileNumber(mobileNumber: string) {
      this.mobileNumber = mobileNumber;
    }
}
