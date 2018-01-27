import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/common/data.service';
import {TitleService} from '../../../services/common/title.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(public dataService: DataService,
              private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.init('MY_PROFILE');
  }

}
