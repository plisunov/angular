import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VideoItem} from '../model/video-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemComponent implements OnInit {

  @Input()
  public video: VideoItem;

  @Output()
  public deleteEvent: EventEmitter<number> = new EventEmitter<number>();


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onCourseEdit(): void {
    console.log('Go to Course view');
    this.router.navigate(['/courses', this.video.id]);
  }

  onCourseDelete(): void {
    this.deleteEvent.emit(this.video.id);
  }
}
