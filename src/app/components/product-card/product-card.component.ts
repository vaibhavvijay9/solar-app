import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productItem: any;

  constructor() { }

  ngOnInit(): void { }


  openDetailsModal(item){
    
  }

}
