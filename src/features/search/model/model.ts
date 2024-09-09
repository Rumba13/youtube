import { makeAutoObservable } from 'mobx';

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  public isSearchMinified = false;
  public isSearchOpened = false;
  public isSearchFocused = false;

  public setIsSearchMinified = (isSearchMinified: boolean) => {
    this.isSearchMinified = isSearchMinified;
  };
  public setIsSearchOpened = (isSearchOpened: boolean) => {
    this.isSearchOpened = isSearchOpened;
  };
  public setIsSearchFocused = (isSearchFocused: boolean) => {
    this.isSearchFocused = isSearchFocused;
  };
}

export type { SearchStore as SearchStoreType };

export const searchStore = new SearchStore();
