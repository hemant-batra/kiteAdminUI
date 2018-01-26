import {EventEmitter} from '@angular/core';
import {Constants} from '../../constants/constants';

export class TitleService {

  private status: number;
  private statusText: string = null;
  private titleService: string = null;

  private _statusEventEmitter = new EventEmitter();
  private _statusTextEventEmitter = new EventEmitter();
  private _titleEventEmitter = new EventEmitter();

  emitter = {
    status: this._statusEventEmitter,
    statusText: this._statusTextEventEmitter,
    title: this._titleEventEmitter
  };

  private setStatus(status: number) {
    this.status = status;
    this._statusEventEmitter.emit(this.status);
  }

  private setStatusText(statusText: string) {
    this.statusText = statusText;
    this._statusTextEventEmitter.emit(this.statusText);
  }

  private setTitle(titleCode: string) {
    this.titleService = Constants.PageTitles[titleCode];
    this._titleEventEmitter.emit(this.titleService);
  }

  showSpinner() {
    this.setStatus(1);
    this.setStatusText(null);
  }

  setSuccess(message: string) {
    this.setStatus(2);
    this.setStatusText(message);
  }

  setError(message: string) {
    this.setStatus(3);
    this.setStatusText(message);
  }

  init(titleCode: string) {
    this.setTitle(titleCode);
    this.setStatus(0);
    this.setStatusText(null);
  }
}
