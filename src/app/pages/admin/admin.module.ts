import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {ShareUiModule} from "../../share/ui/share-ui.module";
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareUiModule
  ]
})
export class AdminModule { }
