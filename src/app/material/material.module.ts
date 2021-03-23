
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from  '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';

const MyMaterialModule=[
  MatButtonModule,MatSelectModule,MatIconModule,MatFormFieldModule,
  MatInputModule,MatBadgeModule,MatOptionModule
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
