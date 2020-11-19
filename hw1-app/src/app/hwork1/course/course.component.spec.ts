import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {CourceService} from '../services/cource.service';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let route: ActivatedRoute;
  let router: Router;
  let courceService: CourceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
      providers: [CourceService],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courceService = TestBed.inject(CourceService);
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('should create', () => {
    spyOn(route.snapshot.paramMap, 'get').and.returnValue('56');
    expect(component).toBeTruthy();
  });

  it('should save a new item when Save button pressed', () => {
    spyOn(courceService, 'create');
    component.onSave();
    expect(courceService.create).toHaveBeenCalled();
  });

  it('should update an existing item when Save button pressed', () => {
    spyOn(courceService, 'update');
    component.videoIdStr = '15';
    component.onSave();
    expect(courceService.update).toHaveBeenCalled();
  });

  it('should navigate to the list when Save button pressed', () => {
    spyOn(router, 'navigate');
    component.onSave();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should navigate to the list when Cancel button pressed', () => {
    spyOn(router, 'navigate');
    component.onCancell();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should follow for changed duration', () => {
    component.onDurationChange(50);
    expect(component.videoItem.duration).toEqual(50);
  });

});
