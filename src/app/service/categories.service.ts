import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories';


@Injectable({
  providedIn: 'root'
})


export class CategoriesService {
  baseUrl ="http://localhost:8080/HighTechShopApi/rest/categories";

  constructor(private http:HttpClient) { }
  getCategories():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  addCategorie(categorie:Categories){
   this.http.post<Categories>(this.baseUrl, categorie);
  }

  updateCategorie(categorie:Categories){
      this.http.put(this.baseUrl, categorie);
  }

  deleteCategorie(id:number){
    this.http.delete(this.baseUrl+'/'+id);
  }
}
