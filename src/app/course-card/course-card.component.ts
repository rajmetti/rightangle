import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DB} from "../Data";
import { log } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  place: DB = {
    id: 0,
    name: '',
    description: '',
    image: '',
    season: '',
    vibes: ''
  }

  @Input()
  index: number = 0;
  

  @Output()
  bookPlace = new EventEmitter<DB>();

  onPlacing(){
    this.bookPlace.emit(this.place);
    console.log("Placing: ", this.place.name);
  }

  isImageVisible(): boolean{
    return this.place.image !== ''
  }

}
