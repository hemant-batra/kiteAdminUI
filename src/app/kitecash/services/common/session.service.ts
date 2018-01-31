import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {NavigationService} from './navigation.service';

@Injectable()
export class SessionService {

  constructor (private dataService: DataService,
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
      this.navigationService.SideMenu.setContents([]);
      this.navigationService.HeaderMenu.reset();
      this.httpClient.put(this.dataService.URL.LOGOUT, null).subscribe();
    }
  }
}
