import { PetService } from './pet-service';
import { PetEntity } from './pet-entity';
import { PetModule } from './pet.module';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetListResolverService implements Resolve<PetEntity[]> {
  constructor(private petService: PetService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): PetEntity[] | Observable<PetEntity[]> | Promise<PetEntity[]> {
    return this.petService.getAsyncPets();
  }
}
