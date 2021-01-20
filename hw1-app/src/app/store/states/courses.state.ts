import {IVideoItem} from '../../hwork1/model/video-item';

export interface ICoursesState {
  courses: IVideoItem[];
  start: number;
  paging: number;
  searchString: string;
}

export const initialCoursesState: ICoursesState = {
  courses: [],
  start: 0,
  paging: 3,
  searchString: ''
}
