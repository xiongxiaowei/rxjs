import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Component({
  selector: 'app-promise1',
  templateUrl: './promise1.component.html',
  styleUrls: ['./promise1.component.css']
})
export class Promise1Component implements OnInit {
  profile:Observable<any>;
  constructor(private http:Http) {
    this.profile=this.http.get('/api/profile').map(res=>res.json())
  }

  ngOnInit() {
  }

}
