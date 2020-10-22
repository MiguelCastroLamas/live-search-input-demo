import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ErrorHttpInterceptor } from './common/helpers/http/error.interceptor';

import { AppComponent } from './app.component';
import { LiveSearchComponent } from './shared/components/inputs/live-search/live-search.component';
import { BolderMatchesPipe } from './shared/pipes/bolder-matches.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LiveSearchComponent,
    BolderMatchesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
