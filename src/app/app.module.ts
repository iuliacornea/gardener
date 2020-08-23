import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {PlantCardComponent} from './pages/plant/plant-card/plant-card.component';
import {PlantListComponent} from './pages/plant/plant-list/plant-list.component';
import {PlantIdentificationComponent} from './pages/plant/plant-identification/plant-identification.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThemeSwitcherComponent} from './header/theme-switcher/theme-switcher.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PlantIdentificationDialog} from './pages/plant/plant-identification/plant-identification.component';
import {PlantFeaturesFormComponent} from './pages/plant/plant-features-form/plant-features-form.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {GreenhouseDetailsComponent} from './pages/greenhouse/greenhouse-details/greenhouse-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BASE_PATH} from '@com.iulia/gardener-api';
import {ApiModule as GardenerModule} from '@com.iulia/gardener-api';
import {PlantGrowingConfigsFormComponent} from './pages/plant/plant-growing-configs-form/plant-growing-configs-form.component';
import { PlantFormComponent } from './pages/plant/plant-form/plant-form.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PlantCardComponent,
    PlantListComponent,
    PlantIdentificationComponent,
    PlantIdentificationDialog,
    ThemeSwitcherComponent,
    PlantFeaturesFormComponent,
    GreenhouseDetailsComponent,
    PlantGrowingConfigsFormComponent,
    PlantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    GardenerModule
  ],
  entryComponents: [
    PlantIdentificationDialog
  ],
  providers: [
    {
      provide: BASE_PATH,
      useValue: '/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
