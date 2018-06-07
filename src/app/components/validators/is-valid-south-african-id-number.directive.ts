import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export function IdNumberIsValid(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let isValid = false;
    const idNumber = control.value;
    let oddSum = 0;
    let evenStr = '';
    let evenSum = 0;
    let computedValue: string;
    let checksum: string;

    if (!idNumber || idNumber === '') {
      return null;
    }

    isValid = (idNumber.trim().length === 13) && !isNaN(Number(idNumber));

    if (isValid) {
      idNumber.substr(0, 12).split('').forEach((e, i) => {
        if (i % 2 === 0) {
          oddSum += Number(e);
        } else {
          evenStr += e;
        }
      });

      evenStr = (Number(evenStr) * 2).toString();

      evenStr.split('').forEach(e => {
        evenSum += Number(e);
      });

      computedValue = (10 - Number((oddSum + evenSum).toString().substr(-1, 1))).toString().substr(-1, 1);

      checksum = idNumber.substr(-1, 1);

      isValid = computedValue === checksum;
    }

    return !isValid ? {'southAfricanIdNumber': {value: idNumber}} : null;
  };
}

@Directive({
  selector: '[appIsValidSouthAfricanIdNumber]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: IsValidSouthAfricanIdNumberDirective, multi: true}
  ]
})
export class IsValidSouthAfricanIdNumberDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
    return IdNumberIsValid()(control);
  }
}
