import { Component, inject, input } from '@angular/core';
import { Employee } from '../../employee.model';
import { LucideTrash2, LucideEye, LucidePencil } from '@lucide/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-actions',
  imports: [LucideTrash2, LucideEye, LucidePencil],
  templateUrl: './table-actions.html',
  styleUrl: './table-actions.css',
})
export class TableActions {
  router = inject(Router);
  employee = input.required<Employee>();

  deleteEmployee() {}
  viewEmployee() {
    this.router.navigate([`/employee/${this.employee().id}/details`]);
  }
  editEmployee() {}
}
//
