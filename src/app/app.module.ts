import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HomePageModule } from './pages/home/home.module';
import { QuotePageModule } from './pages/quote/quote.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HomePageModule, 
    QuotePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
