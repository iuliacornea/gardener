import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlantListComponent } from './pages/plant/plant-list/plant-list.component';
import { AboutComponent } from './pages/about/about.component';
import { PlantIdentificationComponent } from './pages/plant/plant-identification/plant-identification.component';
import { GreenhouseDetailsComponent } from './pages/greenhouse/greenhouse-details/greenhouse-details.component';
import {PlantFormComponent} from './pages/plant/plant-form/plant-form.component';
import {LoginComponent} from './pages/login/login.component';
import {GardenComponent} from './pages/garden/garden.component';
import {SpecimenFormComponent} from './pages/garden/specimen-form/specimen-form.component';
import {BASE_PATH as GARDEN_API_BASE_PATH} from '@iuliacornea/gardener-api';
import {OrdersComponent} from './pages/orders/orders.component';
import {GreenhouseStatisticsComponent} from './pages/greenhouse-statistics/greenhouse-statistics.component';
import {OrderFormComponent} from './pages/order-form/order-form.component';

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
  },
  {
    path: 'greenhouse',
    component: GreenhouseDetailsComponent
  },
  {
    path: 'add-plant',
    component: PlantFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'garden',
    component: GardenComponent
  },
  {
    path: 'specimen-form',
    component: SpecimenFormComponent
  },
  {
    path: 'specimen-form/:specimenId',
    component: SpecimenFormComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'specimen-statistics/:specimenId',
    component: GreenhouseStatisticsComponent
  },
  {
    path: 'gardener-statistics/:gardenerId',
    component: GreenhouseStatisticsComponent
  },
  {
    path: 'order',
    component: OrderFormComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: GARDEN_API_BASE_PATH,
      useValue: 'https://gardener-backend.herokuapp.com/api'
    }
  ]
})
export class AppRoutingModule { }
