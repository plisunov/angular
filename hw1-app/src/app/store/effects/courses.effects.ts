import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CourceService} from '../../hwork1/services/cource.service';
import {distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DeleteCource, ECoursesActions, LoadCourses, LoadCoursesCompleted} from '../actions/courses.actions';


@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions,
              private courceService: CourceService) {
  }

  @Effect()
  loadCourses$ = this.actions$.pipe(
    ofType(ECoursesActions.LoadCourses),
    distinctUntilChanged(),
    switchMap(() => {
        return this.courceService.getAll().pipe(
          map((courses) => new LoadCoursesCompleted(courses))
        );
      }
    )
  );

  @Effect()
  changeSearchParams$ = this.actions$.pipe(
    ofType(ECoursesActions.ChangeSearchParams),
    distinctUntilChanged(),
    map(() => new LoadCourses())
  );

  @Effect()
  deleteCourse$ = this.actions$.pipe(
    ofType(ECoursesActions.DeleteCourse),
    distinctUntilChanged(),
    switchMap((action: DeleteCource) => {
        return this.courceService.delete(action.courseId).pipe(
          map(() => new LoadCourses())
        );
      }
    )
  );

}
