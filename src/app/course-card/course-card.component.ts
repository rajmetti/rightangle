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
    vibes: '',
    active: false,
    period: new Date(),
    season_starts: new Date(),
    season_ends: new Date()
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

  getStyles(){
    return ['card']
    // return {
    //   'card' : true
    // }
  }

  isActiveStyle(){
    if(this.place.active){
      return {
      'opacity': '100%'
      }
    }else 
    return {
      'opacity': '75%'
    }
  }

  get isActiveCard(): boolean {
    return this.place.active !== false; // Default to true if undefined
  }

}
