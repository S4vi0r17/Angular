import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public courses: Course[] = [
    {
      id: uuid(),
      name: 'Design Patterns',
      grade: 90
    },
    {
      id: uuid(),
      name: 'Software Architecture',
      grade: 85
    },
    {
      id: uuid(),
      name: 'User Experience',
      grade: 80
    },
    {
      id: uuid(),
      name: 'Web Development',
      grade: 75
    },
    {
      id: uuid(),
      name: 'Mobile Development',
      grade: 70
    }
  ];

  onNewCourse(course: Course): void {
    const newCourse = {
      ...course,
      id: uuid()
    };
    this.courses.push(newCourse);
  }

  onDeleteCourse(id: string): void {
    this.courses = this.courses.filter(course => course.id !== id)
  }

}
