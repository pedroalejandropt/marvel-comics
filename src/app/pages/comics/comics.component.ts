import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharactersService } from 'src/app/services/characters.service';
import { ComicsService } from 'src/app/services/comics.service';

/**
 * Component ComicsComponent
 */
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  orderTitles: boolean = true;
  orderPrices: boolean = true;
  
  comic: any = null;
  comics: any[];
  comics_copy: any[];
  comic_text: string = '';

  characterSelections = new FormControl();
  characters: any[];

  charactersByComics: any[];
  creatorsByComics: any[];

  show: boolean = true;

  constructor(
    private _service: ComicsService,
    private _charactersService: CharactersService
    ) { }

  ngOnInit() {
    this._service.fetchComics().then(async (res: any) => { this.comics = res.data.results; this.comics_copy = res.data.results; this.show = false; })
    this._charactersService.fetchCharacters().then((res: any) => { this.characters = res.data.results; })
  }

  /**
    * This function filter the characters using the title as condition.
  */
  filter = () => this.comics = this.comics_copy.filter((comic) => (comic.title).toUpperCase().includes(this.comic_text.toUpperCase()))
  
  /**
    * This function clean filter input.
  */
  clear = () => this.comics = this.comics_copy;

  /**
    * This function filter comics that contain all the characters selected.
  */
  filterByCharacters = () => { this.clear(); this.comic_text = ''; this.sameComic(); }
  
  /**
    * This function clear all the characters selected.
  */
  clearCharacters = () => { this.characterSelections.reset(); }

  /**
    * This function filter comics that contain all the characters selected.
  */
  sameComic = () => {
    this.comics = []
    this.comics_copy.forEach(comic => {
      let all: boolean = true;
      let characters = (this.characterSelections.value) ? this.characterSelections.value : []
      for (let character of characters) {
        const result = comic.characters.items.find( ({ name }) => name === character );
        if(!result) all = false
      }
      (all) ? this.comics.push(comic) : ''
    })
  };

  /**
    * This function order comics by title.
  */
  orderByTitle = () => (this.orderTitles) ? this.comics.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) : this.comics = this.comics.reverse();
  
  /**
    * This function order comics by price.
  */
  orderByPrices = () => (this.orderPrices) ? this.comics.sort(function (a, b) { return a.prices[0].price - b.prices[0].price; }) : this.comics.sort(function (a, b) { return b.prices[0].price - a.prices[0].price; })

  /**
    * This function get list of all the characters about the comic.
    *
    * @param {number} id  Id of the comic.
  */
  fetchCharacters = async (id) => await this._service.fetchCharacterByComics(id).then(async (res: any) => { this.charactersByComics = await res.data.results; })
  
  /**
    * This function get list of all the creators about the comic.
    *
    * @param {number} id  Id of the comic.
  */
  fetchCreators = async (id) => await this._service.fetchCreatorsByComics(id).then(async (res: any) => { this.creatorsByComics = await res.data.results; })

  /**
    * This function save all the information about the comic and show the detail.
    *
    * @param {any} comic  Comic of marvel.
  */
  viewDetail = async (comic) => {
    await this.fetchCharacters(comic.id);
    await this.fetchCreators(comic.id);
    this.comic = await comic;
    this.comic['slider'] = await []
    await (this.creatorsByComics.length > 0) ? this.comic['slider'].push({ name: 'Creators', res: await this.creatorsByComics }) : null
    await (this.charactersByComics.length > 0) ? this.comic['slider'].push({ name: 'Characters', res: await this.charactersByComics }) : null
  }

  /**
    * This function close the comic detail.
  */
  closeDetail = () => this.comic = null;

}
