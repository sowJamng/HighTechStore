import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from 'src/app/model/articles';
import { ArticlesService } from '../../service/articles.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number=0;
  articles:Articles[]=[];
  article:any
  constructor(private route: ActivatedRoute,private router: Router,private articleService:ArticlesService) { }
 ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.getArticle(this.id);
    console.log(this.article);
    this.getSimilaire();

  }
  getArticle(id:number){
    this.articleService.getArticle(this.id).subscribe(data => {
      this.article=data;
    },err=>console.log(err))
  }
  list(){
    this.router.navigate(['home']);
  }
  commander(){
    alert("votre comande a ete bien prie en compte ")
  }

  getSimilaire(){
    this.articleService.getArticleByMarque(this.article.marque).subscribe(data=>{
      this.articles=data;
      console.log(data);
    },err=>console.log(err))
  }
}
