import { PetService } from './pet-service';
import { PetEntity } from './pet-entity';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/pet/pet';

@Injectable({
  providedIn: 'root',
})
export class PetResolverService implements Resolve<PetEntity> {
  constructor(private petService: PetService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): PetEntity | Observable<PetEntity> | Promise<PetEntity> {
    const petId = <number>route.params['petId'];
    return (
      this.petService.getById(petId) || new Pet(null, '', null, '', new Date())
    );
  }
}
