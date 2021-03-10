import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../model/article';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PcportableService {
  url = 'http://localhost:3000/Articles';
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.url);

}
}
