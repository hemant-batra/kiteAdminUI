import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Constants} from '../../../../constants/constants';
import {ValidationService} from '../../../../services/common/validation.service';
import {SessionService} from '../../../../services/common/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter-username',
  templateUrl: './enter-username.component.html',
  styleUrls: ['./enter-username.component.css']
})
export class EnterUsernameComponent implements OnInit {

  c = Constants;

  enterUserNameForm: FormGroup;

  constructor(public validationService: ValidationService,
              private router: Router,
              private session: SessionService) {}

  ngOnInit() {
    this.enterUserNameForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.pattern(new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))])
    });
  }

  onSubmit() {
    this.session.setUserName(this.enterUserNameForm.get('userName').value);
    this.router.navigate(['login']);
  }
}
