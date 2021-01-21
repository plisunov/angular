import {Injectable} from '@angular/core';
import {IVideoItem} from '../model/video-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {select, Store} from '@ngrx/store';
import {selectEndValue, selectSearchValue, selectStartValue} from '../../store/selectors/courses.selectors';

@Injectable({
  providedIn: 'root'
})
export class CourceService {

  private videoItems: IVideoItem[] = [];

  constructor(private httpClient: HttpClient, private store: Store) {
  }

  public getAll(): Observable<IVideoItem[]> {
    let startIndex: number;
    let pageSize: number;
    let searchString: string;
    this.store.pipe(select(selectStartValue)).subscribe((start: number) => startIndex = start);
    this.store.pipe(select(selectEndValue)).subscribe((paging: number) => pageSize = paging);
    this.store.pipe(select(selectSearchValue)).subscribe((search: string) => searchString = search);
    return this.httpClient.get<IVideoItem[]>(environment.HOST_URL + '/courses', {
      params: {start: startIndex.toString(), count: pageSize.toString(), textFragment: searchString}
    });
  }

  public get(courceId: number): Observable<IVideoItem> {
    return this.httpClient.get<IVideoItem>(environment.HOST_URL + '/courses/' + courceId);
  }

  public create(cource: IVideoItem): Observable<any> {
    return this.httpClient.post(environment.HOST_URL + '/courses', cource);
  }

  public update(cource: IVideoItem): Observable<any> {
    return this.httpClient.patch(environment.HOST_URL + '/courses/' + cource.id, cource);
  }

  public delete(courceId: number): Observable<any> {
    return this.httpClient.delete(environment.HOST_URL + '/courses/' + courceId);
  }

}
