import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestieComponent } from './bestie/bestie/bestie.component';
import { HeaderComponent } from './core/header/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home/home.component';
import { BestieListaComponent } from './bestie-lista/bestie-lista/bestie-lista.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BestieComponent,
    HeaderComponent,
    HomeComponent,
    BestieListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
