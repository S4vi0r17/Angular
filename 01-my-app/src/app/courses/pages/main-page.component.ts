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
        public courseService: CourseService
    ) { }
}