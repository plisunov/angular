import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
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
    spyOn(authService, 'login');
    component.login();
    expect(authService.login).toHaveBeenCalled();
  });

  it('should redirect to the list page', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalled();

  });
});
