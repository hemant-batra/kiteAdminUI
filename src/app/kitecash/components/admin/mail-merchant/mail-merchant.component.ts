import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../../services/common/title.service';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-mail-merchant',
  templateUrl: './mail-merchant.component.html',
  styleUrls: ['./mail-merchant.component.css']
})
export class MailMerchantComponent implements OnInit {

  constructor (private titleService: TitleService,
               public dataService: DataService) {}

  ngOnInit() {
    this.titleService.init('MAIL_MERCHANT');
  }

  onSubmit() {
    this.titleService.showSpinner();
    setTimeout(() => {
      this.titleService.setSuccess('Transaction has been successfully processed');
    }, 2000);
  }
}
