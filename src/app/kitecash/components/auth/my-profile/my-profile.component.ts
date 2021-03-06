import {Component, OnInit} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor (public fs: FactoryService) {}

  constants = this.fs.constants.getMyProfileConstants();

  ngOnInit() {
    this.fs.title.init(this.constants.PageTitle.MY_PROFILE);
  }

}
