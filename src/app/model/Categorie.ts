export interface Categorie{
  id:number
  parent:Categorie
  name:string
}


export interface SousCategorie{
  idParent:number
  name:string
}
