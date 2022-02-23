import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/RentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44391/api/rentals/getall';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
