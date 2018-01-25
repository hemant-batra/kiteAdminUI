import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../../services/common/title.service';
import {Constants} from '../../../constants/constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../services/common/http.service';
import {ValidationService} from "../../../services/common/validation.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  c = Constants;

  changePasswordForm: FormGroup;

  constructor(private title: TitleService,
              private httpService: HttpService,
              public validationService: ValidationService) { }

  ngOnInit() {
    this.title.init('CHANGE_PASSWORD');
    this.changePasswordForm = new FormGroup({
      'oldPassword': new FormControl(null, [Validators.required]),
      'newPassword': new FormControl(null, [Validators.required]),
      'confirmNewPassword': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.changePasswordForm.get('newPassword').value !== this.changePasswordForm.get('confirmNewPassword').value) {
      this.title.setError(Constants.Messages.NEW_AND_CONFIRM_NEW_PASSWORDS_MISMATCH);
    } else {
      const form = new FormGroup({
        'oldPassword': this.changePasswordForm.get('oldPassword'),
        'newPassword': this.changePasswordForm.get('newPassword')
      });
      this.title.showSpinner();
      this.httpService.post(Constants.URL.CHANGE_PASSWORD, form).subscribe(
        response => { this.title.setSuccess(Constants.Messages.PASSWORD_CHANGE_SUCCESSFUL), this.changePasswordForm.reset(); },
        error => { this.title.setError(error), this.changePasswordForm.reset(); }
      );
    }
  }

}
