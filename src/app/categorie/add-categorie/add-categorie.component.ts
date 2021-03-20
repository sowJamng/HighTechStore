import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../../service/categories.service';
import {map, tap} from 'rxjs/operators';
import {Categorie, SousCategorie} from '../../model/Categorie';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  product='';
  userForm: FormGroup;
  // Product Names
  //Produits: any = ['Ordinateur', 'Telephonie', 'Accessoire', 'Stockage'];
  categories: Categorie[] = [];


  constructor(
    private fb: FormBuilder,
    private categoriesService : CategoriesService,
  ) {
    this.userForm = this.fb.group({
      categorie: ['',[Validators.required]],
      subCategories: this.fb.array([
        this.fb.control('',[Validators.required]),
      ])
    });
  }
  getCategories():Observable<Categorie[]>{
    return this.categoriesService.getCategories().pipe(map(categories => categories.filter(categorie => categorie.parent != null && categorie.parent.name == 'Tous')));
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
      }, error => {
        console.log("ERR", error);
      });
;
  }

  // // Choose city using select dropdown
  // changeCity(e) {
  //   console.log(e.value);
  //   this.cityName.setValue(e.target.value, {
  //     onlySelf: true
  //   });
  // }

  // Getter method to access formcontrols
  // get cityName() {
  //   return this.registrationForm.get('cityName');
  // }
  ngOnInit(): void {
    this.getCategories().subscribe(categories => this.categories=categories)
  }

  changeCity($event: Event) {

  }
}
