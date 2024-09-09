import { makeAutoObservable } from 'mobx';

class OverlayStore {
  public isOverlayOpened = false;

  constructor() {
    makeAutoObservable(this);
  }
  public setIsOverlayOpened(isOverlayOpened: boolean) {
    this.isOverlayOpened = isOverlayOpened;
  }
}

export type { OverlayStore as OverlayStoreType };
export const overlayStore = new OverlayStore();
