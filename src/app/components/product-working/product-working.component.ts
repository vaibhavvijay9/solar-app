import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'product-working',
  templateUrl: './product-working.component.html',
  styleUrls: ['./product-working.component.scss']
})
export class ProductWorkingComponent implements OnInit {

  routeInfo: any;

  constructor() { }

  ngOnInit(): void {
    this.routeInfo = [
      {tabName: 'Process', tabLink: 'process', isActive: true}
    ]
  }

}
