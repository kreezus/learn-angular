import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetsRoutingModule } from './vets-routing.module';
import { VetsComponent } from './vets.component';


@NgModule({
  declarations: [
    VetsComponent
  ],
  imports: [
    CommonModule,
    VetsRoutingModule
  ]
})
export class VetsModule { }
