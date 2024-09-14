import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];
