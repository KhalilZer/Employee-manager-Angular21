import { Component, input } from '@angular/core';
import { Employee } from '../../employee.model';
import { LucideTrash2, LucideEye, LucidePencil } from '@lucide/angular';
@Component({
  selector: 'app-table-actions',
  imports: [LucideTrash2, LucideEye, LucidePencil],
  templateUrl: './table-actions.html',
  styleUrl: './table-actions.css',
})
export class TableActions {
  //Icons
  employee = input.required<Employee>();

  deleteEmployee() {}
  viewEmployee() {}
  editEmployee() {}
}
//
