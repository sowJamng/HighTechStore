import { Boutique } from "./boutique";
import { Scategorie } from "./souscategorie";

export interface Articles {
    id:number;
    libelle:string;
    marque:string ;
    prix:number;
    scategorie:Scategorie;
    photo:string;
    boutique:Boutique;
    description: string;
    quantity:number;
}
