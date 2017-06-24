import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RangeComponent } from './range/range.component';
import { FromComponent } from './from/from.component';
import { EventComponent } from './event/event.component';
import { EmitComponent } from './emit/emit.component';
import { PromiseComponent } from './promise/promise.component';
import {HttpModule} from "@angular/http";
import { Promise1Component } from './promise1/promise1.component';
import { AbmComponent } from './abm/abm.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RangeComponent,
    FromComponent,
    EventComponent,
    EmitComponent,
    PromiseComponent,
    Promise1Component,
    AbmComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
