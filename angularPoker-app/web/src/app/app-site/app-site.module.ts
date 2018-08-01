import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSiteRoutingModule } from './app-site-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    AppSiteRoutingModule,
    MDBBootstrapModule,
    UserModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent]
})
export class AppSiteModule { }
