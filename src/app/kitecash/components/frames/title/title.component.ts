import {Component, OnDestroy, OnInit} from '@angular/core';
import {TitleService} from '../../../services/common/title.service';
import {Subscription} from 'rxjs/Subscription';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnDestroy {

  constructor (private titleService: TitleService,
               public dataService: DataService) {}

  status: number;
  statusText: string;
  title: string;

  private statusSubscription: Subscription;
  private statusTextSubscription: Subscription;
  private titleSubscription: Subscription;

  ngOnInit() {
    this.statusSubscription = this.titleService.emitter.status.subscribe(
      status => this.status = status
    );
    this.statusTextSubscription = this.titleService.emitter.statusText.subscribe(
      statusText => this.statusText = statusText
    );
    this.titleSubscription = this.titleService.emitter.title.subscribe(
      title => this.title = title
    );
  }

  ngOnDestroy() {
    const arr = [this.statusSubscription, this.statusTextSubscription, this.titleSubscription];
    for (const subscription of arr) {
        if (subscription != null) {
          subscription.unsubscribe();
        }
    }
  }
}
