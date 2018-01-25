import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Constants} from '../../../../constants/constants';
import {ValidationService} from '../../../../services/common/validation.service';
import {SessionService} from '../../../../services/common/session.service';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../../../services/authentication.service";
import {TitleService} from "../../../../services/common/title.service";

@Component({
  selector: 'app-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrls: ['./enter-password.component.css']
})
export class EnterPasswordComponent implements OnInit {

  @ViewChild('glyphicon') glyphicon: ElementRef;

  c = Constants;

  enterPasswordForm: FormGroup;

  constructor(public validationService: ValidationService,
              private router: Router,
              private session: SessionService,
              private authenticationService: AuthenticationService,
              private title: TitleService) {}

  ngOnInit() {
    if (this.session.getUserName() === null) {
      this.router.navigate(['']);
    }
    this.enterPasswordForm = new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.pattern(new RegExp(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,160})$/))])
    });
  }

  trim(username: string) {
    if (username === null) {
      return null;
    }
    return username.length >= 14
      ? username.substring(0, 14) + '...'
      : username;
  }

  onSubmit() {
    const formGroup = new FormGroup({
      'identifier': new FormGroup({
        'idType': new FormControl('PHONE'),
        'idValue': new FormControl('9873009342', [Validators.required, Validators.pattern(new RegExp(/^[0-9]{10,10}$/))]),
      }),
      'password': new FormControl('Admpass1#', Validators.required)
    });

    const classList = this.glyphicon.nativeElement.classList;
    classList.remove('glyphicon-log-in');
    classList.add('glyphicon-refresh', 'glyphicon-spin');
    this.authenticationService.doLogin(formGroup.getRawValue()).subscribe(
      (response) =>  this.handleResponse(response),
      (error) => this.handleResponse(error)
    );
  }

  handleResponse(response) {
    const classList = this.glyphicon.nativeElement.classList;
    classList.remove('glyphicon-refresh', 'glyphicon-spin');
    classList.add('glyphicon-log-in');
    if (response === null) {
      this.session.allowNavigation();
      this.router.navigate(['admin']);
    } else {
      this.title.setError(response);
      this.enterPasswordForm.reset();
    }
  }

  forgotPassword() {
    this.router.navigate(['forgotPassword']);
  }
}
