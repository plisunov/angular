import {Component, ContentChild, OnInit} from '@angular/core';
import {VideoItem} from "../model/video-item";
import {VideoItemComponent} from "../video-item/video-item.component";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videoItems: VideoItem[];

  public video: VideoItem;

  constructor() {
  }

  ngOnInit(): void {
    this.videoItems = [
      {
        id: "cource1",
        title: "Name1",
        description: "Description1",
        creationDate: new Date(),
        duration: 30
      },
      {
        id: "cource2",
        title: "Name2",
        description: "Description2",
        creationDate: new Date(),
        duration: 90
      },
      {
        id: "cource3",
        title: "Name3",
        description: "Description3Description3Description3Description3Description3Description3Description3Description3Description3Description3 Description3Description3Description3Description3Description3Description3Description3Description3",
        creationDate: new Date(),
        duration: 120
      }
    ]
  }

  addItem() {
    alert("TBD")
  }
}
