import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { MtlAquariumSocietyComponent } from "./mtl-aquarium-society/mtl-aquarium-society.component";
import { CvComponent } from "./portfolio/cv/cv.component";
import { ProjectsComponent } from "./portfolio/projects/projects.component";
import { HomeComponent } from "./portfolio/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: PortfolioComponent,
    children: [
      { path: "", redirectTo: "portfolio", pathMatch: "full" },
      {
        path: "portfolio",
        component: HomeComponent,
        data: { animation: "isLeft" }
      },
      {
        path: "portfolio/cv",
        component: CvComponent,
        data: { animation: "isMiddle" }
      },
      {
        path: "portfolio/projets",
        component: ProjectsComponent,
        data: { animation: "isRight" }
      }
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
