import { MessagesService } from './messages.service';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  constructor(private messagesService: MessagesService) {}
}
