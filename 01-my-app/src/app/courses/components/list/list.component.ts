import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'courses-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() public coursesList: Course[] = [];
  
}
