import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {ValidationService} from '../../../services/common/validation.service';
import {Router} from '@angular/router';
import {DataService} from '../../../services/common/data.service';
import {NavigationService} from '../../../services/common/navigation.service';
import {SessionService} from '../../../services/common/session.service';
import {HttpClient} from '@angular/common/http';
import {paths, roles} from '../../../constants/pages';
import {isUndefined} from 'util';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('glyphicon') glyphicon: ElementRef;

  loginForm: FormGroup;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private sessionService: SessionService,
              public dataService: DataService,
              public validationService: ValidationService,
              private navigationService: NavigationService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.pattern(this.dataService.regEx().EMAIL_ID)]),
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
    this.doLogin(formGroup.getRawValue()).subscribe(
      () =>  {
        this.stopSpinner();
        this.dataService.setUserName(this.loginForm.get('userName').value);
        this.navigationService.allowNavigation();
        this.router.navigate(['admin']);
      },
      (error) => {
        this.stopSpinner();
        this.loginForm.reset();
        this.loginForm.setErrors({'serverError': error});
      }
    );
  }

  private doLogin(jsObj) {
    return this.httpClient.post(this.dataService.urls().LOGIN, jsObj)
      .map(
        (response) => {
          const additionalInfo = response['additionalInfo'];
          const userRole = additionalInfo.userRole;
          this.dataService.setUserRole(userRole);
          this.navigationService.setMenus(roles[userRole].map(
            role => paths.find(
              path => path.code === role.code
            )
          ));
          if (this.navigationService.getMenus().length === 0) {
            return this.dataService.messages().NO_MENU_FOUND;
          }
          this.sessionService.setSessionId(additionalInfo.sessionId);
          console.log('----- Login Successful -----');
          console.log('Session ID = ' + this.sessionService.getSessionId());
          return null;
        }
      )
      .catch(
        (error) => {
          try {
            if (isUndefined(error['error'].errorList)) {
              return Observable.throw(this.dataService.messages().NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            console.log('Login Error ' + err.message);
            return Observable.throw(this.dataService.messages().INTERNAL_SERVER_ERROR);
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
    this.dataService.setUserName(this.loginForm.get('userName').value);
    this.router.navigate(['forgotPassword']);
  }
}
