import { PetEntity } from './pet-entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor() {}

  getSyncPets(): PetEntity[] {
    return this.initialPets;
  }

  getAsyncPets(): Observable<PetEntity[]> {
    const pets = of(this.initialPets).pipe(delay(2000));
    return pets;
  }

  addPet(petToAdd: PetEntity): void {
    this.initialPets.push(petToAdd);
  }

  getById(petId: number){
    return this.initialPets.find(p=>p.id == petId);
  }

  removePet(petName: string) {
    this.initialPets.splice(
      this.initialPets.findIndex((p) => p.name == petName),
      1
    );
  }

  initialPets: PetEntity[] = [
    {
      id: 1,
      name: 'Pet1',
      age: 12,
      imageUrl:
        'https://468915-1496741-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/01/cat-facial-expressions.jpg',
      registeredDate: new Date(),
    },
    {
      id: 2,
      name: 'Pet2',
      age: 6,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0011/0552/articles/RCF_blog_1400x.jpg?v=1556467722',
      registeredDate: new Date(),
    },
    {
      id: 3,
      name: 'Pet3',
      age: 4,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/01/21/01/33/dog-4781854_1280.jpg',
      registeredDate: new Date(),
    },
    {
      id: 4,
      name: 'Pet4',
      age: 8,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/01/21/01/33/dog-4781854_1280.jpg',
      registeredDate: new Date(),
    },
    {
      id: 5,
      name: 'Pet5',
      age: 7,
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/01/21/01/33/dog-4781854_1280.jpg',
      registeredDate: new Date(),
    },
  ];
}
