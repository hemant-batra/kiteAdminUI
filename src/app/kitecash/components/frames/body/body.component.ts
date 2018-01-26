import {Component} from '@angular/core';
import {SessionService} from '../../../services/common/session.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']/*,
  animations: [trigger('subMenuState', [
    state('hide', style({ visibility: 'hidden', height: '0px' })),
    state('show', style({ visibility: 'visible', height: '100px' })),
    transition('hide => show', animate(500)),
    transition('show => hide', animate(500))
  ])]*/
})
export class BodyComponent {

  constructor(public sessionService: SessionService) {}

  menuClicked(menuCode: string, event: MouseEvent) {
    this.sessionService.allowNavigation();
    if (this.sessionService.getActivatedMenu() !== null) {
      this.sessionService.getActivatedMenu().style.setProperty('height', '0px');
      this.sessionService.getActivatedMenu().style.setProperty('z-index', '-1');
    }
    this.sessionService.setActivatedMenu(<HTMLDivElement>(event['target']['nextElementSibling']));
    this.sessionService.getActivatedMenu().style.setProperty('height', this.sessionService.getActivatedMenu().children[0].clientHeight + 'px');
    setTimeout(() => {
      this.sessionService.getActivatedMenu().style.setProperty('z-index', '0');
    }, 500);
  }
}
