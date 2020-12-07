export interface IVideoItem {
  id: number;
  title: string;
  description: string;
  duration: number;
  creationDate: Date;
  topRated: boolean;

}

export class VideoItem implements IVideoItem {
  constructor(public id: number,
              public title: string,
              public description: string,
              public duration: number,
              public creationDate: Date,
              public topRated: boolean) {
  }
}
