import { FormsModule } from '@angular/forms';
import { PetRoutingModule } from './pet-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { PetCardComponent } from './pet-card/pet-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAgePipe } from './pet-age.pipe';
import { PetEditComponent } from './pet-edit/pet-edit.component';

@NgModule({
  declarations: [
    PetListComponent,
    PetCardComponent,
    PetAgePipe,
    PetEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    PetRoutingModule,
  ],
  exports: [PetListComponent, PetCardComponent],
})
export class PetModule {}
