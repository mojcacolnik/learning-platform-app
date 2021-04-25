import { CourseService } from './../course.service';
import { Course } from './../course';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() course: Course;
  courses: Course[];

  constructor() {}

  ngOnInit(): void {}
}
