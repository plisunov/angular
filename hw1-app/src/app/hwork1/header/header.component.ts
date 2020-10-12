import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public loggedUser: User;

  constructor() {
  }

  ngOnInit(): void {
    this.loggedUser = {id: "user1", firstName: "Ivan", lastName: "Ivanov"};
  }

  onClick(): void {
    alert("Log out")
  }

}
