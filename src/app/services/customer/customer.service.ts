import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = 'https://localhost:44391/api/customers/getall';
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.http.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
