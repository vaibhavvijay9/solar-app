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


  constructor() { }


  ngOnChanges() {
    if(this.productsList && this.productsList.length <= this.limit)
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

}
