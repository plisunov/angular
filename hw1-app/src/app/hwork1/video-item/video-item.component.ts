import {Component, Input, OnInit} from '@angular/core';
import {VideoItem} from "../model/video-item";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input()
  public video: VideoItem;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCourceEdit() {
    alert("TBD");
  }

  onCourceDelete() {
    alert("TBD");
  }
}
