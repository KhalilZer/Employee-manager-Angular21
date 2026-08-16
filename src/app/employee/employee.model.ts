export interface Employee {
  id?: number;
  full_name: string;
  email: string;
  salary: number;
  hire_date: Date;
  status: number;
  photo: string | null;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

export interface ServerResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
