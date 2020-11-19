import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './hwork1/course/course.component';
import {LoginComponent} from './hwork1/login/login.component';
import {CoursesComponent} from './hwork1/courses/courses.component';

const routes: Routes = [
  {path: 'course/:id', component: CourseComponent},
  {path: 'list', component: CoursesComponent},
  {path: '', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
