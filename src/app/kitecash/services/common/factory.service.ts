import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {NavigationService} from './navigation.service';
import {HttpService} from './http.service';
import {SessionService} from './session.service';
import {ValidationService} from './validation.service';
import {TitleService} from './title.service';
import {ConstantsService} from './constants.service';

@Injectable()
export class FactoryService {

  constructor (public http: HttpService,
               public data: DataService,
               public title: TitleService,
               public session: SessionService,
               public constants: ConstantsService,
               public validator: ValidationService,
               public navigator: NavigationService) {}
}
