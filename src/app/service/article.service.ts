
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Article } from '../model/article';
import { Souscategorie } from '../model/souscategorie';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:8080/HighTechShopApi/rest/articles';
  cart:number=0;
  articleget:Article[]=[];
  art:Article =new Article(0,'','',0,'','',new Souscategorie(0,''));
  articles:Article[]=[
    new Article(1,"HP","HP",500,"Ram 8GB disque 500Gb fr:2.5","../../../assets/images/ordis/bureau/b6.jpg",new Souscategorie(1,"PC Burreau")),
    new Article(2,"HP","HP",500,"Ram 8GB disque 500Gb fr:2.5","../../../assets/images/ordis/bureau/b4.jpg",new Souscategorie(1,"PC Burreau")),
    new Article(3,"Acer","Acer",500,"Ram 8GB disque 500Gb fr:2.5","../../../assets/images/ordis/bureau/b7.jpg",new Souscategorie(1,"PC Burreau")),
    new Article(4,"Dell","Dell",500,"Ram 8GB disque 500Gb fr:2.5","../../../assets/images/ordis/bureau/b2.jpg",new Souscategorie(1,"PC Burreau")),
    new Article(5,"Toshiba","Toshiba",500,"Ram 8GB disque 500Gb fr:2.5","../../../assets/images/ordis/bureau/b8.jpg",new Souscategorie(1,"PC Burreau")),
    new Article(6,"Sony","Sony",500,"Ram 8GB disque 500Gb fr:2.5","../../../assets/images/ordis/bureau/b3.jpg",new Souscategorie(1,"PC Burreau")),
    new Article(7,"Macbook","Macbook",650,"Ram 8GB disque 500Gb fr:2.5","../../../../assets/images/ordis/mack1.jpg",new Souscategorie(8,'PC Portable')),
 new Article(8, "Macbook pro","Macbook pro",750,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/ordis/mackpro.jpg",new Souscategorie(9,'PC Portable')),
   new Article(9,  "Acer","Acer",500,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/ordis/pc1.jpg",new Souscategorie(1,'PC Portable')),
    new Article(10,"Assus","Assus",600,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/ordis/pc2.jpg",new Souscategorie(2,'PC Portable')),
    new Article(11,"Lenovo","Lenovo",600,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/ordis/lenovo1.jpg",new Souscategorie(2,'PC Portable')),
    new Article(12,"Iphone 11","Apple",450,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/phones/smart/p3.jpg",new Souscategorie(2,'Smart Phone')),
    new Article(13,"Iphone 11 pro","Apple",400,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/phones/smart/p1.jpg",new Souscategorie(2,'Smart Phone')),
    new Article(14,"Iphone X","Apple",300,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/phones/smart/p2.jpg",new Souscategorie(2,'Smart Phone')),
    new Article(15,"Iphone 11","Apple",450,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/phones/smart/p3.jpg",new Souscategorie(2,'Smart Phone')),
    new Article(16,"Iphone 11 pro","Apple",400,"Ram 16GB disque 500Gb fr:2.5","../../../../assets/images/phones/smart/p1.jpg",new Souscategorie(2,'Smart Phone'))
];
constructor(private http:HttpClient) {}
getAricles(){
  return this.articles;
}
getArticleBySousCat(name:string,keySearch:string){
  this.articleget=[];
  this.articles.forEach(article=>{
  if((article.marque.toLowerCase().indexOf(keySearch.toLowerCase())!=-1||
  article.libelle.toLowerCase().indexOf(keySearch.toLowerCase())!=-1) &&
  article.souscategorie.nom.toLowerCase().search(name.toLowerCase())!=-1)
          this.articleget.push(article);
});
return this.articleget;
  }
  getArticleByNameOrMarque(search:string,name:string){
    return this.articles.filter(article=>{
      return ((article.marque.toLowerCase().indexOf(search.toLowerCase())!=-1||
      article.libelle.toLowerCase().indexOf(search.toLowerCase())!=-1) &&
      article.souscategorie.nom.toLowerCase().search(name.toLowerCase())!=-1);
    })
  }

private subject = new Subject<any>();
sendClickEvent() {
  this.subject.next();
}
getClickEvent(): Observable<any>{
  return this.subject.asObservable();
}

getArticle(id:number):Article{;
   this.articles.forEach(article=>{
     if(article.id==id){
       this.art=article;
     }});
     return this.art;
}

addArticle(article:any){
  this.http.post(this.baseUrl,article);
}
getAllarticles(){
  return this.http.get(this.baseUrl);
}
deleteArticle(id:number):Observable<any>{
  return this.http.delete(this.baseUrl+'/'+id);
}
updateArticle(article:Article):Observable<any>{
  return this.http.put(this.baseUrl,article);
}
}
