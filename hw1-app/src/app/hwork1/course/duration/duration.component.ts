import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {TimeformatPipe} from "../../pipes/timeformat.pipe";

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['../course.component.css', './duration.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationComponent),
    multi: true,
  }]
})
export class DurationComponent implements OnInit, ControlValueAccessor {

  private onChange: any = () => {};

  private timeFormatPipe: TimeformatPipe;

  @Input()
  public duration: string;

  public durationFormatted: string;

  constructor() {
  }

  ngOnInit(): void {
    this.timeFormatPipe = new TimeformatPipe();
    if (this.duration) {
      this.onChangeDuration();
    }
  }

  onChangeDuration(): void {
    this.durationFormatted = this.timeFormatPipe.transform(this.duration);
    this.onChange(this.duration);
  }

  writeValue(value: string): void {
    this.duration = value;
    this.onChangeDuration();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
