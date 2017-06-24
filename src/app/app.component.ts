import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hero:string;
  price:number;
  buys(event:number){
    console.log("我是父组件，我已经接收到事件");
    console.log(event);
    this.price=event;
  }
  whos(event:string){
    console.log("hero is ",event);
    this.hero=event
  }
}
