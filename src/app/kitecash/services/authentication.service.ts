import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {paths, roles} from '../constants/pages';
import {HttpClient} from '@angular/common/http';
import {SessionService} from './common/session.service';
import {DataService} from './common/data.service';
import {isUndefined} from 'util';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient,
              private sessionService: SessionService,
              private dataService: DataService) {}

  // TODO handle preflight OPTIONS request at the server side
  doLogin(jsObj) {
    return this.httpClient.post(this.dataService.getURL('LOGIN'), jsObj)
      .map(
        (response) => {
          const additionalInfo = response['additionalInfo'];
          const userRole = additionalInfo.userRole;
          this.dataService.setUserRole(userRole);
          this.sessionService.setMenus(roles[userRole].map(
            role => paths.find(
              path => path.code === role.code
            )
          ));
          if (this.sessionService.getMenus().length === 0) {
            return this.dataService.getMessage('NO_MENU_FOUND');
          }
          this.sessionService.setSessionId(additionalInfo.sessionId);
          console.log('----- Login Successful -----');
          console.log('Session ID = ' + this.sessionService.getSessionId());
          return null;
        }
      )
      .catch(
        (error) => {
          try {
            if (isUndefined(error['error'].errorList)) {
              return Observable.throw(this.dataService.getMessage('NO_INTERNET'));
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            console.log('Login Error ' + err.message);
            return Observable.throw(this.dataService.getMessage('INTERNAL_SERVER_ERROR'));
          }
        }
      );
  }

  doLogout() {
    if (this.sessionService.isActive()) {
      this.httpClient.put(this.dataService.getURL('LOGOUT'), null).subscribe();
      this.sessionService.setSessionId(null);
      this.sessionService.setMenus([]);
      console.log('----- Logout Successful -----');
    }
  }


}
