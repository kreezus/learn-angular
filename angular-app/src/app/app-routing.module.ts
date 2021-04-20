import { HomeModule } from './home/home.module';
import { PetModule } from './pet/pet.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
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
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pets',
    //loadChildren: './pet/pet.module#PetModule',
    loadChildren: () => import('./pet/pet.module').then((m) => m.PetModule),
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: 'vets',
    loadChildren: () => import('./vets/vets.module').then((m) => m.VetsModule),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
