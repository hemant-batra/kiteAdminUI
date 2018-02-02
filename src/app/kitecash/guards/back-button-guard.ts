import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {FactoryService} from '../services/common/factory.service';

@Injectable()
export class BackButtonGuard implements CanActivate, CanActivateChild {

  constructor (public fs: FactoryService,
               private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.fs.title.init(this.fs.constants.getMiscellaneousConstants().PageTitle.NULL);
    if (this.fs.navigator.getBrowserBackButton().isPressed()) {
      console.log('back button was pressed');
      this.fs.navigator.getBrowserBackButton().clearPressed();
      this.fs.navigator.unauthorize(this.router);
    }
    return true;
  }
}
