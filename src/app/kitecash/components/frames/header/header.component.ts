import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('myProfile') myProfile: ElementRef;
  @ViewChild('changePassword') changePassword: ElementRef;
  @ViewChild('logout') logout: ElementRef;

  constructor (public fs: FactoryService,
              public router: Router) {}

  prepareForNavigation() {
    const activatedMenu = this.fs.navigator.getActivatedMenu();
    if (activatedMenu !== null) {
      activatedMenu.style.setProperty('height', '0px');
      activatedMenu.style.setProperty('z-index', '-1');
    }
  }

  invertImage(imageId: string) {
      this[imageId].nativeElement.setAttribute('src', this.fs.data.getImageSrc(imageId + '_inverted'));
    }

  restoreImage(imageId: string) {
    this[imageId].nativeElement.setAttribute('src', this.fs.data.getImageSrc(imageId));
  }
}
