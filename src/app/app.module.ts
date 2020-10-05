import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BbComponent } from './components/bb/bb.component';
import { AsdfComponent } from './components/asdf/asdf.component';

@NgModule({
  declarations: [
    AppComponent,
    BbComponent,
    AsdfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
