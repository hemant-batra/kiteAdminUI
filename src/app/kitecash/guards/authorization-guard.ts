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
    console.log('Session active: ' + this.fs.session.isActive());
    if (this.fs.session.isActive()) {
      this.fs.title.init(this.fs.constants.getMiscellaneousConstants().PageTitle.NULL);
    } else {
      this.router.navigate(['unauthorized']);
    }
    return true;
  }
}
