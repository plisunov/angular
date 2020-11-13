import {Pipe, PipeTransform} from '@angular/core';
import {VideoItem} from '../model/video-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(videos: VideoItem[], ...args: string[]): VideoItem[] {
    const searchString = args[0];
    if (!searchString) {
      return videos;
    }
    return videos.filter((v) => {
      return v.title.toLowerCase().includes(searchString.toLowerCase());
    });
  }

}
