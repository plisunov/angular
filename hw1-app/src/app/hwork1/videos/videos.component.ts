import {Component, OnInit} from '@angular/core';
import {VideoItem} from '../model/video-item';
import {FilterPipe} from '../pipes/filter.pipe';
import {CourceService} from '../services/cource.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public filteredVideoItems: VideoItem[];

  public video: VideoItem;

  public filterPipe = new FilterPipe();

  private searchString: string;

  constructor(private courcesService: CourceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.filteredVideoItems = this.courcesService.getAll();
  }

  addItem(): void {
    console.log('Add new course button');
    this.router.navigate(['/courses/new']);
  }

  onSearchStringChanged(searchString: string): void {
    this.filteredVideoItems = this.filterPipe.transform(this.courcesService.getAll(), searchString);
    this.searchString = searchString;
  }

  onShowMore(): void {
    console.log('Show more button was pressed');
  }

  onDelete($event: number): void {
    const deleteItem: VideoItem = this.courcesService.get($event);
    const confirmation = confirm('Are you really wan to delete ' + deleteItem.title + '?');
    if (confirmation) {
      console.log('Deleted video id is ' + $event);
      this.courcesService.delete($event);
      this.filteredVideoItems = this.filterPipe.transform(this.courcesService.getAll(), this.searchString);
    }
  }
}
