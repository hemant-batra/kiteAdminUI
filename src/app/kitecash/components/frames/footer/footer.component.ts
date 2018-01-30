import {Component} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor (public fs: FactoryService) {}
}
