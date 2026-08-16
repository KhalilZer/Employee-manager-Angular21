import { Component, inject } from '@angular/core';
import { TableEmployee } from '../../components/table-employee/table-employee';
import { EmployeeService } from '../../employee.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee-dashboard',
  imports: [TableEmployee, AsyncPipe],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.css',
})
export class EmployeeDashboard {
  employeeService = inject(EmployeeService);

  employeeList$ = this.employeeService.getEmployees();
}
