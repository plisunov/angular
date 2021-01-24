import {AbstractControl, ValidatorFn} from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const dateRegexp = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/;
    const isValid = dateRegexp.test(control.value);
    return !isValid ? { dateFormat: { value: control.value } } : null;
  };
}

export function durationValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const durationRegexp = /^[1-9]{1}[0-9]{0,}$/;
    const isValid = durationRegexp.test(control.value);
    return !isValid ? { duration: { value: control.value } } : null;
  };
}
