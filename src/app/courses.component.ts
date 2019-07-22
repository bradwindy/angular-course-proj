import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-start',
  template: `
    <p>{{ title }}</p>
    <ul class="p-0">
      <li *ngFor="let course of courses" class="list-unstyled pb-2">
        <button
          class="btn btn-primary"
          [class.active]="isActive"
          (click)="onSave()"
        >
          {{ course }}
        </button>
      </li>
    </ul>
    <input [(ngModel)]="inputField" (keyup.enter)="onEnter()" />
    <br />
  `
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  isActive = false;
  inputField;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onSave() {
    alert('Button Clicked');
  }

  onEnter() {
    alert('Text is: ' + this.inputField);
  }
}
