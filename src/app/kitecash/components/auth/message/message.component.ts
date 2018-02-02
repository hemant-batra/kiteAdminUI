import {Component, OnInit} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor (public fs: FactoryService,
               private router: Router) {}

  ngOnInit() {
    if (this.fs.data.getMessage() === null) {
      this.fs.navigator.unauthorize(this.router);
    }
  }

}
