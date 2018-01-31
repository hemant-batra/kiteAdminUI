import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Injectable, Injector} from '@angular/core';
import {SessionService} from '../services/common/session.service';
import {Router} from '@angular/router';
import {NavigationService} from '../services/common/navigation.service';
import {DataService} from '../services/common/data.service';
import {FactoryService} from '../services/common/factory.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor (private injector: Injector,
               private router: Router) {}

  intercept (httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let fs: FactoryService;
    try {
      fs = <FactoryService>this.injector.get(FactoryService);
    } catch (err) {
      return this.handler(httpRequest, next, fs.session, fs.navigator, fs.data);
    }
    /*
      intercept the HTTP request and add the authorization header to it
     */
    const authReq = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', 'session ' + fs.session.getSessionId())
    });
    return this.handler(authReq, next, fs.session, fs.navigator, fs.data);
  }

  private handler(httpRequest: HttpRequest<any>, next: HttpHandler, sessionService: SessionService, navigationService: NavigationService, dataService: DataService): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).catch(
      err => {
        /* show the session expiry page when the intercepted
           HTTP response returns error 440. However do not
           show the expiry page when the user has clicked on
           the logout button
        */
        if (err['status'] === 440) {
          if (httpRequest.url !== dataService.URL.LOGOUT) {
            sessionService.setSessionId(null);
            navigationService.SideMenu.setContents([]);
            navigationService.HeaderMenu.reset();
            this.router.navigate(['expired']);
          }
        }
        return Observable.throw(err);
      }
    );
  }
}
