import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productItem: any;
  @Output() public openProductDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }


  openDetailsModal(modelId){
    this.openProductDetails.emit(modelId);
  }

}
