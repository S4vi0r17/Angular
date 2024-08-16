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
    this._history.unshift(tag);
    console.log(this._history);
  }
}
