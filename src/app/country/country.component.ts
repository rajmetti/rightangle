import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { SupabaseService } from '../supabase-componenet';
import { Country } from '../models/country';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() name: string = 'Button';
  @Input() avatar!: string;
  @Input() id!: number;

  @Output() select: EventEmitter<number> = new EventEmitter();

  onSelectCountry(){
    this.select.emit(this.id)
  }

  
}
