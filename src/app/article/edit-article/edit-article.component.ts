import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boutique } from 'src/app/model/boutique';
import { Categories } from 'src/app/model/categories';
import { Scategorie } from 'src/app/model/souscategorie';
import { ArticlesService } from 'src/app/service/articles.service';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { ScategoriesService } from 'src/app/service/scategories.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  scategories:Scategorie[]=[];
  categories:Categories[]=[];
  boutiques:Boutique[]=[];
  article:any;
  constructor(private route: ActivatedRoute,private router:Router,private articleService:ArticlesService,private categorieService:CategoriesService,
    
  private scategorieService:ScategoriesService,private boutiqueService:BoutiqueService) { }

  ngOnInit(): void {
    this.article = this.route.snapshot.params['article'];
  }
  onUpdateArticle(value: any){ 
    this.articleService.updateArticle(value)
      .subscribe(data => { alert('mise a jour affectee avec succes');
      this.router.navigateByUrl('/articleslist');
      } , err => { console.log(err);
      });

  }
  loadCategories(){
    this.categorieService.getCategoriess().subscribe(data=>{
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
