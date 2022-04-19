import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from './../../models/tokenModel';
import { Observable } from 'rxjs';
import { LoginModel } from '../../models/Auth/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupModel } from 'src/app/models/Auth/registerModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  globalApi: string = 'https://localhost:44391/api/auth/';
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let localApi = this.globalApi + 'login';
    return this.http.post<SingleResponseModel<TokenModel>>(
      localApi,
      loginModel
    );
  }

  register(
    registerModel: SignupModel
  ): Observable<SingleResponseModel<TokenModel>> {
    let localApi = this.globalApi + 'register';
    return this.http.post<SingleResponseModel<TokenModel>>(
      localApi,
      registerModel
    );
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }
}
