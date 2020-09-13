import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public registerUser(registeruser: any): Observable<{ data: '' }> {
    return this.http.post<{ data: '' }>('/api/auth/signUp', registeruser);
  }
}
