import {Component, OnInit} from '@angular/core';
import {VideoItem} from '../model/video-item';
import {CourceService} from '../services/cource.service';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectDataLength, selectEndValue, selectStartValue, selectState} from '../../store/selectors/courses.selectors';
import {ChangeSearchParams, DeleteCource, LoadCourses} from '../../store/actions/courses.actions';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public filteredVideoItemsl$ = this.store.select(selectState);

  public datalength$ = this.store.select(selectDataLength);

  public video: VideoItem;

  private searchString: string;

  constructor(private coursesService: CourceService,
              private store: Store,
              private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadCourses());
  }

  addItem(): void {
    this.router.navigate(['/courses/new']);
  }

  onSearchStringChanged(searchString: string): void {
    this.searchString = searchString;
    let paging: number;
    this.store.pipe(select(selectEndValue)).subscribe((padingSize: number) => paging = padingSize);
    this.store.dispatch(new ChangeSearchParams(0, paging, searchString));
  }

  onShowMore(): void {
    let startIndex: number;
    this.store.pipe(select(selectStartValue)).subscribe((start: number) => startIndex = start);
    let paging: number;
    this.store.pipe(select(selectEndValue)).subscribe((padingSize: number) => paging = padingSize);
    this.store.dispatch(new ChangeSearchParams((startIndex + paging + 1), paging, ''));
  }

  onDelete($event: number): void {
    const confirmation = confirm('Are you really wan to delete course?');
    if (confirmation) {
      console.log('Deleted video id is ' + $event);
      this.store.dispatch(new DeleteCource($event));
    }
  }
}
