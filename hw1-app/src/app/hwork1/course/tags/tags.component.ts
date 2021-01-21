import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {IAutor} from '../../model/autor';
import {ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AuthorsService} from '../../services/authors.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['../course.component.css', './tags.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsComponent),
    multi: true,
  }]
})
export class TagsComponent implements OnInit, ControlValueAccessor {


  public allauthors:IAutor[];
  private onChange: any = () => {
  };

  constructor(private authorsService: AuthorsService) {
  }

  @Input()
  public authors: FormArray;

  ngOnInit(): void {
    this.authorsService.getAll().subscribe((items: IAutor[]) => this.allauthors = items);
  }

  public selectAuthor($event: MatAutocompleteSelectedEvent): void {
    this.authors.push(new FormControl($event.option.value));
  }

  public removeAuthor(index): void {
    this.authors.removeAt(index);
  }

  writeValue(value: FormArray): void {
    this.authors = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
