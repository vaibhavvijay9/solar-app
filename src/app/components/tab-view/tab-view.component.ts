import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {

  @Input() routeInfo: any;
  activeTabName: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabName){
    this.activeTabName = tabName;
  }

}
