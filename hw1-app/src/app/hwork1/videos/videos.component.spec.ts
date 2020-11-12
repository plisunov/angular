import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideosComponent} from './videos.component';
import {OrderCourcesPipe} from '../pipes/order-cources.pipe';


describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosComponent, OrderCourcesPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message on delete course button click', () => {
    spyOn(window.console, 'log');
    const courseId = 12;
    component.onDelete(courseId);
    expect(window.console.log).toHaveBeenCalledWith('Deleted video id is ' + courseId);
  });

  it('should log message on show more button click', () => {
    spyOn(window.console, 'log');
    component.onShowMore();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should log message on add course button click', () => {
    spyOn(window.console, 'log');
    component.addItem();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should call filter pipe on search string changed', () => {
    spyOn(component.filterPipe, 'transform');
    component.onSearchStringChanged('searchString');
    expect(component.filterPipe.transform).toHaveBeenCalled();
  });

});
