import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee, ServerResponse } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = environment.apiUrl;
  httpClient = inject(HttpClient);

  getEmployees() {
    return this.httpClient.get<ServerResponse<Employee[]>>(`${this.baseUrl}/employees`);
  }

  createEmployee(payload: Employee) {
    return this.httpClient.post<ServerResponse<Employee>>(`${this.baseUrl}/employees`, payload);
  }

  getEmployee(employeeId: number) {
    return this.httpClient.get<ServerResponse<Employee>>(`${this.baseUrl}/employees/${employeeId}`);
  }

  updateEmployee(employeeId: number, payload: Employee) {
    return this.httpClient.put<ServerResponse<boolean>>(
      `${this.baseUrl}/employees/${employeeId}`,
      payload,
    );
  }
  deleteEmployee(employeeId: number) {
    return this.httpClient.delete<ServerResponse<null>>(`${this.baseUrl}/employees/${employeeId}`);
  }
}
