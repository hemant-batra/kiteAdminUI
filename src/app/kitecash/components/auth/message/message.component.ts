import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  errorMessage: string;
  constructor(private activatedRoute: ActivatedRoute,
              public dataService: DataService) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data: Data) =>  {
        this.errorMessage = data['message'];
      }
    );
  }

}
