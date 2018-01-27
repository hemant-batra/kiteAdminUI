import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../../services/common/title.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../services/common/http.service';
import {ValidationService} from '../../../services/common/validation.service';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  constructor(private titleService: TitleService,
              private httpService: HttpService,
              public validationService: ValidationService,
              public dataService: DataService) {}

  ngOnInit() {
    this.titleService.init('CHANGE_PASSWORD');
    this.changePasswordForm = new FormGroup({
      'oldPassword': new FormControl(null, [Validators.required]),
      'newPassword': new FormControl(null, [Validators.required]),
      'confirmNewPassword': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.changePasswordForm.get('newPassword').value !== this.changePasswordForm.get('confirmNewPassword').value) {
      this.titleService.setError(this.dataService.messages().NEW_AND_CONFIRM_NEW_PASSWORDS_MISMATCH);
    } else {
      const form = new FormGroup({
        'oldPassword': this.changePasswordForm.get('oldPassword'),
        'newPassword': this.changePasswordForm.get('newPassword')
      });
      this.titleService.showSpinner();
      this.httpService.post(this.dataService.urls().CHANGE_PASSWORD, form).subscribe(
        () => {
          const message = this.dataService.messages().PASSWORD_CHANGE_SUCCESSFUL;
          this.titleService.setSuccess(message);
          this.changePasswordForm.reset();
        },
        error => {
          this.titleService.setError(error);
          this.changePasswordForm.reset();
        }
      );
    }
  }

}
