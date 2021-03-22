import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from 'src/app/model/boutique';
import { BoutiqueService } from 'src/app/service/boutique.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.component.html',
  styleUrls: ['./add-boutique.component.css']
})
export class AddBoutiqueComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private boutiqueService: BoutiqueService,
    private router: Router,
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.initForm();
  }


  // tslint:disable-next-line:typedef
  initForm() {
    this.userForm = this.fb.group({
      id : '',
      desc: '',
      phone: '',
      email: '',
      adress: '',
    });
  }

  // tslint:disable-next-line:typedef
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newBoutique = new Boutique(
      formValue['id'],
      formValue['desc'],
      formValue['phone'],
      formValue['email'],
      formValue['adress'],
    );
    this.boutiqueService.addBoutique(newBoutique);
    this.router.navigate(['/boutiques']);
  }


}
