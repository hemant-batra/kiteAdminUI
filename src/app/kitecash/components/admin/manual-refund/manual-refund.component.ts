import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../constants/constants';
import {TitleService} from '../../../services/common/title.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilityService} from '../../../services/common/utility.service';

@Component({
  selector: 'app-manual-refund',
  templateUrl: './manual-refund.component.html',
  styleUrls: ['./manual-refund.component.css']
})
export class ManualRefundComponent implements OnInit {

  c = Constants;
  manualRefundForm: FormGroup;

  constructor (private title: TitleService,
               public util: UtilityService) {}

  ngOnInit() {
    this.title.init('MANUAL_REFUND');
    this.manualRefundForm = new FormGroup({
      'mobileNumber': new FormControl(null, [Validators.required, Validators.pattern(new RegExp(/^[0-9]{10,10}$/))]),
      'systemAccountNumber': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(new RegExp(/^[1-9]\d*(\.\d+)?$/))]),
      'refundType': new FormControl(null, [Validators.required]),
      'transactionId': new FormControl(null, [Validators.required]),
      'remarks': new FormControl(null)
    });
    this.manualRefundForm.get('systemAccountNumber').patchValue('');
    this.manualRefundForm.get('refundType').patchValue('');
  }

  onSubmit() {
    this.title.showSpinner();
    this.util.post(Constants.URL.MANUAL_REFUND, this.manualRefundForm).subscribe(
      response => { this.title.setSuccess(response), this.manualRefundForm.reset(); },
      error => { this.title.setError(error), this.manualRefundForm.reset(); }
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
