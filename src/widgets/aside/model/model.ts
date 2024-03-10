import { makeAutoObservable } from 'mobx';

class AsideState {
  public isMinified = true;
  public isUserArticleExpanded = false;
  public isSubscriptionArticleExpanded = false;

  public setIsMinified = (isMinified: boolean) => (this.isMinified = isMinified);
  public setIsUserArticleExpanded = (isExpanded: boolean) => (this.isUserArticleExpanded = isExpanded);

  public setIsSubscriptionArticleExpanded = (isExpanded: boolean) => (this.isSubscriptionArticleExpanded = isExpanded);

  constructor() {
    makeAutoObservable(this);
  }
}

export type { AsideState as AsideStateType };
export const asideState = new AsideState();
