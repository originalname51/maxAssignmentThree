import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HiddenButtonComponent } from './hidden-button/hidden-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HiddenButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
