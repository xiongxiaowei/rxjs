import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
  value:number;
  values:number[]=[];
  constructor() {
    Observable.range(1,20)
      .subscribe(
        value=>{
          console.log('the value is',value);
          this.value=value;
          this.values.push(value)
        },
        err=>console.log('the err is',err),
        ()=>console.log('the stream is completed')
      )
  }

  ngOnInit() {
  }

}
