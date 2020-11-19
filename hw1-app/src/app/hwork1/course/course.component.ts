import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IVideoItem, VideoItem} from '../model/video-item';
import {CourceService} from '../services/cource.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private path: ActivatedRoute,
              private courceService: CourceService,
              private router: Router) {
  }

  public videoItem: IVideoItem;

  public videoIdStr: string;

  ngOnInit(): void {
    this.videoIdStr = this.path.snapshot.paramMap.get('id');
    if (this.videoIdStr) {
      this.videoItem = this.courceService.get(Number(this.videoIdStr));
    } else {
      this.videoItem = new VideoItem(null, null, null, 0, new Date(), false);
    }
    console.log('Try to edit video with id ' + this.videoIdStr);
  }

  public onSave(): void {
    if (this.videoIdStr) {
      this.courceService.update(this.videoItem);
    } else {
      this.courceService.create(this.videoItem);
    }
    window.console.log('Saved course');
    this.router.navigate(['/list']);
  }

  public onCancell(): void {
    window.console.log('Cancel edit course');
    this.router.navigate(['/list']);
  }

  onDurationChange($event: number): void {
    this.videoItem.duration = $event;
  }
}
