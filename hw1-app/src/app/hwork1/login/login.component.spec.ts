import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let authService: AuthService;
  let httpClient: HttpClient;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call auth service', () => {
    spyOn(authService, 'login').and.callThrough();
    component.login();
    expect(authService.login).toHaveBeenCalled();
  });

});
