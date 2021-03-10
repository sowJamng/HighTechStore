import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Articles } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseUrl ="http://localhost:8080/HighTechShopApi/rest/articles";

  constructor(private http:HttpClient) { }

  getArticles():Observable<Articles>{
    return this.http.get(this.baseUrl);
   
  }
  addArticle(article:Articles){
   this.http.post(this.baseUrl, JSON.stringify(article));
  }
  updateArticle(article:Articles){
      this.http.put(this.baseUrl, JSON.stringify(article));
  }
  deleteArticle(id:number){
    this.http.delete(this.baseUrl,id);
  }
}
