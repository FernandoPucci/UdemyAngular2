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

        <table>
            <tr>
                <td [attr.colspan]= "colSpan">TEST COLSPAN</td>
            </tr>
        </table>
    `
})

export class CoursesComponent {
    title = 'List of Courses';
    courses;
    authors;
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    constructor(service: CoursesService, authorService: AuthorsService) {
        this.courses = service.getCourses();
        this.authors = authorService.getAuthors();
    }

}
