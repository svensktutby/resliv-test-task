import axios, { AxiosResponse } from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const employeesApi = {
  getEmployees(): Promise<AxiosResponse<ResponseType<Array<UserType>>>> {
    return API.get<ResponseType<Array<UserType>>>('/users?per_page=12');
  },
  deleteEmployee(id: number): Promise<AxiosResponse> {
    return API.delete(`/users/${id}`);
  },
  addEmployee(name: string): Promise<AxiosResponse<UserResponseType>> {
    const user = {
      name,
      job: 'developer',
    };

    return API.post<UserResponseType>(`/users`, user);
  },
};

/** Types */
export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserResponseType = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

export type ResponseType<D = Array<Record<string, unknown>>> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: D;
};
