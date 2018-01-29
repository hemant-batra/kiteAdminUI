import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) {}

  ngOnInit() {
    if (this.dataService.getUserName() === null) {
      this.router.navigate(['unauthorized']);
    }
  }
}
