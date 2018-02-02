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
               private router: Router) {
    this.fs.session.logout();
  }

  ngOnInit () {
    this.fs.data.setMessage(this.fs.constants.getMessageConstants().Message.LOGOUT_MESSAGE);
    this.fs.navigator.showMessage(this.router);
  }

}
