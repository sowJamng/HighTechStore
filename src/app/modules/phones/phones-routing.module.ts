import { PhoneFixComponent } from './../../telephones/phone-fix/phone-fix.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoiresPhoneComponent } from 'src/app/telephones/accessoires-phone/accessoires-phone.component';
import { SmartPhoneComponent } from 'src/app/telephones/smart-phone/smart-phone.component';

const routes: Routes = [
  // {path:'smartPhone',component:SmartPhoneComponent},
  // {path:'accesoires-phones',component:AccessoiresPhoneComponent},
  // {path:'telephones-fix',component:PhoneFixComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonesRoutingModule { }
