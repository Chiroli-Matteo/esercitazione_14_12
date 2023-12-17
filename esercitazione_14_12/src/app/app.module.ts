;
import { 3Component } from './3/3.component';
import { 2Component } from './2/2.component'import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { 1Component } from './1/1.component';

@NgModule({
  declarations: [
    AppComponent,
    1Component, 2Component, 3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
