import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petAge',
})
export class PetAgePipe implements PipeTransform {
  transform(age: number, ...args: unknown[]): unknown {
    return `${age} mois`;
  }
}
