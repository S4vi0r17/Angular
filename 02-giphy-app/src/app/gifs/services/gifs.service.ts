import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif[] = [];

  private _history: string[] = [];

  private _url: string = 'https://api.giphy.com/v1/gifs';

  private _apiKey: string = 'mQETrLhCJsrDkGtY0jXdkzSs1OJNG1kC';

  constructor(
    private _http: HttpClient
  ) { }

  get history() {
    return [...this._history];
  }

  searchGifs(tag: string) {
    if (tag.trim().length === 0) {
      return;
    }

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', tag)
      .set('limit', '10');

    // this._http.get(`${this._url}/search?api_key=${this._apiKey}&q=${tag}&limit=10`)
    this._http.get<SearchResponse>(`${this._url}/search`, { params })
      .subscribe((response) => {
        this.gifsList = response.data;
      });

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
