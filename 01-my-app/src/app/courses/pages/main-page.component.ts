import { Component } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Component({
    selector: 'app-courses-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})

export class MainPageComponent {
    public courses: Course[] = [
        { name: 'Design Patterns', grade: 90 },
        { name: 'Software Architecture', grade: 85 },
        { name: 'User Experience', grade: 80 },
        { name: 'Web Development', grade: 75 },
        { name: 'Mobile Development', grade: 70 }
    ];
}