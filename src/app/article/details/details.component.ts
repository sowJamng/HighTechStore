import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { Souscategorie } from 'src/app/model/souscategorie';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number=0;
  article:Article=new Article(0,'','',0,'','',new Souscategorie(0,''));
  constructor(private route: ActivatedRoute,private router: Router,private articleService:ArticleService) { }
 ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.article= this.articleService.getArticle(this.id)

  }

  list(){
    this.router.navigate(['home']);
  }
  commander(){
    alert("votre comande a ete bien prie en compte ")
  }
}
