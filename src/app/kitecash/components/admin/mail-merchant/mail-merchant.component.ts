import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../constants/constants';
import {TitleService} from '../../../services/common/title.service';

@Component({
  selector: 'app-mail-merchant',
  templateUrl: './mail-merchant.component.html',
  styleUrls: ['./mail-merchant.component.css']
})
export class MailMerchantComponent implements OnInit {

  c = Constants;

  constructor (private title: TitleService) {}

  ngOnInit() {
    this.title.init('MAIL_MERCHANT');
  }

  onSubmit() {
    this.title.showSpinner();
    setTimeout(() => {
      this.title.setSuccess('Transaction has been successfully processed');
    }, 2000);
  }
}
