import {Injectable} from '@angular/core';

@Injectable()
export class NavigationService {

  private validNavigation = false;
  private activatedMenu: HTMLDivElement = null;
  private menus: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[] = null;

  getActivatedMenu() {
    return this.activatedMenu;
  }

  setActivatedMenu(activatedMenu: HTMLDivElement) {
    this.activatedMenu = activatedMenu;
  }

  allowNavigation() {
    this.validNavigation = true;
  }

  disallowNavigation() {
    this.validNavigation = false;
  }

  isNavigationAllowed() {
    return this.validNavigation;
  }

  getMenus() {
    return this.menus;
  }

  setMenus(menus: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[]) {
    this.menus = menus;
  }
}
