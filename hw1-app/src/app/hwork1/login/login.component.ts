import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Login} from '../../store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name: string;
  public password: string;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  public login(): void {
    this.store.dispatch(new Login({login: this.name, password: this.password}));
  }

}
