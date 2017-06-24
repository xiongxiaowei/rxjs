import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor() {

    Observable.fromEvent(document,'mousemove').subscribe(
      (e: MouseEvent)=>{
        console.log(e);
        const box1=document.querySelector('#box1');
        box1.innerHTML="当前坐标(x,y):("+e.clientX+','+e.clientY+')';
      }
    )

  }
  ngOnInit() {
  }
}
