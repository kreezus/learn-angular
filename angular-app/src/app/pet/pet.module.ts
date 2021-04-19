import { SharedModule } from './../shared/shared.module';
import { PetCardComponent } from './pet-card/pet-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAgePipe } from './pet-age.pipe';



@NgModule({
  declarations: [
    PetListComponent,
    PetCardComponent,
    PetAgePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PetListComponent,
    PetCardComponent
  ],
})
export class PetModule { }
