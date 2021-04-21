import { environment } from './../../environments/environment';
import { PetType } from './pet-type';
import { PetEntity } from './pet-entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map, tap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  apiBaseUrl = environment.apiUrl;
  initialPets: PetEntity[] = [];

  update(petId: number, pet: PetEntity) {
    const foundPet = this.getById(petId);
    if (foundPet) {
      const index = this.initialPets.findIndex((p) => p.id == petId);
      this.initialPets[index] = pet;
    }
  }
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<PetEntity[]>(`${this.apiBaseUrl}/pets/pets.json`, {
        observe: 'body',
      })
      .subscribe((resp) => {
        this.initialPets = resp;
      });
  }

  getPets(): Observable<PetEntity[]> {
    return this.httpClient
      .get<PetEntity[]>(`${this.apiBaseUrl}/pets/pets.json`, {
        observe: 'body',
      })
      .pipe(
        map((pets) => {
          pets.forEach((p) => this.transformPet(p));
          return pets;
        })
      );
  }

  transformPet(pet: PetEntity): PetEntity {
    pet.name = pet.name.toUpperCase();
    return pet;
  }

  addPet(petToAdd: PetEntity): void {
    petToAdd.id = this.initialPets.length + 1;
    this.initialPets.push(petToAdd);
  }

  async getById(petId: number) {
    return this.initialPets.find((p) => p.id == petId);
  }

  removePet(petId: number) {
    this.initialPets.splice(
      this.initialPets.findIndex((p) => p.id == petId),
      1
    );
  }
}
