import { HttpResponse } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { PetService } from './pet-service';
import { PetEntity } from './pet-entity';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { Pet } from 'src/app/pet/pet';

@Injectable({
  providedIn: 'root',
})
export class PetResolverService implements Resolve<PetEntity> {
  constructor(private petService: PetService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | PetEntity
    | Observable<PetEntity>
    | Observable<never>
    | Promise<PetEntity> {
    const id = route.params['petId'];
    if (id) {
      return this.petService.find(id).pipe(
        mergeMap((pet: HttpResponse<PetEntity>) => {
          if (pet.body) {
            return of(pet.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
  }
}
