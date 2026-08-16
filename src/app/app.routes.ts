import { Routes } from '@angular/router';
import { EmployeeDashboard } from './employee/pages/employee-dashboard/employee-dashboard';
import { EmployeeCreate } from './employee/pages/employee-create/employee-create';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: EmployeeDashboard,
  },
  {
    path: 'create',
    component: EmployeeCreate,
  },
];
