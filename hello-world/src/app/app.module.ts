import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleComponent } from './title/title.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [
    CoursesService,
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
