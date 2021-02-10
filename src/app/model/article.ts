import { Souscategorie } from "./souscategorie";

export class Article {
 libelle:string;
  marque:string;
  prix:number;
  description:string;
  photo:string;
  souscategorie:Souscategorie;
  constructor(libelle:string,marque:string,prix:number,description:string,photo:string,souscategorie:Souscategorie){
  this.libelle=libelle;
  this.marque=marque;
  this.prix=prix;
  this.description=description;
  this.photo=photo;
  this.souscategorie=souscategorie;
  }

}
