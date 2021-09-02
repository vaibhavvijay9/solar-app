import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private dataService: DataService) {}

  
  ngOnInit(){
    // this.dataService.getAllData().subscribe(response => {
    //   console.log(response);
    //   // this.users = response;
    // })
  }
  
}
