import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Store} from '@ngrx/store';
import {UserFromLocalStorageLoad} from '../../store/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private route: Router,
              private store: Store) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authenticated = this.authService.isAuthenticated();
    if (authenticated) {
      this.store.dispatch(new UserFromLocalStorageLoad());
      return true;
    } else {
      return this.route.parseUrl('/login');
    }
  }

}
