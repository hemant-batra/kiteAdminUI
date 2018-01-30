import {Component} from '@angular/core';
import {FactoryService} from '../services/common/factory.service';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private fs: FactoryService,
               private platformLocation: PlatformLocation) {
    this.platformLocation.onPopState(() => {
      console.log('Back button is pressed');
      this.fs.navigator.setBackButtonPressed();
      this.fs.session.logout();
    });
  }
}
