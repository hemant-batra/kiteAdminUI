import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnDestroy {

  constructor (public fs: FactoryService) {}

  c = this.fs.constants.getTitleConstants();

  status: number;
  statusText: string;
  title: string;

  private statusSubscription: Subscription;
  private statusTextSubscription: Subscription;
  private titleSubscription: Subscription;

  ngOnInit() {
    this.statusSubscription = this.fs.title.emitter.status.subscribe(
      status => this.status = status
    );
    this.statusTextSubscription = this.fs.title.emitter.statusText.subscribe(
      statusText => this.statusText = statusText
    );
    this.titleSubscription = this.fs.title.emitter.title.subscribe(
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
