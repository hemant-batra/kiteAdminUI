import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {FactoryService} from '../services/common/factory.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor (private injector: Injector,
               private router: Router) {}

  intercept (httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let factoryService: FactoryService;
    try {
      factoryService = <FactoryService>this.injector.get(FactoryService);
    } catch (err) {
      return this.handler(httpRequest, next, factoryService);
    }
    /*
      intercept the HTTP request and add the authorization header to it
     */
    const authReq = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', 'session ' + factoryService.session.getSessionId())
    });
    return this.handler(authReq, next, factoryService);
  }

  private handler(httpRequest: HttpRequest<any>, next: HttpHandler, factoryService: FactoryService): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).catch(
      err => {
        /* show the session expiry page when the intercepted
           HTTP response returns error 440. However do not
           show the expiry page when the user has clicked on
           the logout button
        */
        if (err['status'] === 440) {
          if (httpRequest.url !== factoryService.constants.getMiscellaneousConstants().URL.LOGOUT) {
            factoryService.data.setMessage(factoryService.constants.getMessageConstants().Message.EXPIRY_MESSAGE);
            factoryService.navigator.showMessage(this.router);
          }
        }
        return Observable.throw(err);
      }
    );
  }
}
