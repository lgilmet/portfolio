import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
// Documentation ngx-page-scroll https://www.npmjs.com/package/ngx-page-scroll

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
    AppRoutingModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
