import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {}

  public getPosts(user_id: any): Observable<{ data: '' }> {
    return this._http.get<{ data: '' }>('/api/users/getOneUser/' + user_id);
  }

  public addPostsData(postObj: any): Observable<[]> {
    return this._http.post<[]>('/api/post/addPost/', postObj);
  }
}
