import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IVideoItem} from '../model/video-item';
import {CourceService} from '../services/cource.service';
import {Store} from '@ngrx/store';
import {CourseCreate, CourseLoad, CourseSave, CourseUpdate} from '../../store/actions/course.actions';
import {selectValue} from '../../store/selectors/course.selectors';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private path: ActivatedRoute,
              private courceService: CourceService,
              private store: Store,
              private router: Router) {
  }

  public videoItem: IVideoItem;

  public videoItem$ = this.store.select(selectValue);

  public videoIdStr: string;

  private editMode: boolean;

  ngOnInit(): void {
    this.videoIdStr = this.path.snapshot.paramMap.get('id');
    if (this.videoIdStr !== 'new') {
      this.editMode = true;
      this.store.dispatch(new CourseLoad(Number(this.videoIdStr)));
    } else {
      this.editMode = false;
      this.store.dispatch(new CourseCreate());
    }
    this.videoItem$.subscribe((item: IVideoItem) => this.videoItem = item);
  }

  public onSave(): void {
    if (this.editMode) {
      this.store.dispatch(new CourseUpdate(this.videoItem));
    } else {
      this.store.dispatch(new CourseSave(this.videoItem));
    }
  }

  public onCancell(): void {
    this.router.navigate(['/courses']);
  }

  onDurationChange($event: number): void {
    this.videoItem.length = $event;
  }
}
