import {Injectable} from '@angular/core';
import {IVideoItem} from '../model/video-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourceService {

  private videoItems: IVideoItem[] = [];

  constructor(private httpClient: HttpClient) {
  }

  public getAll(startIndex: number, pageSize: number, searchString: string): Observable<IVideoItem[]> {
    return this.httpClient.get<IVideoItem[]>(environment.HOST_URL + '/courses', {
      params: {start: startIndex.toString(), count: pageSize.toString(), textFragment: searchString}
    });
  }

  public get(courceId: number): Observable<IVideoItem> {
    return this.httpClient.get<IVideoItem>(environment.HOST_URL + '/courses/' + courceId);
  }

  public create(cource: IVideoItem): Observable<number> {
    return this.httpClient.post(environment.HOST_URL + '/courses', cource)
      .pipe(map((item: IVideoItem) => item.id));
  }

  public update(cource: IVideoItem): IVideoItem {
    this.httpClient.patch(environment.HOST_URL + '/courses/' + cource.id, cource).subscribe((item: IVideoItem) => {
      cource = item;
    });
    return cource;
  }

  public delete(courceId: number): void {
    this.httpClient.delete(environment.HOST_URL + '/courses/' + courceId).subscribe(() => {
      console.log('Course deleted');
    });
  }

}
