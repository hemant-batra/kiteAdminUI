import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '../services/common/session.service';
import {AuthenticationService} from '../services/authentication.service';
import {TitleService} from '../services/common/title.service';
import {Constants} from '../constants/constants';

@Injectable()
export class PageGuard implements CanActivate, CanActivateChild {

  constructor (private router: Router,
               private session: SessionService,
               private authenticationService: AuthenticationService,
               private titleService: TitleService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('PageGuard.canActivate()');
    return this.canActivateChild(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('PageGuard.canActivateChild()');
    if (!this.session.isActive()) {
      /* navigate to the login screen when the session
         is inactive irrespective of the page URL that
         the user is trying to open. This includes:
         1) Opening a valid or invalid URL in the URL bar
         2) Pressing the refresh button
         3) Opeing the same page in a new window (CTRL + N)
       */
      console.log('Session is inactive');
      this.router.navigate(['/login']);
    } else if (!this.session.isNavigationAllowed()) {
      /* navigate to the invalid access screen if the
         session is active and the user presses the back
         button
       */
      console.log('Browser back button is not allowed');
      this.authenticationService.doLogout();
      this.router.navigate(['/invalid']);
    } else {
      this.session.disallowNavigation();
      this.titleService.init(Constants.PageTitles.NULL);
    }
    return true;
  }
}