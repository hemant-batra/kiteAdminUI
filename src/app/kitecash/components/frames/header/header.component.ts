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

  invertImage(imageId: string, invert: boolean) {
    this[imageId].nativeElement.setAttribute('src', this.fs.data.getImageSrc(imageId + (invert ? '_inverted' : '')));
  }
}
