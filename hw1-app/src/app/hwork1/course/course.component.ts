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
      this.courceService.get(Number(this.videoIdStr)).subscribe((item) => this.videoItem = item);
    } else {
      this.editMode = false;
      this.videoItem = new VideoItem(null, null, null, null, new Date(), false, null);
    }
  }

  public onSave(): void {
    if (this.editMode) {
      this.courceService.update(this.videoItem);
    } else {
      this.courceService.create(this.videoItem).subscribe();
    }
    this.router.navigate(['/courses']);
  }

  public onCancell(): void {
    this.router.navigate(['/courses']);
  }

  onDurationChange($event: number): void {
    this.videoItem.length = $event;
  }
}
