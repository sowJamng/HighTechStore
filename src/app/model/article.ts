import { Souscategorie } from './souscategorie';

export class Article {
  private _id;
 private _libelle:string;
  private _marque:string;
  private _prix:number;
  private _description:string;
  private _photo:string;
  private _souscategorie:Souscategorie;
  constructor(id:number,libele:string,marque:string,prix:number,description:string,photo:string,souscategorie:Souscategorie){
    this._libelle=libele;
    this._description=description;
    this._marque=marque;
    this._photo=photo;
    this._souscategorie=souscategorie;
    this._prix=prix;
    this._id=id
  }

 public  get souscategorie() { return this._souscategorie;  }
 public get id(){return this._id}
 public get libelle (){return this._libelle}
 public get prix(){return this._prix;}
 public get description(){return this._description;}
 public get photo(){return this._photo;}
 public get marque(){return this._marque;}

}


