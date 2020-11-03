import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private path: ActivatedRoute) {
  }

  public videoIdStr: string;

  ngOnInit(): void {
    this.videoIdStr = this.path.snapshot.paramMap.get('id');
    console.log('Try to edit video with id ' + this.videoIdStr);
  }

}
