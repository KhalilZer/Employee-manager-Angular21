import { Routes } from '@angular/router';
import { EmployeeDashboard } from './employee/pages/employee-dashboard/employee-dashboard';
import { EmployeeForm } from './employee/pages/employee-form/employee-form';
import { EmployeeDetails } from './employee/pages/employee-details/employee-details';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: EmployeeDashboard,
  },
  {
    path: 'create',
    component: EmployeeForm,
  },
  {
    path: `employee/:id/details`,
    component: EmployeeDetails,
  },
  {
    path: `employee/:employeeId/edit`,
    component: EmployeeForm,
  },
];
