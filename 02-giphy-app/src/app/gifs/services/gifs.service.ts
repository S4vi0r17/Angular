import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  constructor() { }

  get history() {
    return [...this._history];
  }

  searchGifs(tag: string) {
    if (tag.trim().length === 0) {
      return;
    }

    this.organizeHistory(tag);
  }

  private organizeHistory(tag: string) {
    tag = tag.trim().toLowerCase();

    if (this._history.includes(tag)) {
      this._history = this._history.filter((item) => item !== tag);
    }

    this._history.unshift(tag);

    this._history = this._history.splice(0, 10);
  }
}
