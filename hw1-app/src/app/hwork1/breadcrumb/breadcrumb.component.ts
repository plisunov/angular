import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() courseName: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public goToList(): void {
    this.router.navigate(['/courses']);
  }
}
