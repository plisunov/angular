import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeformat'
})
export class TimeformatPipe implements PipeTransform {

  transform(minutes: number): string {
    if (minutes < 60) {
      return `${minutes} min`;
    } else if (minutes % 60 === 0) {
      return `${Math.floor(minutes / 60)} h`;
    } else {
      return `${Math.floor(minutes / 60)} h ${minutes % 60} min`;
    }
  }
}

