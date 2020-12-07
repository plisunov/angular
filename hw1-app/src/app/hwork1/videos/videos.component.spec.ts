import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideosComponent} from './videos.component';
import {OrderCourcesPipe} from '../pipes/order-cources.pipe';
import {CourceService} from '../services/cource.service';
import {VideoItem} from '../model/video-item';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';


describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;
  let courcesService: CourceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosComponent, OrderCourcesPipe],
      providers: [CourceService],
      imports: [RouterTestingModule]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courcesService = TestBed.inject(CourceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message, and delete course if confirmed after delete button click', () => {
    spyOn(window.console, 'log');
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(courcesService, 'get').and.returnValue(new VideoItem(2, 'Name', 'Description', 10, new Date(), true));
    spyOn(courcesService, 'delete');
    const courseId = 12;
    component.onDelete(courseId);
    expect(window.console.log).toHaveBeenCalledWith('Deleted video id is ' + courseId);
    expect(courcesService.get).toHaveBeenCalledWith(courseId);
    expect(courcesService.delete).toHaveBeenCalled();
  });

  it('should not log message and dont delete course if not confirmed after delete button click', () => {
    spyOn(window.console, 'log');
    spyOn(window, 'confirm').and.returnValue(false);
    spyOn(courcesService, 'get').and.returnValue(new VideoItem(2, 'Name', 'Description', 10, new Date(), true));
    spyOn(courcesService, 'delete');
    const courseId = 12;
    component.onDelete(courseId);
    expect(window.console.log).toHaveBeenCalledTimes(0);
    expect(courcesService.get).toHaveBeenCalledWith(courseId);
    expect(courcesService.delete).toHaveBeenCalledTimes(0);
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
