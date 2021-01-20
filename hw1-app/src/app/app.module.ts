import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Hwork1Module} from './hwork1/hwork1.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './hwork1/services/token.interceptor';
import {LoaderInterceptor} from './hwork1/services/loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './store/reducers/user.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/effects/user.effects';
import {coursesReducer} from './store/reducers/courses.reducer';
import {CoursesEffects} from './store/effects/courses.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Hwork1Module,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({user: userReducer, courses: coursesReducer}),
    EffectsModule.forRoot([UserEffects, CoursesEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule1 {
}
