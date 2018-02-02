import {Component, OnInit} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor (public fs: FactoryService,
               private router: Router) {}

  ngOnInit() {
    this.fs.session.logout();
    this.fs.data.setMessage(this.fs.constants.getMessageConstants().Message.LOGOUT_MESSAGE);
    this.fs.navigator.showMessage(this.router);
  }

}
