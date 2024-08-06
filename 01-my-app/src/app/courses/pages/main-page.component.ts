import { Component } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'app-courses-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})

export class MainPageComponent {
    constructor(
        private courseService: CourseService
    ) { }

    get courses(): Course[] {
        return [...this.courseService.courses]
    }

    onDeleteCourse(id: string): void {
        this.courseService.deleteCourse(id)
    }

    onNewCourse(course: Course): void {
        this.courseService.addCourse(course)
    }
}
