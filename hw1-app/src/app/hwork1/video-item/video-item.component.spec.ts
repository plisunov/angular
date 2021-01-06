import {ComponentFixture, TestBed} from '@angular/core/testing';
import {VideoItemComponent} from './video-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {VideoItem} from '../model/video-item';
import {Router} from '@angular/router';
import {OrderCourcesPipe} from '../pipes/order-cources.pipe';
import {TimeformatPipe} from '../pipes/timeformat.pipe';

describe('VideoItemComponent', () => {
  let component: VideoItemComponent;
  let fixture: ComponentFixture<VideoItemComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoItemComponent, OrderCourcesPipe, TimeformatPipe],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be logged', () => {
    spyOn(window.console, 'log');
    component.video = new VideoItem(23, 'Test', '', 25, new Date(), true, null);
    component.onCourseEdit();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should log message on edit course button click', () => {
    spyOn(window.console, 'log');
    component.video = new VideoItem(23, 'Test', '', 25, new Date(), true, null);
    component.onCourseEdit();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should navigate  to course edit on edit course button click', () => {
    spyOn(router, 'navigate');
    component.video = new VideoItem(2, 'Test', '', 25, new Date(), true, null);
    component.onCourseEdit();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('delete event should be emit on delete course button click', () => {
    component.video = new VideoItem(23, 'Test', '', 25, new Date(), true, null);
    spyOn(component.deleteEvent, 'emit');
    component.onCourseDelete();
    expect(component.deleteEvent.emit).toHaveBeenCalledWith(23);
  });

});
