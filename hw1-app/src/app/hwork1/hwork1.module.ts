import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from './courses/courses.component';
import {VideosComponent} from './videos/videos.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {VideoItemComponent} from './video-item/video-item.component';
import {SearchComponent} from './search/search.component';
import {LogoComponent} from './logo/logo.component';
import {FormsModule} from '@angular/forms';
import {CourseComponent} from './course/course.component';
import {RouterModule} from '@angular/router';
import {BorderStyleDirective} from './video-item/border-style.directive';
import { TimeformatPipe } from './pipes/timeformat.pipe';
import { OrderCourcesPipe } from './pipes/order-cources.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [CoursesComponent,
    VideosComponent,
    HeaderComponent,
    FooterComponent,
    VideoItemComponent,
    SearchComponent,
    LogoComponent,
    CourseComponent,
    BorderStyleDirective,
    TimeformatPipe,
    OrderCourcesPipe,
    FilterPipe,
    LoginComponent],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class Hwork1Module {
}
