import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../service/categories.service';
import {Categorie} from '../../model/Categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: Categorie[] = [];
  subCategories: Categorie[] = [];

  constructor( private categoriesService : CategoriesService,) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(categories => this.categories=categories)
    this.categoriesService.getSubCategories().subscribe(categories => this.subCategories=categories)
  }

}
