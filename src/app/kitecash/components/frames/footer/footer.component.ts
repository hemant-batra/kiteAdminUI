import {Component} from '@angular/core';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public dataService: DataService) {}
}
