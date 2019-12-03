import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MtlAquariumSocietyComponent } from './mtl-aquarium-society/mtl-aquarium-society.component';


const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'mtlaquariumsociety', component: MtlAquariumSocietyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
