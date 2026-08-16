import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeStatusEnum } from '../../enums/employee-status.enum';
import { EmployeeStatusPipe } from '../../pipes/employee-status-pipe';
import { EmployeeService } from '../../employee.service';
import { maxTodayvalidator } from '../../validators/max-today.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-create',
  imports: [ReactiveFormsModule, EmployeeStatusPipe],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css',
})
export class EmployeeCreate {
  form = new FormGroup({
    full_name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(5), Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email, Validators.required],
    }),
    salary: new FormControl(1000, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(800)],
    }),
    hire_date: new FormControl(new Date(), {
      nonNullable: true,
      validators: [Validators.required, maxTodayvalidator()],
    }),
    status: new FormControl(1, { nonNullable: true }),
    photo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.pattern(/^https?:\/\/.+$/), Validators.required],
    }),
  });
  employeeStatuses = Object.values(EmployeeStatusEnum).filter((value) => typeof value === 'number');

  employeeService = inject(EmployeeService);
  toastr = inject(ToastrService);

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log(this.form.markAllAsDirty());
      return;
    }
    this.employeeService.createEmployee(this.form.getRawValue()).subscribe((response) => {
      if (!response.success) {
        this.toastr.error(response.message, 'Cannot Create Employee');
        return;
      }

      this.toastr.success(response.message, 'Success');

      console.log(response);
    });
  }
}
