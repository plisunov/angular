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

  private editMode: boolean;

  ngOnInit(): void {
    this.videoIdStr = this.path.snapshot.paramMap.get('id');
    if (this.videoIdStr !== 'new') {
      this.editMode = true;
      this.videoItem = this.courceService.get(Number(this.videoIdStr));
    } else {
      this.editMode = false;
      this.videoItem = new VideoItem(null, null, null, 0, new Date(), false);
    }
    console.log('Try to edit video with id ' + this.videoIdStr);
  }

  public onSave(): void {
    if (this.editMode) {
      this.courceService.update(this.videoItem);
    } else {
      this.courceService.create(this.videoItem);
    }
    window.console.log('Saved course');
    this.router.navigate(['/courses']);
  }

  public onCancell(): void {
    window.console.log('Cancel edit course');
    this.router.navigate(['/courses']);
  }

  onDurationChange($event: number): void {
    this.videoItem.duration = $event;
  }
}
