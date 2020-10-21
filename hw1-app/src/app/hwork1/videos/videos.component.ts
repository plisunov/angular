import {Component, OnInit} from '@angular/core';
import {VideoItem} from '../model/video-item';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videoItems: VideoItem[];

  public video: VideoItem;

  constructor() {
  }

  ngOnInit(): void {
    this.videoItems = [
      new VideoItem(1, 'Name1', 'Description1', 30, new Date()),
      new VideoItem(2, 'Name2', 'Description2', 60, new Date()),
      new VideoItem(3, 'Name3', 'Description3', 90, new Date())];
  }

  addItem(): void {
    console.log('Add new course button');
  }

  onShowMore(): void {
    console.log('Show more button was pressed');
  }

  onDelete($event: number): void {
    console.log('Deleted video id is ' + $event);
  }
}
