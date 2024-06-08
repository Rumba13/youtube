import { makeAutoObservable } from 'mobx';

class SearchState {
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

export type { SearchState as SearchStateType };

export const searchState = new SearchState();
