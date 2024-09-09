import { makeAutoObservable } from 'mobx';

class SignUpStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _toggleModal: Function | undefined;

  public setToggleModal(toggleModal: Function) {
    this._toggleModal = toggleModal;
  }

  public toggleModal = () => {
    this._toggleModal?.();
  };
}

export const signUpStore = new SignUpStore();
