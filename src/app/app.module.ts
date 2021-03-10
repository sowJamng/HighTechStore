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
import { PhonesModule } from './modules/phones/phones.module';
import { StockageModule } from './modules/stockage/stockage.module';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { MenuComponent } from './menu/menu.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HttpClientModule } from '@angular/common/http';
import { BoutiqueComponent } from './boutique/boutique/boutique.component';
import { CategorieComponent } from './categorie/categorie/categorie.component';
import { AddBoutiqueComponent } from './boutique/add-boutique/add-boutique.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';

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
    AccessoiresStockComponent,
    HelloWordComponent,
    AddArticleComponent,
    EditArticleComponent,
    MenuComponent,
    FourOhFourComponent,
    BoutiqueComponent,
    CategorieComponent,
    AddBoutiqueComponent,
    AddCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    PhonesModule,
    StockageModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
