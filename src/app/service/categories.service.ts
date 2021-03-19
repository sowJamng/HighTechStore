import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly rootUrl = 'http://localhost:8080/shop/rest/category';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(this.rootUrl+'/categories');
  }

  postNewCategory(selectedParent: number, categoryName:String, subcategories:String[]) : Observable<any>{
    return this.http.post<any>(this.rootUrl+ '/'+ selectedParent+'/match/'+categoryName, subcategories);
  }
}
