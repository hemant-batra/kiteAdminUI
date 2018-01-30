import {Component, OnInit} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor (public fs: FactoryService) {}

  ngOnInit() {
    this.fs.title.init('MY_PROFILE');
  }

}
