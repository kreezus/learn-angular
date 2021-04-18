import { PetEntity } from './pet-entity';
export class Pet implements PetEntity {
  name: string;
  age: number;
  imageUrl: string;
  registeredDate: Date;
  constructor(name: string, age: number, imageUrl: string, registeredDate: Date) {
    this.name = name;
    this.age = age;
    this.imageUrl = imageUrl;
    this.registeredDate = registeredDate;
  }
}
