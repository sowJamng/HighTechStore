import { Boutique } from "./boutique";
import { Marque } from "./marque";
import { Souscategorie } from "./souscategorie";

export interface Articles {
    id:number;
    libelle:string;
    marque:Marque ;
    prix:number;
    categorie:Souscategorie;
    photo:string;
    boutique:Boutique;
    description: string;
}
