import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  name = '';
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: [],
      subCategories: this.fb.array([
        this.fb.control(null)
      ])
    })
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
    return (<FormArray> this.userForm.get('subCategories')).controls
  }

  send(values: any) {
    console.log(values);
  }

  ngOnInit(): void {
  }
}
