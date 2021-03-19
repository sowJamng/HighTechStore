import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  category = '';
  userForm: FormGroup;
  // Product Names
  Produits: any = ['Ordinateur', 'Telephonie', 'Accessoire', 'Stockage'];

  constructor(
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      productName: [],
      category: ['',[Validators.required]],
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

  send(values: any) {
    console.log(values);
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
  }

  changeCity($event: Event) {

  }
}
