import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Articles } from '../model/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseUrl ="http://localhost:8080/shop/rest/articles";
  cart:number=0;

  private subject = new Subject<any>();
  constructor(private http:HttpClient) { }
  getArticles():Observable<any>{
    return this.http.get(this.baseUrl);

  }
  getArticle(id:number):Observable<any>{
    return this.http.get(this.baseUrl +'/'+id);
 }

  addArticle(article:Articles):Observable<any>{
    console.log(JSON.stringify(  article));
   return this.http.post<Articles>(this.baseUrl, article);


  }
  updateArticle(article:Articles):Observable<any>{
      return this.http.put(this.baseUrl, article);
  }
  deleteArticle(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }

  getArticleByMarque(marque:string):Observable<any>{
    return this.http.get(this.baseUrl+'/marque/'+marque);
  }
  getArticleBySousCat(sousCat:string):Observable<any>{
    if(sousCat.search("all")!=-1) return this.getArticles();
    return this.http.get(this.baseUrl+'/categorie/'+sousCat);
  }

sendClickEvent() {
  this.subject.next();
}
  getClickEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
