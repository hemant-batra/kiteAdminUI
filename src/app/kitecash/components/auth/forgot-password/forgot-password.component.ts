import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor (public fs: FactoryService,
              private router: Router) {}

  ngOnInit() {
    console.log('Back button pressed: ' + this.fs.navigator.BrowserBackButton.isPressed());
    console.log('Username is null: ' + this.fs.data.getUserName() === null);
    if (this.fs.navigator.BrowserBackButton.isPressed() || this.fs.data.getUserName() === null) {
      this.router.navigate(['unauthorized']);
    }
  }
}
