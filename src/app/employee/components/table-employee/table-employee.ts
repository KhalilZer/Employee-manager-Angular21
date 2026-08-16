import { Component, Input } from '@angular/core';
import { Employee } from '../../employee.model';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { EmployeeStatusPipe } from '../../pipes/employee-status-pipe';
import { EmployeeStatusEnum } from '../../enums/employee-status.enum';

@Component({
  selector: 'app-table-employee',
  imports: [DatePipe, CurrencyPipe, EmployeeStatusPipe],
  templateUrl: './table-employee.html',
  styleUrl: './table-employee.css',
})
export class TableEmployee {
  @Input({ required: true }) EmployeesList!: Employee[];
  EmployeeStatus = EmployeeStatusEnum;
}
