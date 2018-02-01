import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-manual-refund',
  templateUrl: './manual-refund.component.html',
  styleUrls: ['./manual-refund.component.css']
})
export class ManualRefundComponent implements OnInit {

  manualRefundForm: FormGroup;

  constructor (public fs: FactoryService) {}

  c = this.fs.constants.getManualRefundConstants();
  v = this.fs.validator.getManualRefundValidations();
  g = this.fs.validator.getGenericValidations();

  ngOnInit() {
    this.fs.title.init(this.c.PageTitle.MANUAL_REFUND);
    this.manualRefundForm = new FormGroup({
      'mobileNumber': new FormControl(null, [Validators.required, Validators.pattern(this.c.RegularExpression.MOBILE_NUMBER)]),
      'systemAccountNumber': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(this.c.RegularExpression.AMOUNT)]),
      'refundType': new FormControl(null, [Validators.required]),
      'transactionId': new FormControl(null, [Validators.required]),
      'remarks': new FormControl(null)
    });
    this.manualRefundForm.get('systemAccountNumber').patchValue('');
    this.manualRefundForm.get('refundType').patchValue('');
  }

  onSubmit() {
    this.fs.title.showSpinner();
    this.fs.http.post(this.c.URL.MANUAL_REFUND, this.manualRefundForm).subscribe(
      response => {
        this.fs.title.setSuccess(response);
        this.manualRefundForm.reset();
        },
      error => {
        this.fs.title.setError(error);
        this.manualRefundForm.reset();
      }
    );
  }

  getRemainingCharacters(): number {
    const val = this.manualRefundForm.get('remarks').value;
    if (val === null) {
      return 50;
    }
    return 50 - val.length;
  }
}
