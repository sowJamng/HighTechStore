import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ArticleService } from './service/article.service';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartPhoneComponent } from './telephones/smart-phone/smart-phone.component';
import { DisplayComponent } from './article/display/display.component';
import { DetailsComponent } from './article/details/details.component';
import { PhoneFixComponent } from './telephones/phone-fix/phone-fix.component';
import { AccessoiresPhoneComponent } from './telephones/accessoires-phone/accessoires-phone.component';
import { DisqueDurComponent } from './stockage/disque-dur/disque-dur.component';
import { CleUsbComponent } from './stockage/cle-usb/cle-usb.component';
import { AccessoiresStockComponent } from './stockage/accessoires-stock/accessoires-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    PcPortableComponent,
    HomeComponent,
    ConnexionComponent,
    SearchComponent,
    SmartPhoneComponent,
    DisplayComponent,
    DetailsComponent,
    PhoneFixComponent,
    AccessoiresPhoneComponent,
    DisqueDurComponent,
    CleUsbComponent,
    AccessoiresStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
