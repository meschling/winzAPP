import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { VineyardFormComponent } from './vineyard-form/vineyard-form.component';
import { VineyardDetailsComponent} from './vineyard-details/vineyard-details.component';
import { CalculationFormComponent } from './calculation-form/calculation-form.component';
import {RouterModule, Routes} from '@angular/router';
import {VineyardDashboardComponent} from './vineyard-dashboard/vineyard-dashboard.component';
import {PdfExportViewComponent} from './pdf-export-view/pdf-export-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'vineyard/form', component: VineyardFormComponent},
  { path: 'vineyard/dashboard', component: VineyardDashboardComponent},
  { path: 'vineyard/details', component: VineyardDetailsComponent},
  { path: 'calc', component: CalculationFormComponent },
  { path: 'export/pdf', component: PdfExportViewComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
