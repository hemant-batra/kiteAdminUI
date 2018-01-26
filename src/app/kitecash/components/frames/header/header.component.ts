import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {SessionService} from '../../../services/common/session.service';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public sessionService: SessionService,
              public dataService: DataService) {}

  changePassword() {
    const activatedMenu = this.sessionService.getActivatedMenu();
    if (activatedMenu !== null) {
      activatedMenu.style.setProperty('height', '0px');
      activatedMenu.style.setProperty('z-index', '-1');
    }
    this.sessionService.allowNavigation();
    this.router.navigate(['/changePassword']);
  }

  logout() {
    this.authenticationService.doLogout();
    this.router.navigate(['/logout']);
  }
}
