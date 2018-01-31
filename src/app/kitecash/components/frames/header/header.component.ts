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
    this.fs.navigator.HeaderMenu.reset();
  }

  activateMenu(imageId: string) {
    if (!this.fs.navigator.HeaderMenu.isActive(imageId)) {
      this.fs.navigator.SideMenu.deactivate();
      this.fs.navigator.HeaderMenu.activate({
        imageId: imageId,
        image: this.image(imageId),
        image_inverted: this.image(imageId + '_inverted')
      });
    }
  }

  toggleImage(imageId: string) {
    if (!this.fs.navigator.HeaderMenu.isActive(imageId)) {
      const imageClassList = this.image(imageId).classList;
      const invertedImageClassList = this.image(imageId + '_inverted').classList;
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

  private image(imageId): HTMLImageElement {
    return <HTMLImageElement>document.getElementById(imageId);
  }
}
