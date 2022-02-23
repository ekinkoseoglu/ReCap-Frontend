import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/ColorResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl: string = 'https://localhost:44391/api/colors/getall';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
