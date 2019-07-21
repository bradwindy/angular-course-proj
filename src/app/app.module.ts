import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [AppComponent, CoursesComponent, FavouriteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(farStar, fasStar);
  }
}
