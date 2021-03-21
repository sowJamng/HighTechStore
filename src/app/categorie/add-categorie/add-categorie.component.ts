import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../service/categories.service';
import {Categorie} from '../../model/Categorie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  userForm: FormGroup;
  // Product Names
  //Produits: any = ['Ordinateur', 'Telephonie', 'Accessoire', 'Stockage'];
  categories: Categorie[] = [];


  constructor(
    private fb: FormBuilder,
    private categoriesService : CategoriesService,
    private router : Router,

  ) {
    this.userForm = this.fb.group({
      categorie: ['',[Validators.required]],
      subCategories: this.fb.array([
        this.fb.control('',[Validators.required]),
      ])
    });
  }

  addCategory(): void {
    (this.userForm.get('subCategories') as FormArray).push(
      this.fb.control(null)
    );
  }

  removeCategory(index: number) {
    (this.userForm.get('subCategories') as FormArray).removeAt(index);
  }

  getSubCategoriesFormControls(): AbstractControl[] {
    return (<FormArray> this.userForm.get('subCategories')).controls;
  }

  send() {
    let selectCategory = this.userForm.value.categorie;
    let selectSubCategories = this.userForm.value.subCategories;
    console.log(selectCategory);
    console.log(selectSubCategories);
    this.categoriesService.postNewCategory(selectCategory.id, selectSubCategories)
      .subscribe(data => {
        console.log("DATA", data);
        window.alert("ajout avec succes")
       this.router.navigate(['./categories']);
      }, error => {
        console.log("ERR", error);
      });
;
  }


  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(categories => this.categories=categories)
  }

}
