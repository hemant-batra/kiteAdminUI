import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {NavigationService} from '../services/common/navigation.service';
import {AuthenticationService} from '../services/authentication.service';
import {TitleService} from '../services/common/title.service';
import {SessionService} from '../services/common/session.service';
import {DataService} from '../services/common/data.service';

@Injectable()
export class PageGuard implements CanActivate, CanActivateChild {

  constructor (private router: Router,
               private navigationService: NavigationService,
               private authenticationService: AuthenticationService,
               private titleService: TitleService,
               private sessionService: SessionService,
               private dataService: DataService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.sessionService.isActive()) {
      /* navigate to the login screen when the session
         is inactive irrespective of the page URL that
         the user is trying to open. This includes:
         1) Opening a valid or invalid URL in the URL bar
         2) Pressing the refresh button
         3) Opening the same page in a new window (CTRL + N)
       */
      console.log('Session is inactive');
      this.router.navigate(['/enter-username']);
    } else if (!this.navigationService.isNavigationAllowed()) {
      /* navigate to the invalid access screen if the
         session is active and the user presses the back
         button
       */
      console.log('Browser back button is not allowed');
      this.authenticationService.doLogout();
      this.router.navigate(['/invalid']);
    } else {
      this.navigationService.disallowNavigation();
      this.titleService.init(this.dataService.getPageTitle('NULL'));
    }
    return true;
  }
}
