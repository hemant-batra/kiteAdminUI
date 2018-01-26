import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../../services/common/validation.service';
import {SessionService} from '../../../services/common/session.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('glyphicon') glyphicon: ElementRef;

  loginForm: FormGroup;

  constructor(private router: Router,
              public dataService: DataService,
              private sessionService: SessionService,
              public validationService: ValidationService,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.pattern(this.dataService.getRegEx('EMAIL_ID'))]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const formGroup = new FormGroup({
      'identifier': new FormGroup({
        'idType': new FormControl('PHONE'),
        'idValue': new FormControl('9873009342', [Validators.required, Validators.pattern(new RegExp(/^[0-9]{10,10}$/))]),
      }),
      'password': new FormControl('Admpass1#', Validators.required)
    });

    this.startSpinner();
    this.authenticationService.doLogin(formGroup.getRawValue()).subscribe(
      (response) =>  {
        this.stopSpinner();
        this.sessionService.allowNavigation();
        this.router.navigate(['admin']);
      },
      (error) => {
        this.stopSpinner();
        this.loginForm.reset();
        this.loginForm.setErrors({'serverError': error});
      }
    );
  }

  startSpinner() {
    const classList = this.glyphicon.nativeElement.classList;
    classList.remove('glyphicon-log-in');
    classList.add('glyphicon-refresh', 'glyphicon-spin');
  }

  stopSpinner() {
    const classList = this.glyphicon.nativeElement.classList;
    classList.remove('glyphicon-refresh', 'glyphicon-spin');
    classList.add('glyphicon-log-in');
  }

  forgotPassword() {
    this.router.navigate(['forgotPassword']);
  }
}
