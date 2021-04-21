import { PetType } from './pet-type';
import { PetEntity } from './pet-entity';
export class Pet implements PetEntity {
  id: number;
  name: string;
  age: number;
  imageUrl: string;
  registeredDate: Date;
  petType: PetType;
  healthPassport?: string;
  constructor(
    id: number,
    name: string,
    age: number,
    imageUrl: string,
    registeredDate: Date,
    petType?: PetType
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.imageUrl = imageUrl;
    this.registeredDate = registeredDate;
    this.petType = petType || PetType.CAT;
  }
}
