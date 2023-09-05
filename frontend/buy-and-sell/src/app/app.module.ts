import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingsDetailPageComponent } from './listings-detail-page/listings-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingsDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
