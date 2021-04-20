import { PetEntity } from './pet-entity';
export class Pet implements PetEntity {
  id: number;
  name: string;
  age: number;
  imageUrl: string;
  registeredDate: Date;
  constructor(id: number, name: string, age: number, imageUrl: string, registeredDate: Date) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.imageUrl = imageUrl;
    this.registeredDate = registeredDate;
  }
}
