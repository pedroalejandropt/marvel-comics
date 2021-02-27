import { Component, EventEmitter, Input, OnInit, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-grid-records',
  templateUrl: './grid-records.component.html',
  styleUrls: ['./grid-records.component.scss']
})
export class GridRecordsComponent implements OnInit {

  @Input() records;
  @Input() detail;
  @Output() viewEvent = new EventEmitter<any>();

  cols = 4;

  constructor() { }

  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    this.cols = (width > 1200) ? 4 : (width < 1200 && width > 1000) ? 3 : (width < 1000 && width > 600) ? 2 : 1;
  }

  ngOnInit() { 
    this.screenSize();
  }

  view = (record) => this.viewEvent.emit(record)

  screenSize = () => {
    var width = window.innerWidth;
    this.cols = (width > 1200) ? 4 : (width < 1200 && width > 1000) ? 3 : (width < 1000 && width > 600) ? 2 : 1;
  }

}
