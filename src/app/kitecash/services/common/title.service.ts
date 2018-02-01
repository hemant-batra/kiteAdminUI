import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class TitleService {

  private status: number;
  private statusText: string = null;
  private title: string = null;

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

  private setTitle(title: string) {
    this.title = title;
    this._titleEventEmitter.emit(this.title);
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

  init(title: string) {
    this.setTitle(title);
    this.setStatus(0);
    this.setStatusText(null);
  }
}
