import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../services/common/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private router: Router) {}

  ngOnInit() {
    if (this.sessionService.getUserName() === null) {
      this.router.navigate(['']);
    }
  }
}
