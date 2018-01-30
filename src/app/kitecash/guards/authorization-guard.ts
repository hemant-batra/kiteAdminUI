import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {FactoryService} from '../services/common/factory.service';

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {

  constructor (public fs: FactoryService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthorizationGuard ' + this.fs.session.isActive());
    if (!this.fs.session.isActive()) {
      /* navigate to the login screen when the session
         is inactive irrespective of the page URL that
         the user is trying to open. This includes:
         1) Opening a valid or invalid URL in the URL bar
         2) Pressing the refresh button
         3) Opening the same page in a new window (CTRL + N)
       */
      this.router.navigate(['unauthorized']);
    } else {
      this.fs.title.init(this.fs.data.PageTitle.NULL);
    }
    return true;
  }
}
