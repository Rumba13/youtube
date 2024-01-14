import {makeAutoObservable} from "mobx";
import {useState} from "react";

class AsideState {
    public isMinified: boolean = true;
    public isUserArticleExpanded: boolean = false;
    public isSubscriptionArticleExpanded: boolean = false;

    public setIsMinified = (isMinified: boolean) => this.isMinified = isMinified;
    public setIsUserArticleExpanded = (isExpanded: boolean) => this.isUserArticleExpanded = isExpanded;

    public setIsSubscriptionArticleExpanded = (isExpanded: boolean) => this.isSubscriptionArticleExpanded = isExpanded;

    constructor() {
        makeAutoObservable(this);
    }
}

export type {AsideState as AsideStateType}
export const asideState = new AsideState();
