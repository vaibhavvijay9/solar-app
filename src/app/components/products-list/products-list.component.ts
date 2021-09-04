import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() productsList: any;
  limit: number = 3;
  buttonLabel: string = "See More Options";
  isMoreAvailable: boolean;
  selectedProductId: number;
  flagToTriggerChangeEvent = 0;

  constructor() { }


  ngOnChanges() {
    if(this.productsList && this.productsList.length <= this.limit)
      this.isMoreAvailable = false;
    else if(this.productsList && this.productsList.length == 0)
      this.isMoreAvailable = false;
    else
      this.isMoreAvailable = true;
  }


  ngOnInit(): void { }


  showMoreOptions() {
    if(this.limit == this.productsList.length) {
      this.limit = 3;
      this.buttonLabel = "See More Options";
    }
    else {
      this.limit = this.productsList.length;
      this.buttonLabel = "See Less";
    }
  }

  
  openProductDetails(id) {
    this.flagToTriggerChangeEvent = this.flagToTriggerChangeEvent + 1;
    this.selectedProductId = id;
  }

}
