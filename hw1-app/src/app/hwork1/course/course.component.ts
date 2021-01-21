import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IVideoItem, VideoItem} from '../model/video-item';
import {CourceService} from '../services/cource.service';
import {Store} from '@ngrx/store';
import {CourseCreate, CourseLoad, CourseSave, CourseUpdate} from '../../store/actions/course.actions';
import {selectCourseName, selectValue} from '../../store/selectors/course.selectors';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {dateValidator, durationValidator} from './course-form.validators';
import {AuthorsService} from '../services/authors.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private path: ActivatedRoute,
              private courceService: CourceService,
              private authorsService: AuthorsService,
              private store: Store,
              private router: Router) {
  }

  public formCourse = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.maxLength(50), Validators.required]),
    description: new FormControl('', Validators.maxLength(500)),
    date: new FormControl('', dateValidator()),
    duration: new FormControl('', durationValidator()),
    authors: new FormArray([])
  })

  public videoItem: IVideoItem;

  public videoItem$ = this.store.select(selectValue);

  public courseName$ = this.store.select(selectCourseName);

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
    this.authorsService.getAll().subscribe();
    this.videoItem$.subscribe((item: IVideoItem) => {
        this.formCourse.setValue({
          id: item.id,
          name: item.name,
          description: item.description,
          date: new Date(item.date).toLocaleDateString(),
          duration: item.length,
          authors: []

        });
        const authors = (item.authors || []).map(
          (author) => new FormControl(author)
        );
        this.formCourse.setControl('authors', new FormArray(authors));
      }
    )
  }

  public onSave(): void {
    const formValue = this.formCourse.value;
    const item = new VideoItem(formValue.id,
      formValue.name,
      formValue.description,
      formValue.duration,
      formValue.date,
      false,
      formValue.authors);
    if (this.editMode) {
      this.store.dispatch(new CourseUpdate(item));
    } else {
      this.store.dispatch(new CourseSave(item));
    }
  }

  public onCancell(): void {
    this.router.navigate(['/courses']);
  }

  onDurationChange($event: number): void {
    this.videoItem.length = $event;
  }

  get nameCtrl(): AbstractControl {
    return this.formCourse.get('name');
  }

  get descriptionCtrl(): AbstractControl {
    return this.formCourse.get('description');
  }

  get durationCtrl(): AbstractControl {
    return this.formCourse.get('duration');
  }

  get dateCtrl(): AbstractControl {
    return this.formCourse.get('date');
  }

}
