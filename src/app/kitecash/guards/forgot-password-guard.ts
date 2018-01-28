import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SessionService} from '../services/common/session.service';
import {DataService} from '../services/common/data.service';

@Injectable()
export class ForgotPasswordGuard implements CanActivate {

  constructor (private sessionService: SessionService,
               private dataService: DataService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('ForgotPasswordGuard ' + this.sessionService.getSessionId());
    if (this.sessionService.isActive()) {
      console.log('session is active');
      this.router.navigate(['unauthorized']);
    }
    if (this.dataService.getUserName() === null) {
      console.log('username is null');
      this.router.navigate(['unauthorized']);
    }
    return true;
  }

}
