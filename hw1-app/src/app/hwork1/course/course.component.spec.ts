import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, Router} from '@angular/router';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('21');
    expect(component).toBeTruthy();
  });
});
