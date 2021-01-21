import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CourceService} from '../../hwork1/services/cource.service';
import {
  CourseLoad,
  CourseLoaded,
  CourseSave,
  CourseSaved,
  CourseUpdate,
  ECourseActions
} from '../actions/course.actions';
import {distinctUntilChanged, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {IVideoItem} from '../../hwork1/model/video-item';
import {Router} from '@angular/router';


@Injectable()
export class CourseEffects {

  constructor(private actions$: Actions,
              private courceService: CourceService,
              private router: Router) {
  }

  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType(ECourseActions.CourseLoad),
    distinctUntilChanged(),
    mergeMap((action: CourseLoad) => {
        return this.courceService.get(action.courseId).pipe(
          map((course: IVideoItem) => new CourseLoaded(course))
        );
      }
    )
  );

  @Effect({dispatch: false})
  updateCourse$ = this.actions$.pipe(
    ofType(ECourseActions.CourseUpdate),
    distinctUntilChanged(),
    switchMap((action: CourseUpdate) => {
        return this.courceService.update(action.course).pipe(
          map(() => new CourseSaved())
        );
      }
    )
  );

  @Effect({dispatch: false})
  saveCourse$ = this.actions$.pipe(
    ofType(ECourseActions.CourseSave),
    distinctUntilChanged(),
    switchMap((action: CourseSave) => {
        return this.courceService.create(action.course).pipe(
          map(() => new CourseSaved())
        );
      }
    )
  );

  @Effect({dispatch: false})
  updateCourseCompleted$ = this.actions$.pipe(
    ofType(ECourseActions.CourseSaved),
    distinctUntilChanged(),
    map(() => this.router.navigate(['/courses']))
  );

}
