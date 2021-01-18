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
    HttpClientModule
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
export class AppModule {
}
