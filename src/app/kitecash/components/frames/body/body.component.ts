import {Component} from '@angular/core';
import {isUndefined} from 'util';
import {roles} from '../../../constants/pages';
import {Router} from '@angular/router';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor (public fs: FactoryService,
               private router: Router) {}

  menuClicked(event: MouseEvent, children: {code: string; label: string; path: string}[]) {
    this.fs.navigator.getHeaderMenu().reset();
    this.fs.navigator.getSideMenu().deactivate();
    this.fs.navigator.getSideMenu().activate(<HTMLDivElement>(event['target']['nextElementSibling']));
    this.fs.navigator.getSideMenu().getActivated().style.setProperty('height', this.fs.navigator.getSideMenu().getActivated().children[0].clientHeight + 'px');
    setTimeout(() => {
      this.fs.navigator.getSideMenu().getActivated().style.setProperty('z-index', '0');
    }, 500);
    if (!isUndefined(children)) {
      const array = this.fs.navigator.getSideMenu().getActivated().children[0].children[0].children[0].children[0].children[0]['href'].split('/');
      this.router.navigate(array.splice(3, array.length));
    }
  }

  filterChildren(menuCode: string, children: {code: string; label: string; path: string}[]): {code: string; label: string; path: string}[] {
    if (isUndefined(children)) {
      return children;
    }

    let filteredChildren = roles[this.fs.data.getUserRole()].find(role => role.code === menuCode).children;
    if (isUndefined(filteredChildren)) {
      return filteredChildren;
    }

    filteredChildren = filteredChildren.map(
      roleCode => children.find(
        child => child.code === roleCode
      )
    ).filter(
      menu => !isUndefined(menu)
    );

    return filteredChildren;
  }
}
