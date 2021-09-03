import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  heaterSize: number = 50;
  isEmergency: number = 1;
  sizeFilter = new Subject<string>();

  @Output() public sendSizeValue = new EventEmitter();


  constructor() { 
    this.sizeFilter.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(value => {
        this.setSizeAndFilter(value);
      });
  }


  ngOnInit(): void { }


  setSizeAndFilter(value) {
    this.sendSizeValue.emit(value);
  }

}
