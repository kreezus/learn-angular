import { environment } from './../../environments/environment';
import { PetType } from './pet-type';
import { PetEntity } from './pet-entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap, toArray } from 'rxjs/operators';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  apiBaseUrl = environment.apiUrl;
  initialPets: PetEntity[] = [];

  update(petId: number, pet: PetEntity) {
    const foundPet = this.find(petId);
    if (foundPet) {
      const index = this.initialPets.findIndex((p) => p.id == petId);
      this.initialPets[index] = pet;
    }
  }
  constructor(private httpClient: HttpClient) {}

  getPets(): Observable<PetEntity[]> {
    return this.httpClient
      .get<PetEntity[]>(`${this.apiBaseUrl}/pets`, {
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

  find(petId: number): Observable<HttpResponse<PetEntity>> {
    return this.httpClient.get<PetEntity>(`${this.apiBaseUrl}/pets/${petId}`, {
      observe: 'response',
    });
  }

  removePet(petId: number) {
    this.initialPets.splice(
      this.initialPets.findIndex((p) => p.id == petId),
      1
    );
  }
}
