import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = `http://api.marvelita.es/`

  constructor(private _http: HttpClient) { }

  /**
    * This function get all news.
    * 
    * @returns Promise of the list of news.
  */
  fetchNews = () => { return this._http.get(`${this.url}news/all`).toPromise() }
  
  /**
    * This function get all films.
    * 
    * @returns Promise of the list of films.
  */
  fetchFilms = () => { return this._http.get(`${this.url}releases/all`).toPromise() }

}
