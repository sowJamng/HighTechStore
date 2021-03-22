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

  boutiqueForm = new FormGroup({
    id: new FormControl(''),
    desc: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    adress: new FormControl('')
  })

  constructor(
    private fb: FormBuilder,
    private boutiqueService: BoutiqueService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log(this.boutiqueForm.value);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.boutiqueForm.valid) {
      console.log("Form Submitted!");
    }
  }
}
