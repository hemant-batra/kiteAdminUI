import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Constants} from '../../../constants/constants';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  errorMessage: string;
  loginLabel = Constants.ButtonLabels.LOGIN;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data: Data) =>  {
        this.errorMessage = data['message'];
      }
    );
  }

}
