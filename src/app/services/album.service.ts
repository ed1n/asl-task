import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private APIUrl: String = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllAlbums() {
    return this.http.get(`${this.APIUrl}/albums`)
      .pipe(
        retry(1),
        catchError((error) => {
          return throwError('The process of retrieving albums failed!');
        })
      );
  }

  getAlbumById(id: Number) {
    return this.http.get(`${this.APIUrl}/albums/${id}`)
      .pipe(
        retry(1),
        catchError((error) => {
          return throwError(`The process of retrieving album with ID ${id} failed!`);
        })
      );
  }

  getAlbumPhotos(id: Number) {
    return this.http.get(`${this.APIUrl}/albums/${id}/photos`)
      .pipe(
        retry(1),
        catchError((error) => {
          return throwError(`The process of retrieving photos of album with ID ${id} failed!`);
        })
      );
  }
}
