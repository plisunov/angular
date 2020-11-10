import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchStringOnChange = new EventEmitter<string>();

  public searchString: string;

  constructor() {
  }

  ngOnInit(): void {
    this.searchString = '';
  }

  onSearch(): void {
    console.log('Search string is ' + this.searchString);
    this.searchStringOnChange.emit(this.searchString);
  }

}
