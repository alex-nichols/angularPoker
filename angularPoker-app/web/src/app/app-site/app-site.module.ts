import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSiteRoutingModule } from './app-site-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    AppSiteRoutingModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent]
})
export class AppSiteModule { }
