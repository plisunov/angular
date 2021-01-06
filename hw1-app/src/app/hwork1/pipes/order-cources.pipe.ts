import {Pipe, PipeTransform} from '@angular/core';
import {VideoItem} from '../model/video-item';

@Pipe({
  name: 'orderCources'
})
export class OrderCourcesPipe implements PipeTransform {

  transform(videos: VideoItem[]): VideoItem[] {
    return videos.sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime());
  }

}
