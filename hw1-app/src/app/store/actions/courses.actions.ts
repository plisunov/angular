import {Action} from '@ngrx/store';
import {IVideoItem} from "../../hwork1/model/video-item";

export enum ECoursesActions {
  LoadCourses = '[Courses] LoadCourses',
  LoadCoursesCompleted = '[Courses] LoadCoursesCompleted',
  ChangeSearchParams = '[Courses] ChangeSearchParams',
  DeleteCourse = '[Courses] DeleteCourse',
}

export class LoadCourses implements Action {
  public readonly type = ECoursesActions.LoadCourses;
}

export class LoadCoursesCompleted implements Action {
  public readonly type = ECoursesActions.LoadCoursesCompleted;

  constructor(public courses: IVideoItem[]) {
  }

}

export class ChangeSearchParams implements Action {
  public readonly type = ECoursesActions.ChangeSearchParams;

  constructor(public start: number, public paging: number, public searchString: string) {
  }

}

export class DeleteCource implements Action {
  public readonly type = ECoursesActions.DeleteCourse;

  constructor(public courseId: number) {
  }
}

export type CoursesActions = LoadCourses | LoadCoursesCompleted
  | ChangeSearchParams | DeleteCource;
