import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient) {
  }
  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl);
  }
  public save(posts: Post): Observable<Object> {
    return this.http.post(baseUrl, posts);
  }
  public delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`,id);
  }
 
}
