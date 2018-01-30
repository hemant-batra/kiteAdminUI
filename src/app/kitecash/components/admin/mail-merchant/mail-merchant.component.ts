import {Component, OnInit} from '@angular/core';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-mail-merchant',
  templateUrl: './mail-merchant.component.html',
  styleUrls: ['./mail-merchant.component.css']
})
export class MailMerchantComponent implements OnInit {

  constructor (public fs: FactoryService) {}

  ngOnInit() {
    this.fs.title.init('MAIL_MERCHANT');
  }

  onSubmit() {
    this.fs.title.showSpinner();
    setTimeout(() => {
      this.fs.title.setSuccess('Transaction has been successfully processed');
    }, 2000);
  }
}
