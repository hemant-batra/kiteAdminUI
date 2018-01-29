import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {NavigationService} from './navigation.service';

@Injectable()
export class SessionService {

  constructor (private httpClient: HttpClient,
               private dataService: DataService,
               private navigationService: NavigationService) {}

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
    this.setSessionId(null);
    this.navigationService.setMenus([]);
    this.httpClient.put(this.dataService.urls().LOGOUT, null).subscribe();
  }
}
