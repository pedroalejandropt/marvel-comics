import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

/**
 * Component HomeComponent
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: any[];
  showNews: boolean = false;
  films: any[];
  showFilms: boolean = false;

  constructor(private _service: HomeService) { }

  ngOnInit() {
    this._service.fetchNews().then((data: any) => { this.news = data.news; this.showNews = true; });
    this._service.fetchFilms().then((data: any) => { this.films = data.releases; this.showFilms = true; });
  }

  /**
    * This function assign url when image url not found.
  */
  notFound = (resource) => resource.img = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

}
