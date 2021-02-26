import { Component, OnInit } from '@angular/core';
import { CreatorsService } from 'src/app/services/creators.service';

/**
 * Component CreatorsComponent
 */
@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  creator: any = null;
  creators: any[];
  creators_copy: any[];
  creator_text: string = '';

  comics: any[];
  series: any[];

  show: boolean = true;

  constructor(private _service: CreatorsService) { }

  ngOnInit() { 
    this._service.fetchCreators().then((res: any) => { this.creators = res.data.results;  this.creators_copy = res.data.results; this.show = false; })
  }

  /**
    * This function filter the characters using the fullName as condition.
  */
  filter = () => this.creators = this.creators_copy.filter((creator) => (creator.fullName).toUpperCase().includes(this.creator_text.toUpperCase()))
  
  /**
    * This function clean filter input.
  */
  clear = () => this.creators = this.creators_copy;

  /**
    * This function get list of all the comics about the creator.
    *
    * @param {number} id  Id of the creator.
  */
  fetchComics = async (id) => await this._service.fetchComicsByCreator(id).then(async (res: any) => { this.comics = await res.data.results; })
  
  /**
    * This function get list of all the series about the creator.
    *
    * @param {number} id  Id of the creator.
  */
  fetchSeries = async (id) => await this._service.fetchSeriesByCreator(id).then(async (res: any) => { this.series = await res.data.results; })
  
  /**
    * This function save all the information about the creator and show the detail.
    *
    * @param {any} charater  Creator of marvel.
  */
  viewDetail = async (creator) => {
    await this.fetchComics(creator.id);
    await this.fetchSeries(creator.id);
    this.creator = await creator;
    this.creator['slider'] = await []
    await (this.comics.length > 0) ? this.creator['slider'].push({ name: 'Comics', res: await this.comics }) : null
    await (this.series.length > 0) ? this.creator['slider'].push({ name: 'Series', res: await this.series }) : null
  }

  /**
    * This function close the creator detail.
  */
  closeDetail = () => this.creator = null; 

}
