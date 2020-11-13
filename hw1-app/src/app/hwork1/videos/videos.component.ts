import {Component, OnInit} from '@angular/core';
import {VideoItem} from '../model/video-item';
import {FilterPipe} from '../pipes/filter.pipe';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videoItems: VideoItem[];

  public filteredVideoItems: VideoItem[];

  public video: VideoItem;

  public filterPipe = new FilterPipe();

  constructor() {
  }

  ngOnInit(): void {
    const today = new Date();
    const dayInMSec = 1000 * 60 * 60 * 24;
    this.videoItems = [
      new VideoItem(1, 'UPPERCASE NAME 1', 'Description1', 30, new Date(today.getTime() - (2 * dayInMSec)), false),
      new VideoItem(2, 'lowercase name 2', 'Description2', 60, new Date(today.getTime() - (15 * dayInMSec)), true),
      new VideoItem(3, 'camelCase Name 3', 'Description3', 90, new Date(today.getTime() + (2 * dayInMSec)), true)];
    this.filteredVideoItems = this.videoItems;
  }

  addItem(): void {
    console.log('Add new course button');
  }

  onSearchStringChanged(searchString: string): void {
    this.filteredVideoItems = this.filterPipe.transform(this.videoItems, searchString);
  }

  onShowMore(): void {
    console.log('Show more button was pressed');
  }

  onDelete($event: number): void {
    console.log('Deleted video id is ' + $event);
  }
}
