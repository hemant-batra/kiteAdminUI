import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from './constants.service';
import {NavigationService} from './navigation.service';

@Injectable()
export class SessionService {

  constructor (private constantsService: ConstantsService,
               private navigationService: NavigationService,
               private httpClient: HttpClient) {}

  private sessionId: string = null;

  isActive() {
    return this.sessionId != null;
  }

  getSessionId() {
    return this.sessionId;
  }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId;
  }

  logout() {
    if (this.isActive()) {
      this.setSessionId(null);
      this.navigationService.getSideMenu().setContents([]);
      this.navigationService.getHeaderMenu().reset();
      this.httpClient.put(this.constantsService.getMiscellaneousConstants().URL.LOGOUT, null).subscribe();
    }
  }
}
