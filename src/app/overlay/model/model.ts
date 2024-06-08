import { makeAutoObservable } from 'mobx';

class OverlayState {
 public isOverlayOpened = false;

 constructor() {
  makeAutoObservable(this);
 }
 public setIsOverlayOpened(isOverlayOpened: boolean) {
  this.isOverlayOpened = isOverlayOpened;
 }
}

export type { OverlayState as OverlayStateType };
export const overlayState = new OverlayState();
