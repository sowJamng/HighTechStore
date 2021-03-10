import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  public currentProduct: any;
  public mode: number = 1;
 
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
