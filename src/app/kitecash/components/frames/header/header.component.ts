import {Component, ElementRef, ViewChild} from '@angular/core';
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

  @ViewChild('myProfile') myProfile: ElementRef;
  @ViewChild('changePassword') changePassword: ElementRef;
  @ViewChild('logout') logout: ElementRef;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              public sessionService: SessionService,
              public dataService: DataService) {}

  navigate(path: string) {
    const activatedMenu = this.sessionService.getActivatedMenu();
    if (activatedMenu !== null) {
      activatedMenu.style.setProperty('height', '0px');
      activatedMenu.style.setProperty('z-index', '-1');
    }
    this.sessionService.allowNavigation();
    this.router.navigate([path]);
  }

  logOut() {
    this.authenticationService.doLogout();
    this.router.navigate(['/logout']);
  }

  invertImage(imageId: string) {
      this[imageId].nativeElement.setAttribute('src', this.dataService.getImageSrc(imageId + '_inverted'));
    }

  restoreImage(imageId: string) {
    this[imageId].nativeElement.setAttribute('src', this.dataService.getImageSrc(imageId));
  }
}
