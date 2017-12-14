import {Component} from '@angular/core';
import {Constants} from '../../constants/constants';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  message = Constants.PageTitles.WELCOME_MESSAGE;
}
