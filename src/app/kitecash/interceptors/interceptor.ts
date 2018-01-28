import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {SessionService} from '../services/common/session.service';
import {Router} from '@angular/router';
import {NavigationService} from '../services/common/navigation.service';
import {DataService} from '../services/common/data.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor (private injector: Injector,
               private router: Router) {}

  intercept (httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let sessionService: SessionService;
    let navigationService: NavigationService;
    let dataService: DataService;
    try {
      sessionService = <SessionService>this.injector.get(SessionService);
      navigationService = <NavigationService>this.injector.get(NavigationService);
      dataService = <DataService>this.injector.get(DataService);
    } catch (err) {
      console.log('Error in acquiring session ID inside HTTP interceptor: ' + err.message);
      return this.handler(httpRequest, next, sessionService, navigationService, dataService);
    }
    /*
      intercept the HTTP request and add the authorization header to it
     */
    const authReq = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', 'session ' + sessionService.getSessionId())
    });
    return this.handler(authReq, next, sessionService, navigationService, dataService);
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
          if (httpRequest.url !== dataService.urls().LOGOUT) {
            console.log('HttpRequestInterceptor session is expired in response');
            sessionService.setSessionId(null);
            navigationService.setMenus([]);
            this.router.navigate(['expired']);
          }
        }
        return Observable.throw(err);
      }
    );
  }
}
