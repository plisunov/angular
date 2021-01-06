import {TestBed} from '@angular/core/testing';

import {CourceService} from './cource.service';
import {IVideoItem, VideoItem} from '../model/video-item';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

describe('CourceService', () => {
  let service: CourceService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  const items: IVideoItem[] = [
    new VideoItem(1, 'UPPERCASE NAME 1', 'Description1', 30, new Date(), false, null),
    new VideoItem(2, 'lowercase name 2', 'Description2', 60, new Date(), true, null),
    new VideoItem(3, 'camelCase Name 3', 'Description3', 90, new Date(), true, null)];

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(CourceService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return static list of items', () => {
    service.getAll(0, 3, '').subscribe((list: IVideoItem[]) => {
      expect(list.entries.length).toEqual(3);
    });
    const testRequest = httpMock.expectOne(environment.HOST_URL + '/courses?start=0&count=3&textFragment=');
    testRequest.flush(JSON.stringify(items));
    expect(testRequest.request.method).toEqual('GET');
  });


  it('should return single item by id', () => {
    service.get(1)
      .subscribe((item) => {
        expect(item.name).toEqual('UPPERCASE NAME 1');
      });
    const testRequest = httpMock.expectOne(environment.HOST_URL + '/courses/1');
    testRequest.flush(items[0]);
    expect(testRequest.request.method).toEqual('GET');
  });

  it('should create a new item', () => {
    service.create(new VideoItem(null, 'New Item', '', 90, new Date(), false, null))
      .subscribe((newId: number) => expect(newId).toEqual(1));
    const testRequest = httpMock.expectOne(environment.HOST_URL + '/courses');
    testRequest.flush(items[0]);
    expect(testRequest.request.method).toEqual('POST');
  });

  it('should update an existing item', () => {
    const updatedItem = service.update(new VideoItem(3, 'New Item', '', 120, new Date(), false, null));
    expect(updatedItem.id).toEqual(3);
    const testRequest = httpMock.expectOne(environment.HOST_URL + '/courses/3');
    expect(testRequest.request.method).toEqual('PATCH');

  });

  it('should delete an existing item', () => {
    service.delete(2);
    const testRequest = httpMock.expectOne(environment.HOST_URL + '/courses/2');
    expect(testRequest.request.method).toEqual('DELETE');
  });

});
