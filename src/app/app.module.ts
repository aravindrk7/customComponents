import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectMultipleDropdownComponent } from './select-multiple-dropdown/select-multiple-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectMultipleDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
