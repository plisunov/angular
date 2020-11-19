import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['../course.component.css', './datepicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit {

  @Input()
  public courseDate: Date;

  constructor() {
  }

  ngOnInit(): void {
  }

}
