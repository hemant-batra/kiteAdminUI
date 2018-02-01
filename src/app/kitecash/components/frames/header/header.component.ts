import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public fs: FactoryService,
               public router: Router) {
    this.fs.navigator.getHeaderMenu().reset();
  }

  constants = this.fs.constants.getHeaderConstants();

  activateMenu(imageId: string) {
    if (!this.fs.navigator.getHeaderMenu().isActive(imageId)) {
      this.fs.navigator.getSideMenu().deactivate();
      this.fs.navigator.getHeaderMenu().activate({
        imageId: imageId,
        image: <HTMLImageElement>document.getElementById(imageId),
        image_inverted: <HTMLImageElement>document.getElementById(imageId + '_INVERTED')
      });
    }
  }

  toggleImage(imageId: string) {
    if (!this.fs.navigator.getHeaderMenu().isActive(imageId)) {
      const imageClassList = document.getElementById(imageId).classList;
      const invertedImageClassList = document.getElementById(imageId + '_INVERTED').classList;
      if (imageClassList.contains('hide')) {
        imageClassList.remove('hide');
        imageClassList.add('show');
        invertedImageClassList.remove('show');
        invertedImageClassList.add('hide');
      } else {
        imageClassList.remove('show');
        imageClassList.add('hide');
        invertedImageClassList.remove('hide');
        invertedImageClassList.add('show');
      }
    }
  }
}
