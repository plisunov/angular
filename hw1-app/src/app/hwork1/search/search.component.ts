import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchStringOnChange = new EventEmitter<string>();

  public searchString: string;
  public subject = new Subject<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.searchString = '';
    this.subject.pipe(filter(text => text.length >= 3),
      debounceTime(500))
      .subscribe(() => this.searchStringOnChange.emit(this.searchString));
  }

  public searchKeyUp(): void {
    if (this.searchString.length === 0) {
      this.searchStringOnChange.emit(this.searchString);
    } else {
      this.subject.next(this.searchString);
    }
  }

}
