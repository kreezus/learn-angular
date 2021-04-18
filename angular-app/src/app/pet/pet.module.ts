import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';



@NgModule({
  declarations: [
    PetListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PetListComponent
  ]
})
export class PetModule { }
