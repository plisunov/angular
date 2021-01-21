import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAutor} from '../model/autor';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IAutor[]> {
    return this.httpClient.get<IAutor[]>(environment.HOST_URL + '/authors/');
  }

}
