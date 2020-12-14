import {TimeformatPipe} from './timeformat.pipe';
import {VideoItem} from '../model/video-item';

describe('TimeformatPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeformatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty string for NaN', () => {
    const videoItem = new VideoItem(1, 'aaa', 'description', Number.NaN, new Date(), true, null);
    const pipe = new TimeformatPipe();
    const stringDuration = pipe.transform(videoItem.length);
    expect(stringDuration).toEqual('');
  });

  it('should return minutes for less then 1 hour course', () => {
    const videoItem = new VideoItem(1, 'aaa', 'description', 50, new Date(), true, null);
    const pipe = new TimeformatPipe();
    const stringDuration = pipe.transform(videoItem.length);
    expect(stringDuration).toEqual('50 min');
  });

  it('should return hours and minutes for more then 1 hour course', () => {
    const videoItem = new VideoItem(1, 'aaa', 'description', 70, new Date(), true, null);
    const pipe = new TimeformatPipe();
    const stringDuration = pipe.transform(videoItem.length);
    expect(stringDuration).toEqual('1 h 10 min');
  });

  it('should return hours for hour course', () => {
    const videoItem = new VideoItem(1, 'aaa', 'description', 120, new Date(), true, null);
    const pipe = new TimeformatPipe();
    const stringDuration = pipe.transform(videoItem.length);
    expect(stringDuration).toEqual('2 h');
  });

});
