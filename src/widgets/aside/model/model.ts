import { makeAutoObservable } from 'mobx';

class AsideStore {
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

export type { AsideStore as AsideStoreType };
export const asideStore = new AsideStore();
