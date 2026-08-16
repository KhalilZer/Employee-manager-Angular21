import { Component, signal } from '@angular/core';
import { EmployeeDashboard } from './employee/pages/employee-dashboard/employee-dashboard';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
