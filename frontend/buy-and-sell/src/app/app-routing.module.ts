import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
