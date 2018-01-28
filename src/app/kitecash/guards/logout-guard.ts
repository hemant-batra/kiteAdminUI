import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '../services/common/session.service';

@Injectable()
export class LogoutGuard implements CanActivate {

  constructor (private router: Router,
               private sessionService: SessionService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('LogoutGuard ' + this.sessionService.getSessionId());
    if (this.sessionService.isActive()) {
      console.log('session is active');
      this.sessionService.logout();
    } else {
      console.log('session is inactive');
      this.router.navigate(['unauthorized']);
    }
    return true;
  }
}
