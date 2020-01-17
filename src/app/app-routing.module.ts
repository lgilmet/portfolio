import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { MtlAquariumSocietyComponent } from "./mtl-aquarium-society/mtl-aquarium-society.component";
import { CvComponent } from "./portfolio/cv/cv.component";
import { ProjectsComponent } from "./portfolio/projects/projects.component";

const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent,
    children: [
      { path: "portfolio/cv", component: CvComponent },
      { path: "portfolio/projets", component: ProjectsComponent }
    ]
  },
  //{ path: "", component: MtlAquariumSocietyComponent },
  { path: "mtlaquariumsociety", component: MtlAquariumSocietyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
