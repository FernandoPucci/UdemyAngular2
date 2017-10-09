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
    <br />
    {{ course.title | uppercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'1.2-2' }} <br/>
    {{ course.price | currency:BRL:true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
    {{ longText | summary:10 }}
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
    //
    course = {
        title: 'The Complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    //
    longText = `Ainda assim, existem dúvidas a respeito de como o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade dos modos de operação convencionais.`;

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
