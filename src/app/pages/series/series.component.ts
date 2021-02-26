import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  type: string = '';
  types: any[] = [ { name: 'All', value: '' } , { name: 'Collection', value: 'collection' }, { name: 'Limited', value: 'limited' }, { name: 'One Shot', value: 'one shot' }, { name: 'Ongoing', value: 'ongoing' }]

  rate: string = '';
  ratings: any[] = [{ name: 'All', value: '' }, { name: 'A', value: 'A' }, { name: 'T', value: 'T' }, { name: 'Rated T', value: 'RATED T' }, { name: 'T+', value: 'RATED T+' }, { name: 'PSR', value: 'PSR' }, { name: 'Marvel PSR', value: 'MARVEL PSR' }]

  serie: any = null;
  series: any[];
  series_copy: any[];
  serie_text: string = '';

  show: boolean = true;

  constructor(private _service: SeriesService) { }

  ngOnInit() {
    this._service.fetchSeries().then((res: any) => { this.series = res.data.results; this.series_copy = res.data.results; this.show = false; })
  }

  /**
    * This function filter the characters using the title as condition.
  */
  filter = () => this.series = this.series_copy.filter((serie) => (serie.title).toUpperCase().includes(this.serie_text.toUpperCase()))

  /**
    * This function filter the characters using the type and rating as condition.
  */
  filterSeries = async () => {
    await this.filter();
    this.series = await (this.type && this.rate) ? this.series.filter((serie) => serie.type.includes(this.type) && serie.rating.toUpperCase() == this.rate) : 
    (this.type) ? this.series.filter((serie) => serie.type.includes(this.type)) : 
    (this.rate) ? this.series.filter((serie) => serie.rating.toUpperCase() == this.rate) : this.series
  }

  /**
    * This function clean filter input.
  */
  clear = () => this.series = this.series_copy;

}
