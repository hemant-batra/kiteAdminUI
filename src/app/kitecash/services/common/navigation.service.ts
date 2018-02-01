import {Injectable} from '@angular/core';
import {isUndefined} from 'util';

@Injectable()
export class NavigationService {

  private BrowserBackButton = new class {
    private pressed: boolean;
    isPressed() {
      return this.pressed;
    }
    setPressed() {
      this.pressed = true;
    }
    clearPressed() {
      this.pressed = false;
    }
  };

  private HeaderMenu = new class {
    private active: {imageId: string; image: HTMLImageElement; image_inverted: HTMLImageElement};
    activate(headerMenu: {imageId: string; image: HTMLImageElement; image_inverted: HTMLImageElement}) {
      this.restore();
      this.active = headerMenu;
    }
    reset() {
      this.restore();
      this.active = {imageId: null, image: null, image_inverted: null};
    }
    isActive(imageId: string) {
      return this.active.imageId === imageId;
    }
    private restore() {
      if (this.active !== null && !isUndefined(this.active)) {
        if (this.active.image !== null && !isUndefined(this.active.image)) {
          this.active.image.classList.remove('hide');
          this.active.image.classList.add('show');
        }
        if (this.active.image_inverted !== null && !isUndefined(this.active.image_inverted)) {
          this.active.image_inverted.classList.remove('show');
          this.active.image_inverted.classList.add('hide');
        }
      }
    }
  };

  private SideMenu = new class {
    private active: HTMLDivElement = null;
    private content: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[] = null;
    hasContents() {
      return !(this.content === null || isUndefined(this.content));
    }
    getContents() {
      return this.content;
    }
    setContents(content: {code: string; label: string; path: string; children: {code: string; label: string; path: string}[]}[]) {
      this.content = content;
    }
    getActivated() {
      return this.active;
    }
    activate(menu: HTMLDivElement) {
      this.active = menu;
    }
    deactivate() {
      if (this.active !== null) {
        this.active.style.setProperty('height', '0px');
        this.active.style.setProperty('z-index', '-1');
      }
    }
  };

  public getBrowserBackButton() {
    return this.BrowserBackButton;
  }

  public getHeaderMenu() {
    return this.HeaderMenu;
  }

  public getSideMenu() {
    return this.SideMenu;
  }
}
