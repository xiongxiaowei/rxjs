import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  data:object;
  constructor(private http:Http) {
    this.http.get('/api/profile').map(res=>res.json()).subscribe(i=>this.data=i)
  }
  ngOnInit() {

  }

}
