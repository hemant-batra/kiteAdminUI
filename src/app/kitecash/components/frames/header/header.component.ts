import {Router} from '@angular/router';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';
import {HeaderMenu} from '../../../services/common/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerMenu = HeaderMenu;

  @ViewChild('myProfile') myProfile: ElementRef;
  @ViewChild('myProfile_inverted') myProfile_inverted: ElementRef;
  @ViewChild('changePassword') changePassword: ElementRef;
  @ViewChild('changePassword_inverted') changePassword_inverted: ElementRef;
  @ViewChild('logout') logout: ElementRef;
  @ViewChild('logout_inverted') logout_inverted: ElementRef;

  constructor (public fs: FactoryService,
               public router: Router) {
    this.fs.navigator.setFrozenHeaderMenu(HeaderMenu.NONE, null, null);
  }

  activateMenu(headerMenu: HeaderMenu) {
    if (this.fs.navigator.getFrozenHeaderMenu() === headerMenu) {
      return;
    }
    this.fs.navigator.deactivateMenu();
    switch (headerMenu) {
      case HeaderMenu.MY_PROFILE: this.fs.navigator.setFrozenHeaderMenu(headerMenu, this.myProfile, this.myProfile_inverted); break;
      case HeaderMenu.CHANGE_PASSWORD: this.fs.navigator.setFrozenHeaderMenu(headerMenu, this.changePassword, this.changePassword_inverted); break;
      case HeaderMenu.LOGOUT: this.fs.navigator.setFrozenHeaderMenu(headerMenu, this.logout, this.logout_inverted); break;
    }
  }

  toggleImage(imageId: string) {
    console.log(this.fs.navigator.getFrozenHeaderMenu());
    switch (this.fs.navigator.getFrozenHeaderMenu()) {
      case HeaderMenu.NONE: break;
      case HeaderMenu.MY_PROFILE: if (imageId === 'myProfile') { return; } break;
      case HeaderMenu.CHANGE_PASSWORD: if (imageId === 'changePassword') { return; } break;
      case HeaderMenu.LOGOUT: if (imageId === 'logout') { return; } break;
    }
    const imageStyle = this[imageId].nativeElement.style;
    const imageStyle_inverted = this[imageId + '_inverted'].nativeElement.style;
    if (imageStyle.display === 'none') {
      imageStyle.display = 'block';
      imageStyle_inverted.display = 'none';
    } else {
      imageStyle.display = 'none';
      imageStyle_inverted.display = 'block';
    }
  }
}
