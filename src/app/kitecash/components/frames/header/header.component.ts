import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Constants} from '../../../constants/constants';
import {Router} from '@angular/router';
import {SessionService} from '../../../services/common/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  c = Constants;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public session: SessionService) {}

  changePassword() {
    this.session.activatedMenu.style.setProperty('height', '0px');
    this.session.activatedMenu.style.setProperty('z-index', '-1');
    this.session.allowNavigation();
    this.router.navigate(['/changePassword']);
  }

  logout() {
    // console.log('HeaderComponent.logout()');
    this.authenticationService.doLogout();
    this.router.navigate(['/logout']);
  }
}
