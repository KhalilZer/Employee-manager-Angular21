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

  createEmployee(data: Employee) {
    return this.httpClient.post<ServerResponse<Employee>>(`${this.baseUrl}/employees`, data);
  }
}
