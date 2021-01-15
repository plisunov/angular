import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let router: Router;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [AuthService],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    })
      .compileComponents();
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService on button click', () => {
    spyOn(authService, 'logout').and.callThrough();
    component.onClick();
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should redirect to login page on button click', () => {
    spyOn(router, 'navigate');
    component.onClick();
    expect(router.navigate).toHaveBeenCalled();
  });

});
