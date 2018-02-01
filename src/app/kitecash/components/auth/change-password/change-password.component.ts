import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  constructor (public fs: FactoryService) {}

  c = this.fs.constants.getChangePasswordConstants();
  v = this.fs.validator.getChangePasswordValidations();
  g = this.fs.validator.getGenericValidations();

  ngOnInit() {
    this.fs.title.init(this.c.PageTitle.CHANGE_PASSWORD);
    this.changePasswordForm = new FormGroup({
      'oldPassword': new FormControl(null, [Validators.required]),
      'newPassword': new FormControl(null, [Validators.required, Validators.pattern(this.c.RegularExpression.PASSWORD)]),
      'confirmNewPassword': new FormControl(null, [Validators.required, Validators.pattern(this.c.RegularExpression.PASSWORD)])
    });
  }

  onSubmit() {
    if (this.changePasswordForm.get('newPassword').value !== this.changePasswordForm.get('confirmNewPassword').value) {
      this.fs.title.setError(this.c.Message.NEW_AND_CONFIRM_NEW_PASSWORDS_MISMATCH);
    } else {
      const form = new FormGroup({
        'oldPassword': this.changePasswordForm.get('oldPassword'),
        'newPassword': this.changePasswordForm.get('newPassword')
      });
      this.fs.title.showSpinner();
      this.fs.http.post(this.c.URL.CHANGE_PASSWORD, form).subscribe(
        () => {
          const message = this.c.Message.PASSWORD_CHANGE_SUCCESSFUL;
          this.fs.title.setSuccess(message);
          this.changePasswordForm.reset();
        },
        error => {
          this.fs.title.setError(error);
          this.changePasswordForm.reset();
        }
      );
    }
  }

}
