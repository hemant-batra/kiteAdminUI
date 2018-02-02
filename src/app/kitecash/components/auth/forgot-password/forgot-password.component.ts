import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FactoryService} from '../../../services/common/factory.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor (public fs: FactoryService,
               private router: Router,
               private activatedRoute: ActivatedRoute) {}

  constants = this.fs.constants.getForgotPasswordConstants();
  validator = this.fs.validator.getForgotPasswordValidations();

  ngOnInit() {
    this.activatedRoute.url.forEach(
      urlSegment => {
        if (urlSegment[0].path === 'validToken') {
          this.fs.data.setMessage(this.fs.constants.getMessageConstants().Message.PASSWORD_CHANGED);
          this.fs.navigator.showMessage(this.router);
        } else {
          this.fs.data.setMessage(this.fs.constants.getMessageConstants().Message.PAGE_NOT_FOUND);
          this.fs.navigator.showMessage(this.router);
        }
      }
    );
    this.forgotPasswordForm = new FormGroup({
      'newPassword': new FormControl(null, [Validators.required, Validators.pattern(this.constants.RegularExpression.PASSWORD)]),
      'confirmNewPassword': new FormControl(null, [Validators.required, Validators.pattern(this.constants.RegularExpression.PASSWORD)])
    });
  }

  submit() {
    if (this.forgotPasswordForm.get('newPassword').value !== this.forgotPasswordForm.get('confirmNewPassword').value) {
      this.forgotPasswordForm.reset();
      this.forgotPasswordForm.setErrors({'serverMessage': this.constants.Message.NEW_AND_CONFIRM_NEW_PASSWORDS_MISMATCH});
      return;
    }
    this.fs.data.setMessage(this.fs.constants.getMessageConstants().Message.PASSWORD_CHANGED);
    this.fs.navigator.showMessage(this.router);
  }
}
