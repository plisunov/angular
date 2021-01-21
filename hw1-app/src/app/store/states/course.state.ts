import {IVideoItem, VideoItem} from '../../hwork1/model/video-item';

export interface ICourseState {
  course: IVideoItem;
}

export const initialCourseState: ICourseState = {
  course: new VideoItem(null, null, null, null, new Date(), false, null)
};

