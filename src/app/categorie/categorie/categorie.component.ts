import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../service/categories.service';
import {Categorie} from '../../model/Categorie';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  userForm!: FormGroup;
  subCategoriesOrdi: Categorie[] = [];
  subCategoriesTel: Categorie[] = [];
  subCategoriesStock: Categorie[] = [];
  hello ="hello"

  constructor( private categoriesService : CategoriesService,) {
  }

  // tslint:disable-next-line:typedef
  suppSousCat(id: number) {
    (this.userForm.get('subCategories') as FormArray).removeAt(id);
  }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe(categories => {
        this.subCategoriesOrdi = categories.filter(subCat => subCat.parent != null && subCat.parent.name == 'Ordinateurs');
        this.subCategoriesTel = categories.filter(subCat => subCat.parent != null && subCat.parent.name == 'Telephones');
        this.subCategoriesStock = categories.filter(subCat => subCat.parent != null && subCat.parent.name == 'Stockage');
      }
    )
  }

}
