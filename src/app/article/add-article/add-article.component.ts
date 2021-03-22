import { Marque } from './../../model/marque';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/categories';
import { ArticleService } from 'src/app/service/article.service';
import { Scategorie} from '../../model/souscategorie';
import {ScategoriesService} from 'src/app/service/scategories.service';
import {CategoriesService} from 'src/app/service/categories.service';
import { Articles } from 'src/app/model/articles';
import { ArticlesService } from 'src/app/service/articles.service';
import { Boutique } from 'src/app/model/boutique';
import { BoutiqueService } from 'src/app/service/boutique.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  public currentProduct: any;
  public mode: number = 1;
  scategories:Scategorie[]=[];
  categories:Categories[]=[];
  categorie:Categories={id:1,nom:''}
  scategorie:Scategorie={id:1,nom:''};
  article:any;
  articles:Articles[]=[];
  boutique:Boutique={id:1,desc:'',phone:'',email:'',adress:''};
  boutiques:Boutique[]=[];
  constructor(private articleService: ArticlesService,private scategorieService:ScategoriesService,
    private  ctegorieService: CategoriesService ,private boutiqueService:BoutiqueService) {}

  ngOnInit() {
    this.reloadData();
    this.loadCategories();
    this.loadSousCategories();
    this.loadBoutiques();
  }
  onAddArticle(article:Articles) {
    console.log(article);
    this.articleService.addArticle(article);
 }

 reloadData() {
   this.articleService.getArticles().subscribe(data=>{
     this.articles=data;
   },err=>console.log(err))
 }
 loadCategories(){
   this.ctegorieService.getCategories().subscribe(data=>{
     this.categories=data;
   },err=>console.log(err))
 }
 loadSousCategories(){
  this.scategorieService.getScategories().subscribe(data=>{
    this.scategories=data;
  },err=>console.log(err))
}
loadBoutiques(){
  this.boutiqueService.getBoutiques().subscribe(data=>{
    this.boutiques=data;
  },err=>console.log(err))
}
}
