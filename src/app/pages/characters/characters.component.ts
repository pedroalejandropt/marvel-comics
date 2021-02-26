import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

/**
 * Component CharactersComponent
 */
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  character: any = null;
  characters: any[];
  characters_copy: any[];
  character_text: string = '';

  comics: any[];
  series: any[];

  show: boolean = true;

  constructor(private _service: CharactersService) { }

  ngOnInit() {
    this._service.fetchCharacters().then((res: any) => { this.characters = res.data.results; this.characters_copy = res.data.results; this.show = false; })
  }

  /**
    * This function filter the characters using the name as condition.
  */
  filter = () => this.characters = this.characters_copy.filter((character) => (character.name).toUpperCase().includes(this.character_text.toUpperCase()))
  
  /**
    * This function clean filter input.
  */
  clear = () => this.characters = this.characters_copy;

  /**
    * This function get list of all the comics about the character.
    *
    * @param {number} id  Id of the character.
  */
  fetchComics = async (id: number) => await this._service.fetchComicsByCharacter(id).then(async (res: any) => { this.comics = await res.data.results; })
  
  /**
    * This function get list of all the series about the character.
    *
    * @param {number} id  Id of the character.
  */
  fetchSeries = async (id: number) => await this._service.fetchSeriesByCharacter(id).then(async (res: any) => { this.series = await res.data.results; })

  /**
    * This function save all the information about the character and show the detail.
    *
    * @param {any} charater  Character of marvel.
  */
  viewDetail = async (character) => {
    await this.fetchComics(character.id);
    await this.fetchSeries(character.id);
    this.character = await character;
    this.character['slider'] = await []
    await (this.comics.length > 0) ? this.character['slider'].push({ name: 'Comics', res: await this.comics }) : null
    await (this.series.length > 0) ? this.character['slider'].push({ name: 'Series', res: await this.series }) : null
  }

  /**
    * This function close the character detail.
  */
  closeDetail = () => this.character = null;

}
