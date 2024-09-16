import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

export const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardHomeComponent,
      },
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
];
