import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  productsList: any;
  filteredList: any;

  constructor(private dataService: DataService, public router: Router) {}

  
  ngOnInit(){
    this.dataService.getAllData().subscribe(response => {
      this.productsList = response.data.quotes.product_quotes;
      this.filterList(50);
    })

    this.router.navigate(['process']);
  }


  filterList(size) {
    this.filteredList = this.dataService.getFilteredList(size);
  }


  setSizeAndFilter(event) {
    if(event)
      this.filterList(event);
  }
  
}
