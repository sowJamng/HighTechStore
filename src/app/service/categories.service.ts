import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Categorie} from '../model/Categorie';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly rootUrl = 'http://localhost:8080/shop/rest/category';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.rootUrl + '/categories');
  }

  postNewCategory(selectedParent: number, subcategories:String[]) : Observable<any>{
    const requestBody = {
      idParent: selectedParent,
      listeSousCategories: subcategories,

    };
    console.log("request body = ", requestBody);
    return this.http.post<Categorie[]>(this.rootUrl+'/add', requestBody);
  }
}
