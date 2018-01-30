import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {FactoryService} from '../services/common/factory.service';

@Injectable()
export class LogoutGuard implements CanActivate {

  constructor (public fs: FactoryService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('LogoutGuard ' + this.fs.session.isActive());
    if (this.fs.session.isActive()) {
      this.fs.session.logout();
    } else {
      this.router.navigate(['unauthorized']);
    }
    return true;
  }
}
