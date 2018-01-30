import {Injectable} from '@angular/core';

@Injectable()
export class NavigationService {

  private activatedMenu: HTMLDivElement = null;
  private menus: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[] = null;

  getActivatedMenu() {
    return this.activatedMenu;
  }

  setActivatedMenu(activatedMenu: HTMLDivElement) {
    this.activatedMenu = activatedMenu;
  }

  getMenus() {
    return this.menus;
  }

  setMenus(menus: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[]) {
    this.menus = menus;
  }

  deactivateMenu() {
    if (this.activatedMenu !== null) {
      this.activatedMenu.style.setProperty('height', '0px');
      this.activatedMenu.style.setProperty('z-index', '-1');
    }
  }
}
