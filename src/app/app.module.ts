import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { AdmingameComponent } from './admingame/admingame.component';
import { RouteModule } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent,
    AdmingameComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    RouteModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
