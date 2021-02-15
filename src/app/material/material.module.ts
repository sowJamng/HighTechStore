
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
const MyMaterialModule=[
  MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatBadgeModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
MyMaterialModule
  ]
})
export class MaterialModule { }
