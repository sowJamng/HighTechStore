import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  emailvalid= [Validators.required, Validators.email];
  emailv = new FormControl('', [Validators.required, Validators.email]);

admin:Admin={
  email:'',
  password:''
};
admins: any
hide = true;
authStatus=false;
  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
   // this.login();
  }
  getErrorMessage() {
    if (this.emailv.hasError('required')) {
      return 'Vou devez donner votre email';
    }

    return this.emailv.hasError('email') ? 'Email non valide ' : '';
  }
  getErrorPassword(){
    return 'mot de passe  non valide '
  }

  onSignIn() {
    this.authService.signIn(this.admin).then(
      (res) => {
        if(res==true)
           { console.log("connexion reussit avec succes ");
             this.authStatus = this.authService.isAuth;
            this.router.navigateByUrl('admin');
      }
        else
           alert("veuillez revoir votre email et mot de passe");
      }
    );
}
onLogin() {
  this.authService.login(this.admin).subscribe(res=>{
    if(res==true){
      console.log("connexion reussit avec succes ");
      this.authService.isAuth=true;
      this.authStatus = this.authService.isAuth;
      this.router.navigateByUrl('/admin');//admin
    }
    else {
    alert("veuillez revoir votre email et mot de passe");
    }
  },
  err=>console.log(err)
  );
}
reloadData() {
  this.authService.getAdmins().subscribe(data=> {
    this.admins = data;
     console.log(data);
},
err=>{ console.log(err);
})

}

// deleteAdmin(id: number) {
//   this.authService.deleteAdmin(id)
//     .subscribe(
//       data => {
//         console.log(data);
//         this.reloadData();
//       },
//       error => console.log(error));
// }

// employeeDetails(id: number){
//   this.router.navigate(['details', id]);
// }

// updateAdmin(id: number){
//   this.router.navigate(['update', id]);
// }
  // onSubmit(){
  //   console.log("email:"+this.admin.email,"et passwod:"+this.admin.password);
  //   this.route.navigateByUrl("/");
  // }
  // connexion(form:any){
  //   let data=form.value;
  //   console.log(data);
  // }
}
