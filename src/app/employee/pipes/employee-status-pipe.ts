import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeStatusEnum } from '../enums/employee-status.enum';

@Pipe({
  name: 'employeeStatus',
})
export class EmployeeStatusPipe implements PipeTransform {
  transform(status: number): string {
    switch (status) {
      case EmployeeStatusEnum.ACTIVE:
        return 'Active';

      case EmployeeStatusEnum.OFF:
        return 'Off';

      case EmployeeStatusEnum.HOLIDAYS:
        return 'Holidays';

      default:
        return 'UNKOWN';
        break;
    }
  }
}
