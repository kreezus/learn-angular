import { PetType } from './pet-type';

export interface PetEntity {
  id: number;
  name: string;
  age: number;
  imageUrl: string;
  registeredDate: Date;
  petType?: PetType;
}
