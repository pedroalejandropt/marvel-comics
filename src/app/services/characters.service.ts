import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url = `${environment.marvelAPI}characters`;
  api = `apikey=${environment.apikey}`

  constructor(private _http: HttpClient) { }

  /**
    * This function get all characters.
    * 
    * @returns Promise of the list of characters.
  */
  fetchCharacters = () => { return this._http.get(`${this.url}?limit=100&${this.api}`).toPromise() }

  /**
    * This function get all comics by character.
    * 
    * @param {number} id  Id of the character.
    * @returns Promise of the list of comics.
  */
  fetchComicsByCharacter = (id: number) => { return this._http.get(`${this.url}/${id}/comics?${this.api}`).toPromise() }

  /**
    * This function get all series by character.
    * 
    * @param {number} id  Id of the character.
    * @returns Promise of the list of series.
  */
  fetchSeriesByCharacter = (id: number) => { return this._http.get(`${this.url}/${id}/series?${this.api}`).toPromise() }

}
