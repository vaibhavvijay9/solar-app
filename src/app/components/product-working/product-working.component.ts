import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'product-working',
  templateUrl: './product-working.component.html',
  styleUrls: ['./product-working.component.scss']
})
export class ProductWorkingComponent implements OnInit {

  activeTabName: string = 'Process';

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabName){
    this.activeTabName = tabName;
  }
}
