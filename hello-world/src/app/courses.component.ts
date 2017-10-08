import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
    </ul>

    <h2>{{ authors.length }} Authors</h2>
    <ul>
        <li *ngFor="let author of authors">
        {{author}}
        </li>
    </ul>

    `
})

export class CoursesComponent {
    title = 'List of Courses';
    courses;
    authors;

    constructor(service: CoursesService, authorService: AuthorsService) {
        this.courses = service.getCourses();
        this.authors = authorService.getAuthors();
    }

}
