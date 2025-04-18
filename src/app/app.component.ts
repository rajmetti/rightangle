import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeigeComponent } from "./beige/beige.component";
import { CourseCardComponent } from './course-card/course-card.component';
import { db } from "./db";
import { DB } from './Data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BeigeComponent, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = db;

  onBookingPlaceSelected(event: DB){
    console.log("Booking place: ", event);
  }
}
