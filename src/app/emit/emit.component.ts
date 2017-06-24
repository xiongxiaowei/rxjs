import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-emit',
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.css']
})
export class EmitComponent implements OnInit {
  @Output('buy')
  fruit:EventEmitter<number>=new EventEmitter();
  @Output()
    who:EventEmitter<string>=new EventEmitter();
  price:number;
  hero:string

  constructor() {
    setInterval(()=>{
       this.price=Math.random()/2+2.5;
      this.hero=["罗斯福",'蒋介石','斯大林','丘吉尔','希特勒'][Math.floor(Math.random()*5)];
    },1000)

  }
  ngOnInit() {
  }
  emit(){
    console.log("已经emit出去")
    this.fruit.emit(this.price)
    this.who.emit(this.hero)
  }
}
