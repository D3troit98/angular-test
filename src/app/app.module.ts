import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent, RoomsComponent, RoomsListComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
