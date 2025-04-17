import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-details',
  imports: [],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {

  @Input() name !: string;
  @Input() code !: string;
  @Input() latitude !: string;
  @Input() longitude !: string;
}
