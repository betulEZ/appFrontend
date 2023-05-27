import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from './comment';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/comments';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(baseUrl);
  }
  get(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${baseUrl}?postId=`+postId);
  }
  public save(comments: Comment): Observable<Object> {
    return this.http.post(baseUrl, comments);
  }
}
