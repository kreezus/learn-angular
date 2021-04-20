import { PetNotFoundGuard } from './pet/pet-not-found.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PetCardComponent } from './pet/pet-card/pet-card.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pets',
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
    path: 'pets/detail/:petId',
    component: PetCardComponent,
    canActivate: [PetNotFoundGuard],
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
