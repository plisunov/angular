import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {select, Store} from '@ngrx/store';
import {LogOut} from '../../store/actions/user.actions';
import {selectUser} from '../../store/selectors/user.selectors';
import {IUserState} from '../../store/states/user.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated: boolean;
  public lastName: string;
  public firstName: string;

  public loggedUser$ = this.store.pipe(select(selectUser)).subscribe((user: IUserState) => {
    this.lastName = user.user.lastName;
    this.firstName = user.user.firstName;
  });

  constructor(private authService: AuthService, private store: Store) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onClick(): void {
    this.store.dispatch(new LogOut());
  }

}
