import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  
  productId: any;
  productsList: any;
  selectedProduct: any;


  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('productId');
      this.setData();
    });
  }


  ngOnInit(): void { }


  setData() {
    this.productsList = this.dataService.getSavedFilteredList();
    this.selectedProduct = this.productsList.filter(product => product.model_id == this.productId)[0];
  }

}
