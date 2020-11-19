import {Injectable} from '@angular/core';
import {IVideoItem, VideoItem} from '../model/video-item';

@Injectable({
  providedIn: 'root'
})
export class CourceService {

  private videoItems: IVideoItem[];

  constructor() {
    this.videoItems = this.generateStaticItems();
  }

  private generateStaticItems(): IVideoItem[] {
    const today = new Date();
    const dayInMSec = 1000 * 60 * 60 * 24;
    return [
      new VideoItem(1, 'UPPERCASE NAME 1', 'Description1', 30, new Date(today.getTime() - (2 * dayInMSec)), false),
      new VideoItem(2, 'lowercase name 2', 'Description2', 60, new Date(today.getTime() - (15 * dayInMSec)), true),
      new VideoItem(3, 'camelCase Name 3', 'Description3', 90, new Date(today.getTime() + (2 * dayInMSec)), true)];
  }

  public getAll(): VideoItem[] {
    return this.videoItems;
  }

  public get(courceId: number): IVideoItem {
    return this.videoItems.find(c => c.id === courceId);
  }

  public create(cource: IVideoItem): IVideoItem {
    this.videoItems.push(cource);
    return cource;
  }

  public update(cource: IVideoItem): IVideoItem {
    const videoItem: IVideoItem = this.videoItems.find(c => c.id === cource.id);
    const index: number = this.videoItems.indexOf(videoItem);
    if (index >= 0) {
      this.videoItems.splice(index, 1, cource);
    }
    return cource;
  }

  public delete(courceId: number): void {
    const videoItem: IVideoItem = this.videoItems.find(c => c.id === courceId);
    const index: number = this.videoItems.indexOf(videoItem);
    if (index >= 0) {
      this.videoItems.splice(index, 1);
    }
  }

}
