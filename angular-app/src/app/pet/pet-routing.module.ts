import { PetListComponent } from './pet-list/pet-list.component';
import { PetNotFoundGuard } from './pet-not-found.guard';
import { PetCardComponent } from './pet-card/pet-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PetListComponent,
    children: [
      {
        path: ':petId',
        component: PetCardComponent,
        canActivate: [PetNotFoundGuard],
      },
    ],
  },
  {
    path: 'detail/:petId',
    component: PetCardComponent,
    canActivate: [PetNotFoundGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetRoutingModule {}
