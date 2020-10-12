import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { VideosComponent } from './videos/videos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [CoursesComponent, VideosComponent, HeaderComponent, FooterComponent, VideoItemComponent, SearchComponent, LogoComponent],
  exports: [
    CoursesComponent
  ],
    imports: [
        CommonModule
    ]
})
export class Hwork1Module { }
