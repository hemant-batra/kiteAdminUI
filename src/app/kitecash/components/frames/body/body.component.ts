import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../services/common/navigation.service';
import {isUndefined} from 'util';
import {roles} from '../../../constants/pages';
import {DataService} from '../../../services/common/data.service';
import {SessionService} from '../../../services/common/session.service';
import {PlatformLocation} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public navigationService: NavigationService,
              public sessionService: SessionService,
              private dataService: DataService,
              private platformLocation: PlatformLocation,
              private router: Router) {}

  ngOnInit() {
    this.platformLocation.onPopState(x => {
      this.sessionService.logout();
      this.router.navigate(['unauthorized']);
    });
  }

  menuClicked(event: MouseEvent) {
    if (this.navigationService.getActivatedMenu() !== null) {
      this.navigationService.getActivatedMenu().style.setProperty('height', '0px');
      this.navigationService.getActivatedMenu().style.setProperty('z-index', '-1');
    }
    this.navigationService.setActivatedMenu(<HTMLDivElement>(event['target']['nextElementSibling']));
    this.navigationService.getActivatedMenu().style.setProperty('height', this.navigationService.getActivatedMenu().children[0].clientHeight + 'px');
    setTimeout(() => {
      this.navigationService.getActivatedMenu().style.setProperty('z-index', '0');
    }, 500);
  }

  filterChildren(menuCode: string, children: {code: string; label: string; path: string}[]): {code: string; label: string; path: string}[] {
    if (isUndefined(children)) {
      return children;
    }

    let filteredChildren = roles[this.dataService.getUserRole()].find(role => role.code === menuCode).children;
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
