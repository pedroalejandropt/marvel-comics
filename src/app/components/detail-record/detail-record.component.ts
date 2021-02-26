import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail-record',
  templateUrl: './detail-record.component.html',
  styleUrls: ['./detail-record.component.scss']
})
export class DetailRecordComponent implements OnInit {

  @Input() record;
  @Output() closeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  close = () => this.closeEvent.emit();

}
