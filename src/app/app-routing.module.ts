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
  {path:'disqueDur',component:DisqueDurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
