import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '../services/common/session.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor (private router: Router,
               private sessionService: SessionService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('LoginGuard ' + this.sessionService.isActive());
    if (this.sessionService.isActive()) {
      this.sessionService.logout();
      this.router.navigate(['unauthorized']);
    }
    return true;
  }

}
