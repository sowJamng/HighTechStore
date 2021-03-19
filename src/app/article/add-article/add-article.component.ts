import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/categories';
import { ArticleService } from 'src/app/service/article.service';
import { Scategorie} from '../../model/souscategorie';

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
  categorie={nom:''}
  scategorie:Scategorie={id:1,nom:''};

  constructor(private articleService: ArticleService) {}
  ngOnInit() {
  }
  onAddArticle(value: any) {
    this.articleService.addArticle(value);
 }
 onNewProduct() {
   this.mode = 1;
 }
 
}
