import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BreadcrumbComponent} from './breadcrumb.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to the list', () => {
    spyOn(router, 'navigate');
    component.goToList();
    expect(router.navigate).toHaveBeenCalled();
  });
});
