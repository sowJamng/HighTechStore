import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
keySearch:string="";
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
  }
  onSubmit(){
     return this.articleService.getArticleByNameOrMarque(this.keySearch,"");
  }

}
