import {Component, OnInit} from '@angular/core';
import {IUser} from '../model/user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuthenticated: boolean;

  public loggedUser: IUser;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.loggedUser = this.authService.getUserInfo();
  }

  onClick(): void {
    console.log('LogOut button pressed');
    this.authService.logout();
    this.loggedUser = this.authService.getUserInfo();
    this.router.navigate(['/login']);
  }

}
