import {ElementRef, Injectable} from '@angular/core';
import {isUndefined} from 'util';

export enum HeaderMenu {
  NONE, MY_PROFILE, CHANGE_PASSWORD, LOGOUT
}

@Injectable()
export class NavigationService {

  private frozenHeaderMenu: HeaderMenu;
  private frozenHeaderMenuImage: ElementRef;
  private frozenHeaderMenuImage_inverted: ElementRef;
  private backButtonPressed: boolean;
  private activatedMenu: HTMLDivElement = null;
  private menus: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[] = null;

  setFrozenHeaderMenu(frozenHeaderMenu: HeaderMenu, frozenHeaderMenuImage: ElementRef, frozenHeaderMenuImage_inverted: ElementRef) {
    this.frozenHeaderMenu = frozenHeaderMenu;
    if (this.frozenHeaderMenuImage !== null && !isUndefined(this.frozenHeaderMenuImage)) {
      this.frozenHeaderMenuImage.nativeElement.style.display = 'block';
    }
    if (this.frozenHeaderMenuImage_inverted !== null && !isUndefined(this.frozenHeaderMenuImage_inverted)) {
      this.frozenHeaderMenuImage_inverted.nativeElement.style.display = 'none';
    }
    this.frozenHeaderMenuImage = frozenHeaderMenuImage;
    this.frozenHeaderMenuImage_inverted = frozenHeaderMenuImage_inverted;
  }

  getFrozenHeaderMenu() {
    return this.frozenHeaderMenu;
  }

  isBackButtonPressed() {
    return this.backButtonPressed;
  }

  setBackButtonPressed() {
    this.backButtonPressed = true;
  }

  clearBackButtonPressed() {
    this.backButtonPressed = false;
  }

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
