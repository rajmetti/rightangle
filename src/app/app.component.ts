import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeigeComponent } from "./beige/beige.component";
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BeigeComponent, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic';

  data = {
    name: "John",
    age: 30,
    city: "New York"
  }

  click(){
    return "Hello"
  }

  onKeyUp(value: string){
    this.data.name = value;
  }
}
