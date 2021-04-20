import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetsComponent } from './vets.component';

const routes: Routes = [{ path: '', component: VetsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetsRoutingModule { }
