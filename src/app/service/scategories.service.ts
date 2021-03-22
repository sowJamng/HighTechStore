import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Souscategorie } from '../model/souscategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  baseUrl ="http://localhost:8080/HighTechShopApi/rest/sousCategories";

  constructor(private http:HttpClient) { }

  getScategories():Observable<any>{
    return this.http.get(this.baseUrl);
  }
  addScategorie(scategorie: Souscategorie){
   this.http.post<Souscategorie>(this.baseUrl, scategorie);
  }
  updateScategorie(scategorie: Souscategorie){
      this.http.put(this.baseUrl, scategorie);
  }
  deleteScategorie(id:number){
    this.http.delete(this.baseUrl+'/'+id);
  }
}
