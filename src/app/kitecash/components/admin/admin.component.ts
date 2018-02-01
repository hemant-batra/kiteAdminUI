import {Component} from '@angular/core';
import {FactoryService} from '../../services/common/factory.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

 constructor (public fs: FactoryService) {}

 c = this.fs.constants.getAdminConstants();

}
