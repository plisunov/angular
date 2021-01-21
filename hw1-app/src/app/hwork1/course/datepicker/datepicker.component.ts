import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['../course.component.css', './datepicker.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true,
  }]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {

  @Input()
  public courseDate: string;

  private onChange: any = () => {
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeDate():void {
    this.onChange(this.courseDate);
  }

  writeValue(value: string): void {
    this.courseDate = value;
    this.onChange(this.courseDate);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
