import { DisqueDurComponent } from './stockage/disque-dur/disque-dur.component';
import { AccessoiresStockComponent } from './stockage/accessoires-stock/accessoires-stock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SmartPhoneComponent } from './telephones/smart-phone/smart-phone.component';
import { DetailsComponent } from './article/details/details.component';
import { AccessoiresPhoneComponent } from './telephones/accessoires-phone/accessoires-phone.component';
import { CleUsbComponent } from './stockage/cle-usb/cle-usb.component';
import { PhoneFixComponent } from './telephones/phone-fix/phone-fix.component';
import { AuthontificationGuardGuard } from './guards/authontification-guard.guard';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { MenuComponent } from './menu/menu.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { AddBoutiqueComponent } from './boutique/add-boutique/add-boutique.component';
import { BoutiqueComponent } from './boutique/boutique/boutique.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { CategorieComponent } from './categorie/categorie/categorie.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'PcPortable',component:PcPortableComponent},
  {path:'PcBurreau',component:PcBureauComponent},
  {path:'AccessoiresPC',component:PcAccessoiresComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:ConnexionComponent},
  {path:'smartPhone',component:SmartPhoneComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'accesoires-phones',component:AccessoiresPhoneComponent},
  {path:'clesUSB',component:CleUsbComponent},
  {path:'telephones-fix',component:PhoneFixComponent},
  {path:'accesoires-stockage',component:AccessoiresStockComponent},
  {path:'disqueDur',component:DisqueDurComponent},
  { path: 'articleslist', component: ListArticleComponent , canActivate: [ AuthontificationGuardGuard]},
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'admin', component: MenuComponent , canActivate: [ AuthontificationGuardGuard]},
  // { path: '**', redirectTo: 'not-found' },
  {path:'addBoutique',component:AddBoutiqueComponent },
  {path:'addCategorie',component:AddCategorieComponent, canActivate: [ AuthontificationGuardGuard]},
  {path:'categories',component:CategorieComponent, canActivate: [ AuthontificationGuardGuard]},
  {path:'boutiques',component:BoutiqueComponent},
  {path:'addArticle',component:AddArticleComponent, canActivate: [ AuthontificationGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
