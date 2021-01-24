import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Hwork1Module} from './hwork1/hwork1.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './hwork1/services/token.interceptor';
import {LoaderInterceptor} from './hwork1/services/loader.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './store/reducers/user.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/effects/user.effects';
import {coursesReducer} from './store/reducers/courses.reducer';
import {CoursesEffects} from './store/effects/courses.effects';
import {courseReducer} from './store/reducers/course.reducer';
import {CourseEffects} from './store/effects/course.effects';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';

import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

export class MissingTranslationService implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}


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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
      useDefaultLang: false,
    }),
    StoreModule.forRoot({user: userReducer, courses: coursesReducer, course: courseReducer}),
    EffectsModule.forRoot([UserEffects, CoursesEffects, CourseEffects])
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
