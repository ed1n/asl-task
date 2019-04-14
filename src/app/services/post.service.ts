import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private APIUrl: String = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`${this.APIUrl}/posts`)
      .pipe(
        retry(1),
        catchError((error) => {
          return throwError('The process of retrieving posts failed!');
        })
      );
  }

  getPostById(id: Number) {
    return this.http.get(`${this.APIUrl}/posts/${id}`)
      .pipe(
        retry(1),
        catchError((error) => {
          return throwError(`The process of retrieving post with ID ${id} failed!`);
        })
      );
  }

  getPostComments(id: Number) {
    return this.http.get(`${this.APIUrl}/posts/${id}/comments`)
      .pipe(
        retry(1),
        catchError((error) => {
          return throwError(`The process of retrieving comments of post with ID ${id} failed!`);
        })
      );
  }
}
