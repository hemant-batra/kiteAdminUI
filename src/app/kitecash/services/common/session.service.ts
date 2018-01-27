import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {

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
}
