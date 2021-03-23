import { Boutique } from './../../model/boutique';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from 'src/app/model/articles';
import { Scategorie } from 'src/app/model/souscategorie';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  article={
    id:1,
    libelle:'',
    marque:'' ,
    prix:1,
    categorie: { id: 1, nom: '',categorie:{id:1,nom:''} },
    photo:'',
    boutique:{  id:1,  desc:'', phone:'',email:'', adress:''  },
    description: ''
  };
  articles:Articles[]=[];
  constructor(private articleService:ArticlesService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  onDeleteArticles(id:number) {
    this.articleService.deleteArticle(id);
    this.reloadData();
    this.router.navigateByUrl('/articleslist');
 }
 onUpdateArticles(article:any) {
  this.router.navigate(['details', article]);
}
 reloadData(){
   this.articleService.getArticles().subscribe(data=>{
     console.log(data);
     this.articles=data;
   },err=>console.log(err));
 }

}
