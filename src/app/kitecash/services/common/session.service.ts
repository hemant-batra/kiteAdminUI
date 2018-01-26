import {roles} from '../../constants/pages';
import {isUndefined} from 'util';

export class SessionService {

  private activatedMenu: HTMLDivElement = null;
  private sessionId: string = null;
  private validNavigation = false;
  private userRole: string = null;
  private menus: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[] = null;

  getActivatedMenu() {
    return this.activatedMenu;
  }

  setActivatedMenu(activatedMenu: HTMLDivElement) {
    this.activatedMenu = activatedMenu;
  }

  isActive() {
    return this.sessionId != null;
  }

  setUserRole(userRole: string) {
    this.userRole = userRole;
  }

  getSessionId() {
    return this.sessionId;
  }

  setSessionId(sessionId: string) {
    this.sessionId = sessionId;
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

  filterChildren(menuCode: string, children: {code: string; label: string; path: string}[]): {code: string; label: string; path: string}[] {
    if (isUndefined(children)) {
      return children;
    }

    let filteredChildren = roles[this.userRole].find(role => role.code === menuCode).children;
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
