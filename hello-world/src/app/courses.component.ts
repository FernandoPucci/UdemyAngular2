import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `<h2 [textContent]="title"></h2>
    <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
    </ul>

    <img [src]="imageUrl" />
    <br />

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

    `
})

export class CoursesComponent {
    title = 'List of Courses';
    courses;
    authors;
    imageUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;
    active = false;
    isActive = false;
    //
    email = 'me@email.com';

    constructor(service: CoursesService, authorService: AuthorsService) {
        this.courses = service.getCourses();
        this.authors = authorService.getAuthors();
    }

    onSave($event) {
        console.log('Button was clicked!');
        console.log($event);
    }

    onKeyUp() {
        console.log(this.email);
    }

}
