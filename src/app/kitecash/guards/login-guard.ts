import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {FactoryService} from '../services/common/factory.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor (public fs: FactoryService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('LoginGuard ' + this.fs.session.isActive());
    if (this.fs.session.isActive()) {
      this.fs.session.logout();
      this.router.navigate(['unauthorized']);
    }
    return true;
  }

}
