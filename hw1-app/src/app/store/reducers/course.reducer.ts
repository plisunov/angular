import {ICourseState, initialCourseState} from '../states/course.state';
import {CourseActions, ECourseActions} from '../actions/course.actions';
import {VideoItem} from '../../hwork1/model/video-item';


export const courseReducer = (state = initialCourseState, action: CourseActions): ICourseState => {
  switch (action.type) {
    case ECourseActions.CourseCreate:
      return {...state, course: new VideoItem(null, null, null, null, new Date(), false, null)};
    case ECourseActions.CourseLoaded:
      return {...state, course: action.course};
    default:
      return state;
  }
};
