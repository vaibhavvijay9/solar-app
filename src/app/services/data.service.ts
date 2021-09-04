import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = "https://98b389d9-3f2c-431e-92a6-4fd9a942a8ef.mock.pstmn.io/quote";
  productsList: any;
  filteredList: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }


  getAllData() {
    return this.http.get<any>(this.apiUrl, this.httpOptions)
    .pipe(
      map(response => {
        this.productsList = response.data.quotes.product_quotes;
        return response;
      })
    );
  }


  getFilteredList(size) {
    this.filteredList = this.productsList.filter(product => product.volume >= size);
    return this.filteredList;
  }


  getSavedFilteredList() {
    return this.filteredList ? this.filteredList : [];
  }

}
