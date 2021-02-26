import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  url = `${environment.marvelAPI}creators`;
  api = `apikey=${environment.apikey}`

  constructor(private _http: HttpClient) { }

  /**
    * This function get all creators.
    * 
    * @returns Promise of the list of creators.
  */
  fetchCreators = () => { return this._http.get(`${this.url}?limit=100&${this.api}`).toPromise() }

  /**
    * This function get all comics by creator.
    * 
    * @param {number} id  Id of the creator.
    * @returns Promise of the list of comics.
  */
  fetchComicsByCreator = (id) => { return this._http.get(`${this.url}/${id}/comics?${this.api}`).toPromise() }

  /**
    * This function get all series by creator.
    * 
    * @param {number} id  Id of the creator.
    * @returns Promise of the list of series.
  */
  fetchSeriesByCreator = (id) => { return this._http.get(`${this.url}/${id}/series?${this.api}`).toPromise() }

}
