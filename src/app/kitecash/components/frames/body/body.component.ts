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

  constructor(public session: SessionService) {}

  menuClicked(menuCode: string, event: MouseEvent) {
    this.session.allowNavigation();
    if (this.session.activatedMenu !== null) {
      this.session.activatedMenu.style.setProperty('height', '0px');
      this.session.activatedMenu.style.setProperty('z-index', '-1');
    }
    this.session.activatedMenu = <HTMLDivElement>(event['target']['nextElementSibling']);
    this.session.activatedMenu.style.setProperty('height', this.session.activatedMenu.children[0].clientHeight + 'px');
    setTimeout(() => {
      this.session.activatedMenu.style.setProperty('z-index', '0');
    }, 500);
  }
}
