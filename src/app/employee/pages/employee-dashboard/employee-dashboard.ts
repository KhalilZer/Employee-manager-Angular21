import { Component } from '@angular/core';
import { TableEmployee } from '../../components/table-employee/table-employee';

@Component({
  selector: 'app-employee-dashboard',
  imports: [TableEmployee],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css',
})
export class EmployeeDashboard {}
