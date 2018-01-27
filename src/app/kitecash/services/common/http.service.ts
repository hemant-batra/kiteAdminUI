import {FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient,
              private dataService: DataService) {}

  public put(url: string, formGroup: FormGroup): Observable<string> {
    console.log('HTTP PUT Request: ' + JSON.stringify(formGroup.getRawValue()));
    return this.httpClient.put(url, formGroup.getRawValue())
      .map(
        response => response['message']
      )
      .catch(
        (error) => {
          try {
            if (error['error'].errorList == null) {
              return Observable.throw(this.dataService.messages().NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            console.log('HTTP PUT Error ' + err.message);
            return Observable.throw(this.dataService.messages().INTERNAL_SERVER_ERROR);
          }
        }
      );
  }

  public post(url: string, formGroup: FormGroup): Observable<string> {
    console.log('HTTP POST Request: ' + JSON.stringify(formGroup.getRawValue()));
    return this.httpClient.post(url, formGroup.getRawValue())
      .map(
        response => response['message']
      )
      .catch(
        (error) => {
          try {
            if (error['error'].errorList == null) {
              return Observable.throw(this.dataService.messages().NO_INTERNET);
            }
            return Observable.throw(error['error'].errorList[0].errorMessage);
          } catch (err) {
            console.log('HTTP POST Error ' + err.message);
            return Observable.throw(this.dataService.messages().INTERNAL_SERVER_ERROR);
          }
        }
      );
  }
}
