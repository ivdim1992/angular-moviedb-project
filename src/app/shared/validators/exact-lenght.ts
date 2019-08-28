import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export interface IExactLengthValidatorOption {
  length: number;
}

export class ExactLengthValidator {
  static getValidator(options: IExactLengthValidatorOption): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (!ExactLengthValidator.validate(control.value, options)) {
        return {
          exactLength: {
            length: options.length
          }
        };
      }

      return null;
    };
  }

  static validate(value: any, options: IExactLengthValidatorOption): boolean {
    if (typeof options.length !== 'number' || options.length < 1) {
      throw new Error('Invalid validator length option');
    }

    return !value || value.toString().length >= options.length;
  }
}
