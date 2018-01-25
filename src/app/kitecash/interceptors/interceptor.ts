import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {SessionService} from '../services/common/session.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor (private injector: Injector,
               private router: Router) {}

  intercept (httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let session: SessionService;
    try {
      session = <SessionService>this.injector.get(SessionService);
    } catch (err) {
      console.log('Error in acquiring session ID inside HTTP interceptor: ' + err.message);
      return this.handler(httpRequest, next, session);
    }
    /*
      intercept the HTTP request and add the authorization header to it
     */
    // console.log('HttpRequestInterceptor set Authorizarion header');
    const authReq = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', 'session ' + session.getSessionId())
    });
    return this.handler(authReq, next, session);
  }

  private handler(httpRequest: HttpRequest<any>, next: HttpHandler, session: SessionService): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).catch(
      err => {
        /* show the session expiry page when the intercepted
           HTTP response returns error 440. However do not
           show the expiry page when the user has clicked on
           the logout button
        */
        if (err['status'] === 440) {
          if (httpRequest.url !== environment.serverUrl + '/logout') {
            console.log('HttpRequestInterceptor session is expired in response');
            session.setSessionId(null);
            session.setMenus([]);
            this.router.navigate(['/expired']);
          }
        }
        return Observable.throw(err);
      }
    );
  }
}
