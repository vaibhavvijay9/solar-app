import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
declare var $: any;

@Component({
  selector: 'product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.scss']
})
export class ProductDetailsModalComponent implements OnInit {

  @Input() selectedProductId: any;
  @Input() flagToTriggerChangeEvent: any;

  productsList: any;
  selectedProduct: any;
  productIds : any = [];
  routeInfo: any;
  currentIndex: any;
  isFirst: boolean;
  isLast: boolean;
  updatedProductId: number;


  constructor(private dataService: DataService ,public router: Router) { }


  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.hasOwnProperty('flagToTriggerChangeEvent')) {
      this.updatedProductId = this.selectedProductId;
      this.currentIndex = 0;
      this.productsList = this.dataService.getSavedFilteredList();
      
      this.selectedProduct = this.productsList.filter(product => product.model_id == this.updatedProductId)[0];
      this.productIds = this.productsList.map(product => product.model_id);

      $('#productDetailsModal').modal('show');
      this.updateView();
    }
  }


  ngOnInit(): void { }


  updateView() {
    this.currentIndex = this.productIds.findIndex(element => element == this.updatedProductId);
    
    if(this.productsList.length == 1) {
      this.isFirst = true;
      this.isLast = true;
    } else if(this.currentIndex == 0 && this.currentIndex != this.productsList.length -1) {
      this.isFirst = true;
      this.isLast = false;
    }
    else if(this.currentIndex == this.productsList.length -1) {
      this.isLast = true;
      this.isFirst = false;
    }
    else {
      this.isLast = false;
      this.isFirst = false;
    }

    this.routeInfo = [
      { tabName: 'Product Overview', tabLink: 'overview/'+this.selectedProduct.model_id },
      { tabName: 'Product Specs', tabLink: 'specs/'+this.selectedProduct.model_id }
    ]
    this.router.navigate(['overview',this.selectedProduct.model_id]);
  }


  navigate(type) {
    if(type === 'PREV') {
      this.selectedProduct = this.productsList.filter(product => product.model_id == this.productIds[this.currentIndex - 1])[0];
    }
    else if(type === 'NEXT') {
      this.selectedProduct = this.productsList.filter(product => product.model_id == this.productIds[this.currentIndex + 1])[0];
    }

    this.updatedProductId = this.selectedProduct.model_id;
    this.updateView();
  }


  modalClosed() {
    this.router.navigate(['process']);
  }

}
