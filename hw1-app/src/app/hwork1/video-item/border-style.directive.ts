import {AfterViewInit, Directive, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderStyleDirective implements AfterViewInit {

  @Input() creationDate: string;

  constructor(private  elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    let color: string;
    const creationDate = new Date(this.creationDate).getTime();
    const currentDate = new Date().getTime();
    const dayInMSec = 1000 * 60 * 60 * 24;
    if (creationDate > currentDate) {
      color = 'blue';
    } else if (creationDate < currentDate && creationDate >= (currentDate - (14 * dayInMSec))) {
      color = 'green';
    }
    if (color) {
      this.elementRef.nativeElement.style.borderColor = color;
    }
  }

}
