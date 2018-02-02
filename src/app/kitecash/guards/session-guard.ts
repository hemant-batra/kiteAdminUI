import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {FactoryService} from '../services/common/factory.service';

@Injectable()
export class SessionGuard implements CanActivateChild {

  constructor (public fs: FactoryService,
               private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.fs.session.isActive()) {
      console.log('session is not active');
      this.fs.navigator.unauthorize(this.router);
    }
    return true;
  }
}
