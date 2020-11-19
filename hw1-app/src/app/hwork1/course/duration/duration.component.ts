import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['../course.component.css', './duration.component.css']
})
export class DurationComponent implements OnInit {

  @Input()
  public duration: number;

  @Output()
  public changeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeDuration(): void {
    this.changeEvent.emit(this.duration);
  }
}
