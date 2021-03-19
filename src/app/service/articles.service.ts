import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Articles } from '../model/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseUrl ="http://localhost:8080/HighTechShopApi/rest/articles";

  constructor(private http:HttpClient) { }
  getArticles():Observable<any>{
    return this.http.get(this.baseUrl);

  }
  addArticle(article:Articles){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {
      headers: httpHeaders
         }; 
   this.http.post(this.baseUrl, article,options);
  }
  updateArticle(article:Articles){
      this.http.put(this.baseUrl, article);
  }
  deleteArticle(id:number){
    this.http.delete(this.baseUrl+'/'+id);
  }
}
