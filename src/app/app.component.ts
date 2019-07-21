import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-proj';

  post = {
    title: 'Title',
    isFavourite: false
  };

  onFavouriteChange(eventArgs) {
    if (eventArgs) {
      alert('Favourite-d');
    } else {
      alert('Un-favourite-d');
    }
  }
}
