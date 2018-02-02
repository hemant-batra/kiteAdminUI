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
               public router: Router) {}

  constants = this.fs.constants.getForgotPasswordConstants();

  ngOnInit() {
    if (this.fs.navigator.getBrowserBackButton().isPressed()) {
      this.router.navigate(['unauthorized']);
    }
  }

  submit() {

  }
}
