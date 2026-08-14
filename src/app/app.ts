import { Component, signal } from '@angular/core';
import { EmployeeDashboard } from './employee/pages/employee-dashboard/employee-dashboard';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [EmployeeDashboard, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('employees-manager-app');
}
