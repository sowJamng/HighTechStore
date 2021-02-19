import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesRoutingModule } from './phones-routing.module';
import { SmartPhoneComponent } from '../../telephones/smart-phone/smart-phone.component';
import { PhoneFixComponent } from '../../telephones/phone-fix/phone-fix.component';
import { AccessoiresPhoneComponent } from '../../telephones/accessoires-phone/accessoires-phone.component';


@NgModule({
  declarations: [
    // SmartPhoneComponent,
    // PhoneFixComponent,
    // AccessoiresPhoneComponent

  ],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
