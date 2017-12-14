import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Constants} from '../constants/constants';
import {paths, roles} from '../constants/pages';
import {HttpClient} from '@angular/common/http';
import {SessionService} from './common/session.service';
import {isUndefined} from 'util';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient,
              private session: SessionService) {}

  // TODO handle preflight OPTIONS request at the server side
  doLogin(jsObj) {
    // console.log('authenticationService.login()');
    return this.httpClient.post(Constants.URL.LOGIN, jsObj)
      .map(
        (response) => {
          const additionalInfo = response['additionalInfo'];
          const userRole = additionalInfo.userRole;
          this.session.setUserRole(userRole);
          this.session.setMenus(roles[userRole].map(
            role => paths.find(
              path => path.code === role.code
            )
          ));
          if (this.session.getMenus().length === 0) {
            return Constants.Messages.NO_MENU_FOUND;
          }
          this.session.setSessionId(additionalInfo.sessionId);
          console.log('----- Login Successful -----');
          console.log('Session ID = ' + this.session.getSessionId());
          return null;
        }
      )
      .catch(
        (error) => {
          try {
            if (error['error'].errorList == null) {
              return Observable.throw(Constants.Messages.NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            console.log('Login Error ' + err.message);
            return Observable.throw(Constants.Messages.INTERNAL_SERVER_ERROR);
          }
        }
      );
  }

  doLogout() {
    // console.log('authenticationService.doLogout()');
    if (this.session.isActive()) {
      this.httpClient.put(Constants.URL.LOGOUT, null).subscribe();
      this.session.setSessionId(null);
      this.session.setMenus([]);
      console.log('----- Logout Successful -----');
    }
  }


}
