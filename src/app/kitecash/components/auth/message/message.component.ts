import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  errorMessage: string;
  constructor (public fs: FactoryService,
               private activatedRoute: ActivatedRoute) {}

  constants = this.fs.constants.getMessageConstants();

  ngOnInit() {
    this.fs.navigator.getBrowserBackButton().clearPressed();
    this.activatedRoute.data.subscribe(
      (data: Data) =>  {
        this.errorMessage = this.constants.Message[data['messageCode']];
      }
    );
  }

}
