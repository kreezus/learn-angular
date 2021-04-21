import { AbstractControl, ValidatorFn } from "@angular/forms";

export function petImageUrlValidator(imageUrlRegExp: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const match = imageUrlRegExp.test(control.value);
      return !match ? {imageUrl: {value: control.value}} : null;
    };
  }