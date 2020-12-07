import {TestBed} from '@angular/core/testing';

import {CourceService} from './cource.service';
import {IVideoItem, VideoItem} from '../model/video-item';

describe('CourceService', () => {
  let service: CourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return static list of items', () => {
    expect(service.getAll().length).toEqual(3);
  });

  it('should return single item by id', () => {
    expect(service.get(1).title).toEqual('UPPERCASE NAME 1');
  });

  it('should create a new item', () => {
    const newItem: IVideoItem = new VideoItem(null, 'New Item', '', 90, new Date(), false);
    service.create(newItem);
    expect(service.getAll().length).toEqual(4);
    expect(service.get(4).title).toEqual('New Item');
  });

  it('should update an existing item', () => {
    const updatedItem: IVideoItem = new VideoItem(3, 'New Item', '', 120, new Date(), false);
    service.update(updatedItem);
    expect(service.getAll().length).toEqual(3);
    expect(service.get(3).title).toEqual('New Item');
    expect(service.get(3).duration).toEqual(120);
  });

  it('should not update an non existing item', () => {
    const updatedItem: IVideoItem = new VideoItem(5, 'New Item', '', 120, new Date(), false);
    service.update(updatedItem);
    expect(service.getAll().length).toEqual(3);
    expect(service.get(5)).toEqual(undefined);
  });

  it('should delete an existing item', () => {
    service.delete(2);
    expect(service.getAll().length).toEqual(2);
  });

  it('should not delete an non existing item', () => {
    service.delete(7);
    expect(service.getAll().length).toEqual(3);
  });

});
