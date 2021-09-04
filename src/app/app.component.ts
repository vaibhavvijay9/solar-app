import { Component, OnInit, ViewChild } from '@angular/core';
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
  isInitial: boolean = true;

  @ViewChild('productsListRef') productsListRef;

  constructor(private dataService: DataService, public router: Router) {}

  
  ngOnInit(){
    this.dataService.getAllData().subscribe(response => {
      this.productsList = response.data.quotes.product_quotes;
      this.filterList(50);
      this.isInitial = false;
    })

    this.router.navigate(['process']);
  }


  filterList(size) {
    this.filteredList = this.dataService.getFilteredList(size);

    if(this.productsListRef && !this.isInitial)
      this.productsListRef.nativeElement.scrollIntoView();  // scroll to list on Size slider change  (see effect on mobile)
  }


  setSizeAndFilter(event) {
    if(event)
      this.filterList(event);
  }
  
}
