import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPageScrollModule } from "ngx-page-scroll";
// Documentation ngx-page-scroll https://www.npmjs.com/package/ngx-page-scroll
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { MtlAquariumSocietyComponent } from "./mtl-aquarium-society/mtl-aquarium-society.component";
import { CvComponent } from "./portfolio/cv/cv.component";
import { ProjectsComponent } from "./portfolio/projects/projects.component";
import { HomeComponent } from "./portfolio/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MtlAquariumSocietyComponent,
    CvComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
