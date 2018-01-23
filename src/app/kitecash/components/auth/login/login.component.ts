import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Constants} from '../../../constants/constants';
import {UtilityService} from '../../../services/common/utility.service';
import {Router} from '@angular/router';
import {TitleService} from '../../../services/common/title.service';
import {SessionService} from '../../../services/common/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('glyphicon') glyphicon: ElementRef;

  c = Constants;

  loginForm: FormGroup;

  constructor(public authenticationService: AuthenticationService,
              public util: UtilityService,
              private router: Router,
              private title: TitleService,
              private session: SessionService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'identifier': new FormGroup({
        'idType': new FormControl('PHONE'),
        'idValue': new FormControl('9873009342', [Validators.required, Validators.pattern(new RegExp(/^[0-9]{10,10}$/))]),
      }),
      'password': new FormControl('Admpass1#', Validators.required)
    });
  }
  // RegEx for password new RegExp(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/)
  // Login: 7011932844
  // Password: Kite@1357#

  onSubmit() {
    const classList = this.glyphicon.nativeElement.classList;
    classList.remove('glyphicon-log-in');
    classList.add('glyphicon-refresh', 'glyphicon-spin');
    this.authenticationService.doLogin(this.loginForm.getRawValue()).subscribe(
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
      this.loginForm.reset();
    }
  }

}
