import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path:'', redirectTo: 'app', pathMatch: 'full'},
  {path:'PcPortable',component:PcPortableComponent},
  {path:'PcBurreau',component:PcBureauComponent},
  {path:'Accessoires',component:PcAccessoiresComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
