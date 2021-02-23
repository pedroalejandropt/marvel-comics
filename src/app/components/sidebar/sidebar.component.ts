import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  pxMeasure = 70;

  constructor() { }

  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    this.pxMeasure = (width < 800) ? 70 : 240;
  }

  ngOnInit() {
    this.screenSize();
  }

  onToolbarMenuToggle = () =>
    this.pxMeasure = (this.pxMeasure == 240) ? 70 : 240;

  screenSize = () => {
    var width = window.innerWidth;
    this.pxMeasure = (width < 800) ? 70 : 240;
  }
}
