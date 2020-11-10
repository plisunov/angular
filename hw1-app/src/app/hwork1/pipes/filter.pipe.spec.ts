import {FilterPipe} from './filter.pipe';
import {VideoItem} from "../model/video-item";

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return one item by strict parameter', () => {
    const pipe = new FilterPipe();
    const unFilteredItems = [
      new VideoItem(1, 'aaa', 'description', 50, new Date(), true),
      new VideoItem(2, 'bbb', 'description', 50, new Date(), true),
      new VideoItem(3, 'ccc', 'description', 50, new Date(), true),
      new VideoItem(4, 'ddd', 'description', 50, new Date(), true)]
    let filteredItems = pipe.transform(unFilteredItems, 'aaa');
    expect(filteredItems.length).toEqual(1);
  });

  it('should return a few items by not strict parameter', () => {
    const pipe = new FilterPipe();
    const unFilteredItems = [
      new VideoItem(1, 'aaa', 'description', 50, new Date(), true),
      new VideoItem(2, 'bbb', 'description', 50, new Date(), true),
      new VideoItem(3, 'cccaaa', 'description', 50, new Date(), true),
      new VideoItem(4, 'aaaddd', 'description', 50, new Date(), true)]
    let filteredItems = pipe.transform(unFilteredItems, 'aaa');
    expect(filteredItems.length).toEqual(3);
  });

  it('should return an empty by not valid parameter', () => {
    const pipe = new FilterPipe();
    const unFilteredItems = [
      new VideoItem(1, 'aaa', 'description', 50, new Date(), true),
      new VideoItem(2, 'bbb', 'description', 50, new Date(), true),
      new VideoItem(3, 'cccaaa', 'description', 50, new Date(), true),
      new VideoItem(4, 'aaaddd', 'description', 50, new Date(), true)]
    let filteredItems = pipe.transform(unFilteredItems, 'gggg');
    expect(filteredItems.length).toEqual(0);
  });

  it('should return original items if no parameter', () => {
    const pipe = new FilterPipe();
    const unFilteredItems = [
      new VideoItem(1, 'aaa', 'description', 50, new Date(), true),
      new VideoItem(2, 'bbb', 'description', 50, new Date(), true),
      new VideoItem(3, 'cccaaa', 'description', 50, new Date(), true),
      new VideoItem(4, 'aaaddd', 'description', 50, new Date(), true)]
    let filteredItems = pipe.transform(unFilteredItems);
    expect(filteredItems.length).toEqual(4);
  });

});
