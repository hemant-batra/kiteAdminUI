import {Injectable} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '../services/common/session.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor (private authenticationService: AuthenticationService,
               private sessionService: SessionService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    /*
      perform logout and show the session expiry page when
      back button is pressed on the admin page
     */
    if (this.sessionService.isActive()) {
      this.authenticationService.doLogout();
      this.router.navigate(['/invalid']);
    }
    return true;
  }

}
