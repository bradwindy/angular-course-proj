import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponentModule } from './courses.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [BrowserModule, AppRoutingModule, CoursesComponentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
