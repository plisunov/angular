import {Action} from '@ngrx/store';
import {IVideoItem} from '../../hwork1/model/video-item';

export enum ECourseActions {
  CourseCreate = '[Course] Course Create',
  CourseLoad = '[Course] Course Load',
  CourseLoaded = '[Course] Course Loaded',
  CourseSave = '[Course] Course Save',
  CourseUpdate = '[Course] Course Update',
  CourseSaved = '[Course] Course Saved',
}

export class CourseLoad implements Action {
  public readonly type = ECourseActions.CourseLoad;

  constructor(public courseId: number) {
  }

}

export class CourseLoaded implements Action {
  public readonly type = ECourseActions.CourseLoaded;

  constructor(public course: IVideoItem) {
  }
}

export class CourseCreate implements Action {
  public readonly type = ECourseActions.CourseCreate;

}

export class CourseUpdate implements Action {
  public readonly type = ECourseActions.CourseUpdate;

  constructor(public course: IVideoItem) {
  }

}

export class CourseSave implements Action {
  public readonly type = ECourseActions.CourseSave;

  constructor(public course: IVideoItem) {
  }

}


export class CourseSaved implements Action {
  public readonly type = ECourseActions.CourseSaved;

}

export type CourseActions = CourseLoad | CourseLoaded | CourseCreate
  | CourseSave | CourseUpdate | CourseSaved;
