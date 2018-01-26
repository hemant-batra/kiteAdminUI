import {Component} from '@angular/core';
import {DataService} from '../../services/common/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

 constructor(public dataService: DataService) {}

}
