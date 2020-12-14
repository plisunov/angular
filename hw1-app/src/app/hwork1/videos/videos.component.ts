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

  private searchString = '';

  private pagingSize = 3;

  private startIndex = 0;


  constructor(private courcesService: CourceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.courcesService.getAll(this.startIndex, this.pagingSize, this.searchString).subscribe((list) => {
      this.filteredVideoItems = list;
    });
  }

  addItem(): void {
    this.router.navigate(['/courses/new']);
  }

  onSearchStringChanged(searchString: string): void {
    this.searchString = searchString;
    this.startIndex = 0;
    this.courcesService.getAll(this.startIndex, this.pagingSize, this.searchString).subscribe((list) => {
      this.filteredVideoItems = list;
    });
  }

  onShowMore(): void {
    this.startIndex = (this.startIndex + this.pagingSize) + 1;
    this.courcesService.getAll(this.startIndex, this.pagingSize, this.searchString).subscribe((list) => {
      this.filteredVideoItems = list;
    });

  }

  onDelete($event: number): void {
    const deleteItem: VideoItem = this.filteredVideoItems.find(c => c.id === $event);
    const confirmation = confirm('Are you really wan to delete ' + deleteItem.name + '?');
    if (confirmation) {
      console.log('Deleted video id is ' + $event);
      this.courcesService.delete($event);
      this.startIndex = 0;
      this.searchString = '';
      this.courcesService.getAll(this.startIndex, this.pagingSize, this.searchString).subscribe((list) => {
        this.filteredVideoItems = list;
      });
    }
  }
}
