import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetResolverService } from './pet-resolver.service';
import { PetListResolverService } from './pet-list-resolver.service';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetNotFoundGuard } from './pet-not-found.guard';
import { PetCardComponent } from './pet-card/pet-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    component: PetEditComponent,
    resolve: {
      pet: PetResolverService,
    },
  },
  {
    path: '',
    component: PetListComponent,
    resolve: {
      pets: PetListResolverService,
    },
    
  },
  {
    path: ':petId/detail',
    component: PetCardComponent,
    //canActivate: [PetNotFoundGuard],
    resolve: {
      pet: PetResolverService,
    },
  },
  {
    path: ':petId/edit',
    component: PetEditComponent,
    //canActivate: [PetNotFoundGuard],
    resolve: {
      pet: PetResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetRoutingModule {}
