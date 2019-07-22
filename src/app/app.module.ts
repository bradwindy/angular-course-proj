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
import {
  faHeart as fasHeart,
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faStar as fasStar,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as farHeart,
  faStar as farStar
} from '@fortawesome/free-regular-svg-icons';
import { CardComponent } from './card/card.component';
import { SwitchCardComponent } from './switch-card/switch-card.component';
import { AddableListComponent } from './addable-list/addable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    CardComponent,
    SwitchCardComponent,
    AddableListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(
      fasStar,
      farStar,
      fasHeart,
      farHeart,
      faPlusCircle,
      faPlus,
      faPlusSquare,
      faTimes
    );
  }
}
