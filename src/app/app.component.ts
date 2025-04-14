import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
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
export class AppComponent implements AfterViewInit, OnChanges, OnInit{

  // @ViewChild('card', {read: ElementRef})
  // card: CourseCardComponent = new CourseCardComponent;
  @ViewChildren(CourseCardComponent)
  card?: QueryList<CourseCardComponent>;

  data = db;

  count: number =0

  ngAfterViewInit(){
    this.card?.changes.subscribe(
      (card: QueryList<CourseCardComponent>) => {
        console.log("here is the new item ", card.last)
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`This is the changes`)
  }
  ngOnInit(): void {
    console.log(`This is the OnInit`)
  }

  onBookingPlaceSelected(event: DB){
    console.log("Booking place: ", this.card);
    this.data.push(
      {
        "id": 6,
        "name": "Hokkaido",
        "season": "Winter",
        "description": "Hokkaido is famous for its winter sports and stunning snow-covered landscapes. It's a great place for skiing and snowboarding.",
        "image": "https://cdn.pixabay.com/photo/2022/04/04/02/52/cherry-blossoms-7110279_1280.jpg",
        "vibes": "Chilly, Adventurous",
        "active" : false,
        "period": new Date(2025,2,20),
        "season_starts" : new Date(2025,11,22),
        "season_ends" : new Date(2025,2,20)

    }
    )
  }

}

