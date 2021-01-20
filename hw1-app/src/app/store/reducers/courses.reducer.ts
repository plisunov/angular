import {ICoursesState, initialCoursesState} from '../states/courses.state';
import {CoursesActions, ECoursesActions} from '../actions/courses.actions';


export const coursesReducer = (state = initialCoursesState, action: CoursesActions): ICoursesState => {
  switch (action.type) {
    case ECoursesActions.LoadCoursesCompleted:
      return {...state, courses: action.courses};
    case ECoursesActions.ChangeSearchParams:
      return {...state, start: action.start, paging: action.paging, searchString: action.searchString};
    default:
      return state;
  }
};
