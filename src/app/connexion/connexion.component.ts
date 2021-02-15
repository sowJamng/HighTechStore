import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  emailvalid= [Validators.required, Validators.email];

  getErrorMessage() {

    return 'email non valide';
  }
client={
  email:'',
  password:''
};
hide = true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.route.navigateByUrl("/");
  }
}
