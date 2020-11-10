import {TimeformatPipe} from './timeformat.pipe';
import {VideoItem} from "../model/video-item";

describe('TimeformatPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeformatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return minutes for less then 1 hour course', () => {
    let videoItem = new VideoItem(1, 'aaa', 'description', 50, new Date(), true);
    const pipe = new TimeformatPipe();
    let stringDuration = pipe.transform(videoItem.duration);
    expect(stringDuration).toEqual('50 min');
  });

  it('should return hours and minutes for more then 1 hour course', () => {
    let videoItem = new VideoItem(1, 'aaa', 'description', 70, new Date(), true);
    const pipe = new TimeformatPipe();
    let stringDuration = pipe.transform(videoItem.duration);
    expect(stringDuration).toEqual('1 h 10 min');
  });

  it('should return hours for hour course', () => {
    let videoItem = new VideoItem(1, 'aaa', 'description', 120, new Date(), true);
    const pipe = new TimeformatPipe();
    let stringDuration = pipe.transform(videoItem.duration);
    expect(stringDuration).toEqual('2 h');
  });

});
