import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tweet } from '../models/Tweet';

@Component({
  selector: 'app-tweet-details',
  imports: [NgIf],
  templateUrl: './tweet-details.component.html',
  styleUrl: './tweet-details.component.css'
})
export class TweetDetailsComponent {

  @Input({required : true})
  selectedTweet !: Tweet

}
