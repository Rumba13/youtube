import {makeAutoObservable} from "mobx";

class AsideState {
    public isMinified: boolean = true;
    public setIsMinified = (isMinified: boolean) => this.isMinified = isMinified;

    constructor() {
        makeAutoObservable(this);
    }
}

export type {AsideState as AsideStateType}
export const asideState = new AsideState();
