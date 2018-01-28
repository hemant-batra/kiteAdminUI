import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../../../services/common/session.service';
import {DataService} from '../../../services/common/data.service';
import {NavigationService} from '../../../services/common/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('myProfile') myProfile: ElementRef;
  @ViewChild('changePassword') changePassword: ElementRef;
  @ViewChild('logout') logout: ElementRef;

  constructor(public router: Router,
              public sessionService: SessionService,
              public dataService: DataService,
              public navigationService: NavigationService) {}

  navigate(path: string) {
    const activatedMenu = this.navigationService.getActivatedMenu();
    if (activatedMenu !== null) {
      activatedMenu.style.setProperty('height', '0px');
      activatedMenu.style.setProperty('z-index', '-1');
    }
    this.navigationService.allowNavigation();
    this.router.navigate([path]);
  }

  invertImage(imageId: string) {
      this[imageId].nativeElement.setAttribute('src', this.dataService.getImageSrc(imageId + '_inverted'));
    }

  restoreImage(imageId: string) {
    this[imageId].nativeElement.setAttribute('src', this.dataService.getImageSrc(imageId));
  }
}
