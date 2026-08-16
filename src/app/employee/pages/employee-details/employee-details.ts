import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { EmployeeService } from '../../employee.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { EmployeeStatusPipe } from '../../pipes/employee-status-pipe';

@Component({
  selector: 'app-employee-details',
  imports: [CurrencyPipe, DatePipe, EmployeeStatusPipe],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
  activatedRoute = inject(ActivatedRoute);

  employeeService = inject(EmployeeService);
  employee = toSignal(
    this.activatedRoute.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((employeeId) => this.employeeService.getEmployee(employeeId)),
      map((employeeResponse) => employeeResponse.data),
    ),
  );
}
