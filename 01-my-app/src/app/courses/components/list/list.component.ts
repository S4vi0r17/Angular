import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'courses-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() public coursesList: Course[] = [];

  @Output() public onEdit: EventEmitter<Course> = new EventEmitter<Course>();

  @Output() public onDelete: EventEmitter<string> = new EventEmitter<string>();

  // Another option would be to set the id as optional in the parameters 
  onDeleteCourse(id: string): void {
    this.onDelete.emit(id);
  }
}
