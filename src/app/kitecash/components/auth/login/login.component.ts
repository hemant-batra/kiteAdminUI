import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {paths, roles} from '../../../constants/pages';
import {isUndefined} from 'util';
import {Observable} from 'rxjs/Observable';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('glyphicon') glyphicon: ElementRef;

  loginForm: FormGroup;
  messageClass: string;

  constructor (public fs: FactoryService,
              private router: Router,
              private httpClient: HttpClient) {}

  constants = this.fs.constants.getLoginConstants();
  validator = this.fs.validator.getLoginValidations();

  ngOnInit() {
    this.messageClass = 'errorMessage';
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.pattern(this.constants.RegularExpression.EMAIL_ID)]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const formGroup = new FormGroup({
      'identifier': new FormGroup({
        'idType': new FormControl('PHONE'),
        'idValue': new FormControl('9873009342', [Validators.required, Validators.pattern(this.constants.RegularExpression.EMAIL_ID)]),
      }),
      'password': new FormControl('Admpass1#', Validators.required)
    });
    this.messageClass = 'errorMessage';
    this.startSpinner();
    this.doLogin(formGroup.getRawValue()).subscribe(
      response =>  {
        this.stopSpinner();
        if (response === null) {
          this.router.navigate(['admin']);
        } else {
          this.loginForm.reset();
          this.loginForm.setErrors({'serverMessage': response});
        }
      },
      error => {
        this.stopSpinner();
        this.loginForm.reset();
        this.loginForm.setErrors({'serverMessage': error});
      }
    );
  }

  private doLogin(jsObj) {
    return this.httpClient.post(this.constants.URL.LOGIN, jsObj)
      .map(
        response => {
          const additionalInfo = response['additionalInfo'];
          const userRole = additionalInfo.userRole;
          this.fs.data.setUserRole(userRole);
          this.fs.navigator.getSideMenu().setContents(roles[userRole].map(
            role => paths.find(
              path => path.code === role.code
            )
          ));
          if (!this.fs.navigator.getSideMenu().hasContents()) {
            return this.constants.Message.NO_MENU_FOUND;
          }
          this.fs.session.setSessionId(additionalInfo.sessionId);
          return null;
        }
      )
      .catch(
        error => {
          try {
            if (isUndefined(error['error'].errorList)) {
              return Observable.throw(this.fs.constants.getMiscellaneousConstants().Message.NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            return Observable.throw(this.fs.constants.getMiscellaneousConstants().Message.INTERNAL_SERVER_ERROR);
          }
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
    this.messageClass = 'infoMessage';
    this.loginForm.reset();
    this.loginForm.setErrors({'serverMessage': this.constants.Message.FORGOT_PASSWORD_EMAIL_SENT});
  }
}
