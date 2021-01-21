import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeformat'
})
export class TimeformatPipe implements PipeTransform {

  transform(minutes: string): string {
    const min = Number.parseInt(minutes, 10);
    if (Number.isNaN(min)) {
      return '';
    } else if (min < 60) {
      return `${min} min`;
    } else if (min % 60 === 0) {
      return `${Math.floor(min / 60)} h`;
    } else {
      return `${Math.floor(min / 60)} h ${min % 60} min`;
    }
  }
}

