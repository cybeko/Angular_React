
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService
{
  constructor(private http: HttpClient) { }

  getData()
  {
    return this.http.get("assets/data.json")
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<any[]>('assets/albums.json').pipe(
      map(data => {
        console.log(data);
        return data.map(item => new Album(item.id, item.title));
      })
    );
  }
}