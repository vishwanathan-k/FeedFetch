import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public loginUser(loginuser: any): Observable<{ data: '' }> {
    return this.http.post<{ data: '' }>('/api/auth/signIn', loginuser);
  }
}
