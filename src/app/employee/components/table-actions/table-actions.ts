import { Component, inject, input, output, Output } from '@angular/core';
import { Employee } from '../../employee.model';
import { LucideTrash2, LucideEye, LucidePencil } from '@lucide/angular';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-table-actions',
  imports: [LucideTrash2, LucideEye, LucidePencil],
  templateUrl: './table-actions.html',
  styleUrl: './table-actions.css',
})
export class TableActions {
  //Services
  router = inject(Router);
  toastr = inject(ToastrService);
  employeeService = inject(EmployeeService);

  employee = input.required<Employee>();
  refreshTable = output<void>();

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee().id!).subscribe((response) => {
      if (!response.success) {
        this.toastr.error(response.message, 'Error');
      }
      this.toastr.success(response.message, 'Success');
      this.refreshTable.emit();
    });
  }
  viewEmployee() {
    this.router.navigate([`/employee/${this.employee().id}/details`]);
  }
  editEmployee() {
    this.router.navigate([`/employee`, this.employee().id, 'edit']);
  }
}
//
