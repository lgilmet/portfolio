import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MtlAquariumSocietyComponent } from './mtl-aquarium-society/mtl-aquarium-society.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MtlAquariumSocietyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
