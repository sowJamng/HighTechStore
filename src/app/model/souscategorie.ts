import { CategoriesService } from '../service/categories.service';
import { Categories } from './categories';
export class Souscategorie {
    _id:number;
    _nom:string;
    constructor(id:number,nom:string){
      this._id=id;
      this._nom=nom;

    }
   public get nom(){return this._nom;}
   public get id(){return this._id;}
}

export interface Scategorie{
  id:number;
  nom:string;
  //categorie:Categories;
}
