import {OrderCourcesPipe} from './order-cources.pipe';
import {VideoItem} from '../model/video-item';

describe('OrderCourcesPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderCourcesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should order by creation date', () => {
    const today = new Date();
    const dayInMSec = 1000 * 60 * 60 * 24;
    const pipe = new OrderCourcesPipe();
    const unOrderedItems = [
      new VideoItem(1, 'aaa', 'description', 50, new Date(), true, null),
      new VideoItem(2, 'bbb', 'description', 50, new Date(today.getTime() - dayInMSec), true, null)];
    const orderedItems = pipe.transform(unOrderedItems);
    expect(orderedItems[0].id).toEqual(2);
  });
});
