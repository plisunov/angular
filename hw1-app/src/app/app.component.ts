import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'Video Curses';

  ngOnInit(): void {
    console.log('ngOnInit working');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges working');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck working');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit working');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked working');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit working');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked working');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy working');
  }

}


