import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { VineyardFormComponent } from './vineyard-form/vineyard-form.component';
import { VineyardDetailsComponent } from './vineyard-details/vineyard-details.component';
import { CalculationFormComponent } from './calculation-form/calculation-form.component';
import {FormsModule} from '@angular/forms';
import { VineyardDashboardComponent } from './vineyard-dashboard/vineyard-dashboard.component';
import { PdfExportViewComponent } from './pdf-export-view/pdf-export-view.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    VineyardFormComponent,
    VineyardDetailsComponent,
    CalculationFormComponent,
    VineyardDashboardComponent,
    PdfExportViewComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
