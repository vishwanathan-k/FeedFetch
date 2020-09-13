import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private _http: HttpClient) { }

  public getFeeds():Observable<[]> {
    return this._http.get<[]>("/api/users/getAllUser");
  }

  public addfollower(followObj):Observable<{data:''}> {
    return this._http.post<{data:''}>("/api/userFollowers/addFollowers",followObj);
  }
  
}
