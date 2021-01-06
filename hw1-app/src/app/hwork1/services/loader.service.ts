import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private subject = new Subject<boolean>();

  constructor() {
  }

  public showLoader(show: boolean): void {
    this.subject.next(show);
  }

  public getSubject(): Subject<boolean> {
    return this.subject;
  }

}
