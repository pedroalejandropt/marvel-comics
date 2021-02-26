import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  url = `${environment.marvelAPI}series`;
  api = `apikey=${environment.apikey}`

  constructor(private _http: HttpClient) { }

  /**
    * This function get all series.
    * 
    * @returns Promise of the list of series.
  */
  fetchSeries = () => { return this._http.get(`${this.url}?limit=100&${this.api}`).toPromise() }

}
