import { AfterViewInit, Component, ElementRef, Injectable, OnChanges, OnInit, QueryList, signal, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeigeComponent } from "./beige/beige.component";
import { CourseCardComponent } from './course-card/course-card.component';
import { db } from "./db";
import { DB } from './Data';
import { CommonModule } from '@angular/common';
import { CountryComponent } from "./country/country.component";
import { Country } from './models/country';
import { SupabaseService } from './supabase-componenet';
import { CountryDetailsComponent } from "./country-details/country-details.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, CountryComponent, CountryDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@Injectable({providedIn: 'root'})
export class AppComponent implements AfterViewInit, OnChanges, OnInit{

  // @ViewChild('card', {read: ElementRef})
  // card: CourseCardComponent = new CourseCardComponent;
  @ViewChildren(CourseCardComponent)
  card?: QueryList<CourseCardComponent>;

  countryDetail: Country = {
    id: 0,
    code: '',
    country: '',
    flag: '',
    la: '',
    lt: '',
    name: ''
  }

  count: number =0

  ngAfterViewInit(){
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this.onFetchCountires()
    this.onChangeCountry()
  }

  data:Country[] = []

  val = signal(this.data[0])

  onChangeCountry(){
    const random = Math.floor(Math.random() * this.data.length)
    this.val.set(this.data[random])
  }

  onSelectCo(id: number){
    const random = Math.floor(Math.random() * this.data.length)
    this.countryDetail = this.data[id-1]
  }

  onFetchCountires(){
    this.supabaseService.client().then((response: Country[]) => {
      this.data = response
    }).catch((error) => {
      console.log("err ", error)
    }) 
  }
  constructor(private supabaseService: SupabaseService) {}

}

