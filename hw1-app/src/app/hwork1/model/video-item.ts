import {ICourseAuthor} from './autor';

export interface IVideoItem {
  id: number;
  name: string;
  description: string;
  length: number;
  date: Date;
  isTopRated: boolean;
  authors: ICourseAuthor[];
}

export class VideoItem implements IVideoItem {
  constructor(public id: number,
              public name: string,
              public description: string,
              public length: number,
              public date: Date,
              public isTopRated: boolean,
              public authors: ICourseAuthor[]) {
  }
}
