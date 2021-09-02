import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl: string = "https://98b389d9-3f2c-431e-92a6-4fd9a942a8ef.mock.pstmn.io/quote";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) { }


  getAllData() {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }


  // getData(): any {
  //   return window.fetch(this.url, {
  //     method: "GET"
  //   })
  //   .then((response: any) => {
  //     console.log(response);
  //     return Promise.resolve(response);
  //   })
  //   .catch((error) => {
  //       console.log(error.message);
  //       // if you return error.message here, the consumer won't know there is a problem
  //       // you need to rethrow the error so it can be catched by the consumer
  //       throw error;
  //   });
  // }

}
