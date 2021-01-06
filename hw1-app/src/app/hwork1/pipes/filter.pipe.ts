import {Pipe, PipeTransform} from '@angular/core';
import {IVideoItem, VideoItem} from '../model/video-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(videos: IVideoItem[], ...args: string[]): IVideoItem[] {
    const searchString = args[0];
    if (!searchString) {
      return videos;
    }
    return videos.filter((v) => {
      return v.name.toLowerCase().includes(searchString.toLowerCase());
    });
  }

}
