import { Component, effect, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeStatusEnum } from '../../enums/employee-status.enum';
import { EmployeeStatusPipe } from '../../pipes/employee-status-pipe';
import { EmployeeService } from '../../employee.service';
import { maxTodayvalidator } from '../../validators/max-today.validator';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../employee.model';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-create',
  imports: [ReactiveFormsModule, EmployeeStatusPipe],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  //Services
  employeeService = inject(EmployeeService);
  toastr = inject(ToastrService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  employeeId = input<number | null>(null);

  tryFetchEmployee = toSignal(
    toObservable(this.employeeId).pipe(
      map((id) => Number(id)),
      switchMap((employeeId) => this.employeeService.getEmployee(employeeId)),
      catchError((error) => {
        return of(error.error);
      }),
    ),
  );

  constructor() {
    effect(() => {
      const response = this.tryFetchEmployee();

      if (!response) {
        return;
      }

      if (!response.success) {
        this.toastr.error(response.message, `Employee with id ${this.employeeId()} not found`);
        this.router.navigate(['/']);
        return;
      }

      if (response.data) {
        this.form.patchValue(response.data);
      }
    });
  }

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

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    const employeeId = this.employeeId(); //It can be null on create mode

    if (employeeId) {
      //Update
      this.onUpdate(employeeId);
    } else {
      //Create
      this.onCreate();
    }
  }

  private onCreate() {
    this.employeeService.createEmployee(this.form.getRawValue()).subscribe((response) => {
      if (!response.success) {
        this.toastr.error(response.message, 'Cannot Create Employee');
        return;
      }

      this.toastr.success(response.message, 'Success');
    });
  }
  private onUpdate(employeeId: number) {
    this.employeeService
      .updateEmployee(employeeId, this.form.getRawValue())
      .subscribe((response) => {
        if (!response.success) {
          this.toastr.error(response.message, 'Cannot Update Employee');
          return;
        }

        this.toastr.success(response.message, 'Success');
      });
  }
}
