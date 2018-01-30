import {FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {DataService} from './data.service';

@Injectable()
export class HttpService {

  constructor (private httpClient: HttpClient,
              private dataService: DataService) {}

  public put(url: string, formGroup: FormGroup): Observable<string> {
    return this.httpClient.put(url, formGroup.getRawValue())
      .map(
        response => response['message']
      )
      .catch(
        (error) => {
          try {
            if (error['error'].errorList == null) {
              return Observable.throw(this.dataService.Message.NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            return Observable.throw(this.dataService.Message.INTERNAL_SERVER_ERROR);
          }
        }
      );
  }

  public post(url: string, formGroup: FormGroup): Observable<string> {
    return this.httpClient.post(url, formGroup.getRawValue())
      .map(
        response => response['message']
      )
      .catch(
        (error) => {
          try {
            if (error['error'].errorList == null) {
              return Observable.throw(this.dataService.Message.NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            return Observable.throw(this.dataService.Message.INTERNAL_SERVER_ERROR);
          }
        }
      );
  }
}
