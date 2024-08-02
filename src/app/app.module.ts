import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import DataDogRumHelper from './shared/data-log-rum';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageTestComponent } from './components/error-page-test/error-page-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ErrorPageTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    DataDogRumHelper.initlalRUM();
  }
}