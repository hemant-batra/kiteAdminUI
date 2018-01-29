import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {TitleService} from '../services/common/title.service';
import {SessionService} from '../services/common/session.service';
import {DataService} from '../services/common/data.service';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {

  constructor (private router: Router,
               private titleService: TitleService,
               private sessionService: SessionService,
               private dataService: DataService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AdminGuard ' + this.sessionService.getSessionId());
    if (!this.sessionService.isActive()) {
      /* navigate to the login screen when the session
         is inactive irrespective of the page URL that
         the user is trying to open. This includes:
         1) Opening a valid or invalid URL in the URL bar
         2) Pressing the refresh button
         3) Opening the same page in a new window (CTRL + N)
       */
      console.log('session is inactive');
      this.router.navigate(['unauthorized']);
    } else {
      console.log('session is active and navigation is allowed');
      this.titleService.init(this.dataService.pageTitles().NULL);
    }
    return true;
  }
}
