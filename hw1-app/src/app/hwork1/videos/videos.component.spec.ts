import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideosComponent} from './videos.component';
import {OrderCourcesPipe} from '../pipes/order-cources.pipe';
import {CourceService} from '../services/cource.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../services/auth.service';
import {CourseComponent} from '../course/course.component';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {VideoItem} from '../model/video-item';


describe('VideosComponent', () => {
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;
  let courcesService: CourceService;
  let router: Router;
  let authService: AuthService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosComponent, OrderCourcesPipe],
      providers: [CourceService, AuthService],
      imports: [RouterTestingModule.withRoutes([{
        path: 'courses/new',
        component: CourseComponent
      }]), HttpClientTestingModule]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    router.initialNavigation();
    authService = TestBed.inject(AuthService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courcesService = TestBed.inject(CourceService);
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete course if confirmed after delete button click', () => {
    component.filteredVideoItems = [new VideoItem(12, 'Name', 'Description', 10, new Date(), true, null)];
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(courcesService, 'getAll').and.returnValue(new Observable());
    spyOn(courcesService, 'delete');
    const courseId = 12;
    component.onDelete(courseId);
    expect(courcesService.delete).toHaveBeenCalledWith(courseId);
    expect(courcesService.getAll).toHaveBeenCalled();
  });

  it('should not delete course if not confirmed after delete button click', () => {
    component.filteredVideoItems = [new VideoItem(12, 'Name', 'Description', 10, new Date(), true, null)];
    spyOn(window, 'confirm').and.returnValue(false);
    spyOn(courcesService, 'getAll').and.returnValue(new Observable());
    spyOn(courcesService, 'delete');
    const courseId = 12;
    component.onDelete(courseId);
    expect(courcesService.delete).toHaveBeenCalledTimes(0);
    expect(courcesService.getAll).toHaveBeenCalledTimes(0);
  });

  it('should call course service on  show more button click', () => {
    spyOn(courcesService, 'getAll').and.returnValue(new Observable());
    component.onShowMore();
    expect(courcesService.getAll).toHaveBeenCalled();
  });

  it('should navigate to the course edit page on add course button click', () => {
    spyOn(router, 'navigate');
    component.addItem();
    expect(router.navigate).toHaveBeenCalledWith(['/courses/new']);
  });

  it('should call course service on search string changed', () => {
    spyOn(courcesService, 'getAll').and.returnValue(new Observable());
    component.onSearchStringChanged('searchString');
    expect(courcesService.getAll).toHaveBeenCalled();
  });

});
