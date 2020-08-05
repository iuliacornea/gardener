import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlantListComponent } from './pages/plant/plant-list/plant-list.component';
import { AboutComponent } from './pages/about/about.component';
import { PlantIdentificationComponent } from './pages/plant/plant-identification/plant-identification.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'plant-list',
    component: PlantListComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'plant-identification',
    component: PlantIdentificationComponent
  }//,
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
