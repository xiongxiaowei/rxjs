import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";


@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  value:number;
  person:Array<any>=[];
  constructor() {

  }
  ngOnInit() {
    Observable.from([1,2,3,4,5]).delay(2000).subscribe(//2s后发射流
      x=> {
        console.log('the value is:', x);
        this.value=x;//aways 5
      }
    );

  }

}
