import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingsDetailPageComponent } from './listings-detail-page/listings-detail-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyCurrency } from './pipes/currencyPipe';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingsDetailPageComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    NewListingsPageComponent,
    EditListingPageComponent,
    MyCurrency
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
