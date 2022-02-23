import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/CustomerResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = 'https://localhost:44391/api/customers/getall';
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.http.get<CustomerResponseModel>(this.apiUrl);
  }
}
