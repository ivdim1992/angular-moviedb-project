import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { ExactLengthValidator } from './exact-lenght';

export class PasswordLengthValidator {
  public static readonly PASSWORD_LENGTH = 5;

  static getValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (!PasswordLengthValidator.validate(control.value)) {
        return {
          passwordLength: {
            length: PasswordLengthValidator.PASSWORD_LENGTH,
            message: `Password must contain ${PasswordLengthValidator.PASSWORD_LENGTH} digits`
          }
        };
      }

      return null;
    };
  }

  static validate(value: any): boolean {
    return ExactLengthValidator.validate(value, { length: PasswordLengthValidator.PASSWORD_LENGTH });
  }
}
