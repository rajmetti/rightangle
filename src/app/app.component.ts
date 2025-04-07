import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeigeComponent } from "./beige/beige.component";
import { CourseCardComponent } from './course-card/course-card.component';
import { db } from "./db";
import { DB } from './Data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BeigeComponent, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = db;

  count: number =0

  onBookingPlaceSelected(event: DB){
    console.log("Booking place: ", event);
  }

  placeTrack(index:number, place:DB ){
    
    return place.id
  }
}
