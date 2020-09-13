import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FollowersService {
  constructor(private _http: HttpClient) {}

  public getFollowers(): Observable<{}> {
    return this._http.get<[]>('/api/users/getAllUser');
  }
}
