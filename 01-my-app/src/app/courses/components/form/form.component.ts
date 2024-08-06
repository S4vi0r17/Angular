import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'courses-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() public onNewCourse: EventEmitter<Course> = new EventEmitter<Course>();

  public course: Course = {
    name: '',
    grade: null
  };

  public onSubmit(): void {
    // console.log('Form submitted', this.course);
    this.onNewCourse.emit(this.course);
    this.course = { name: '', grade: null };
  }
}
