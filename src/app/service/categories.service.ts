import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Categorie} from '../model/Categorie';
import {map} from 'rxjs/operators';
import { Categories } from '../model/categories';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly rootUrl = 'http://localhost:8080/HighTechShopApi/rest/category';
            baseUrl ="http://localhost:8080/HighTechShopApi/rest/categories";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private http:HttpClient) { }
  getCategoriess():Observable<any>{
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

  getAllCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.rootUrl + '/categories');
  }

  postNewCategory(selectedParent: number, subcategories:string[]) : Observable<any>{
    const requestBody = {
      idParent: selectedParent,
      listeSousCategories: subcategories,

    };
    console.log("request body = ", requestBody);
    return this.http.post<Categorie[]>(this.rootUrl+'/add', requestBody);
  }

  // service qui renvoie la liste des catégories
  getCategories():Observable<Categorie[]>{
    return this.getAllCategories().pipe(map(categories =>
      categories.filter(categorie => categorie.parent != null && categorie.parent.name == 'Tous')));
  }

  // service qui renvoie la liste des sous-catégories
  getSubCategories():Observable<Categorie[]>{
    return this.getAllCategories().pipe(map(categories =>
      categories.filter(categorie => categorie.parent != null && categorie.parent.name != 'Tous')));

  }
}
