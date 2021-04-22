import * as dayjs from 'dayjs';

export interface IPet {
  id?: number;
  name?: string;
  age?: number | null;
  imageUrl?: string | null;
  registeredDate?: dayjs.Dayjs | null;
}

export class Pet implements IPet {
  constructor(
    public id?: number,
    public name?: string,
    public age?: number | null,
    public imageUrl?: string | null,
    public registeredDate?: dayjs.Dayjs | null
  ) {}
}

export function getPetIdentifier(pet: IPet): number | undefined {
  return pet.id;
}
