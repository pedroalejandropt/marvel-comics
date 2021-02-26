import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  url = `${environment.marvelAPI}comics`;
  api = `apikey=${environment.apikey}`

  constructor(private _http: HttpClient) { }

  /**
    * This function get all comics.
    * 
    * @returns Promise of the list of comics.
  */
  fetchComics = () => { return this._http.get(`${this.url}?limit=100&${this.api}`).toPromise() }

  /**
    * This function get all characters by comic.
    * 
    * @param {number} id  Id of the comic.
    * @returns Promise of the list of characters.
  */
  fetchCharacterByComics = (id) => { return this._http.get(`${this.url}/${id}/characters?${this.api}`).toPromise() }
  
  /**
    * This function get all creators by comic.
    * 
    * @param {number} id  Id of the comic.
    * @returns Promise of the list of creators.
  */
  fetchCreatorsByComics = (id) => { return this._http.get(`${this.url}/${id}/creators?${this.api}`).toPromise() }

}
