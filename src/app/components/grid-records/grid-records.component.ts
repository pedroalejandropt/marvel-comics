import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-records',
  templateUrl: './grid-records.component.html',
  styleUrls: ['./grid-records.component.scss']
})
export class GridRecordsComponent implements OnInit {

  @Input() records;
  @Input() detail;
  @Output() viewEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  view = (record) => this.viewEvent.emit(record)

}
