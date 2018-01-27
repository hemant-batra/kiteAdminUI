import {Component, OnInit} from '@angular/core';
import {TitleService} from '../../../services/common/title.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../services/common/http.service';
import {ValidationService} from '../../../services/common/validation.service';
import {DataService} from '../../../services/common/data.service';

@Component({
  selector: 'app-manual-refund',
  templateUrl: './manual-refund.component.html',
  styleUrls: ['./manual-refund.component.css']
})
export class ManualRefundComponent implements OnInit {

  manualRefundForm: FormGroup;

  constructor (private titleService: TitleService,
               private httpService: HttpService,
               public validationService: ValidationService,
               public dataService: DataService) {}

  ngOnInit() {
    this.titleService.init('MANUAL_REFUND');
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
    this.titleService.showSpinner();
    this.httpService.post(this.dataService.urls().MANUAL_REFUND, this.manualRefundForm).subscribe(
      response => { this.titleService.setSuccess(response), this.manualRefundForm.reset(); },
      error => { this.titleService.setError(error), this.manualRefundForm.reset(); }
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
