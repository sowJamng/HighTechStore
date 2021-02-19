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
  emailv = new FormControl('', [Validators.required, Validators.email]);


client={
  email:'',
  password:''
};
hide = true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.emailv.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailv.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorPasswor(){
    return 'password non valide '
  }
  onSubmit(){
    console.log("email:"+this.client.email,"et passwod:"+this.client.password);
    this.route.navigateByUrl("/");
  }
  connexion(form:any){
    let data=form.value;
    console.log(data);
  }
}
