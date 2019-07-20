import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';

describe('CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [FormsModule] }));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
