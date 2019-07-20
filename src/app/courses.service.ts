import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() {
  }

  static getCourses() {
    return ['one', 'two', 'three'];
  }
}
