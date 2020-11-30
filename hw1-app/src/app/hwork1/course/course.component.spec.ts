import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseComponent} from './course.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {CourceService} from '../services/cource.service';
import {CoursesComponent} from '../courses/courses.component';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let route: ActivatedRoute;
  let router: Router;
  let courseService: CourceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
      providers: [CourceService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get(): string {
                return 'new';
              },
            },
          },
        }
      }],
      imports: [RouterTestingModule.withRoutes([{path: 'courses', component: CoursesComponent}])]
    })
      .compileComponents();
  });

  function createAndSetupComponent(): void {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    courseService = TestBed.inject(CourceService);
    router = TestBed.inject(Router);
    router.initialNavigation();
    route = TestBed.inject(ActivatedRoute);
  }

  it('should create', () => {
    createAndSetupComponent();
    expect(component).toBeTruthy();
  });

  it('should save a new item when Save button pressed', () => {
    createAndSetupComponent();
    spyOn(courseService, 'create');
    component.onSave();
    expect(courseService.create).toHaveBeenCalled();
  });

  it('should update an existing item when Save button pressed', () => {
    TestBed.overrideProvider(ActivatedRoute, {
      useValue: {
        snapshot: {
          paramMap: {
            get(): string {
              return '1';
            },
          },
        },
      }
    }).compileComponents();
    createAndSetupComponent();
    spyOn(courseService, 'update');
    component.onSave();
    expect(courseService.update).toHaveBeenCalled();
  });

  it('should navigate to the list when Save button pressed', () => {
    createAndSetupComponent();
    spyOn(router, 'navigate');
    component.onSave();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should navigate to the list when Cancel button pressed', () => {
    createAndSetupComponent();
    spyOn(router, 'navigate');
    component.onCancell();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should follow for changed duration', () => {
    createAndSetupComponent();
    component.onDurationChange(50);
    expect(component.videoItem.duration).toEqual(50);
  });

});
