import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from './hwork1/course/course.component';
import {LoginComponent} from './hwork1/login/login.component';
import {CoursesComponent} from './hwork1/courses/courses.component';
import {NotFoundComponent} from './hwork1/not-found/not-found.component';
import {AuthGuard} from './hwork1/services/auth.guard';

const routes: Routes = [
  {path: 'courses/:id', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'courses/new', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
