import {Component, OnInit} from '@angular/core';
import {isUndefined} from 'util';
import {roles} from '../../../constants/pages';
import {PlatformLocation} from '@angular/common';
import {Router} from '@angular/router';
import {FactoryService} from '../../../services/common/factory.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor (public fs: FactoryService,
              private platformLocation: PlatformLocation,
              private router: Router) {}

  ngOnInit() {
    this.platformLocation.onPopState(() => {
      this.fs.session.logout();
      this.router.navigate(['unauthorized']);
    });
  }

  menuClicked(event: MouseEvent) {
    const activeMenu = this.fs.navigator.getActivatedMenu();
    if (activeMenu !== null) {
      activeMenu.style.setProperty('height', '0px');
      activeMenu.style.setProperty('z-index', '-1');
    }
    this.fs.navigator.setActivatedMenu(<HTMLDivElement>(event['target']['nextElementSibling']));
    activeMenu.style.setProperty('height', activeMenu.children[0].clientHeight + 'px');
    setTimeout(() => {
      activeMenu.style.setProperty('z-index', '0');
    }, 500);
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
