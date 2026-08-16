import { Routes } from '@angular/router';
import { EmployeeDashboard } from './employee/pages/employee-dashboard/employee-dashboard';
import { EmployeeCreate } from './employee/pages/employee-create/employee-create';
import { EmployeeDetails } from './employee/pages/employee-details/employee-details';

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
  {
    path: `employee/:id/details`,
    component: EmployeeDetails,
  },
];
