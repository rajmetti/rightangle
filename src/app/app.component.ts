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
import { Tweet } from './models/Tweet';
import { TweetDetailsComponent } from "./tweet-details/tweet-details.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, CountryComponent, CountryDetailsComponent, TweetDetailsComponent],
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
    //this.onFetchCountires()
    this.all()
    this.onChangeCountry()
  }

  data:Country[] = []
  tweets:Tweet[] = []
  selectedTweet : Tweet = {
    _id: {
      $oid : ''
    },
    text: '',
    in_reply_to_status_id: undefined,
    retweet_count: undefined,
    contributors: undefined,
    created_at: '',
    geo: undefined,
    source: '',
    retweeted_status: {
      text: '',
      in_reply_to_status_id: undefined,
      retweet_count: undefined,
      contributors: undefined,
      created_at: '',
      geo: undefined,
      source: '',
      coordinates: undefined,
      in_reply_to_screen_name: undefined,
      truncated: false,
      entities: {
        user_mentions: [],
        urls: [],
        hashtags: []
      },
      retweeted: false,
      place: undefined,
      user: {
        friends_count: 0,
        profile_sidebar_fill_color: '',
        location: '',
        verified: false,
        follow_request_sent: undefined,
        favourites_count: 0,
        profile_sidebar_border_color: '',
        profile_image_url: '',
        geo_enabled: false,
        created_at: '',
        description: '',
        time_zone: '',
        url: '',
        screen_name: '',
        notifications: undefined,
        profile_background_color: '',
        listed_count: 0,
        lang: '',
        profile_background_image_url: '',
        statuses_count: 0,
        following: undefined,
        profile_text_color: '',
        protected: false,
        show_all_inline_media: false,
        profile_background_tile: false,
        name: '',
        contributors_enabled: false,
        profile_link_color: '',
        followers_count: 0,
        id: 0,
        profile_use_background_image: false,
        utc_offset: 0
      },
      favorited: false,
      in_reply_to_user_id: undefined,
      id: {
        $numberLong: ''
      }
    },
    coordinates: undefined,
    in_reply_to_screen_name: undefined,
    truncated: false,
    entities: {
      user_mentions: [],
      urls: [],
      hashtags: []
    },
    retweeted: false,
    place: undefined,
    user: {
      friends_count: 0,
      profile_sidebar_fill_color: '',
      location: '',
      verified: false,
      follow_request_sent: undefined,
      favourites_count: 0,
      profile_sidebar_border_color: '',
      profile_image_url: '',
      geo_enabled: false,
      created_at: '',
      description: '',
      time_zone: '',
      url: '',
      screen_name: '',
      notifications: undefined,
      profile_background_color: '',
      listed_count: 0,
      lang: '',
      profile_background_image_url: '',
      statuses_count: 0,
      following: undefined,
      profile_text_color: '',
      protected: false,
      show_all_inline_media: false,
      profile_background_tile: false,
      name: '',
      contributors_enabled: false,
      profile_link_color: '',
      followers_count: 0,
      id: 0,
      profile_use_background_image: false,
      utc_offset: 0
    },
    favorited: false,
    in_reply_to_user_id: undefined,
    id: {
      $numberLong: ''
    }
  }
  showDetails = false;

  val = signal(this.data[0])

  onChangeCountry(){
    const random = Math.floor(Math.random() * this.data.length)
    this.val.set(this.data[random])
  }

  onSelectCo(id: number){
    console.log(id)
    this.selectedTweet = this.tweets[id]
  }

  // onFetchCountires(){
  //   this.supabaseService.client().then((response: Country[]) => {
  //     this.data = response
  //   }).catch((error) => {
  //     console.log("err ", error)
  //   }) 
  // }

  constructor(private supabaseService: SupabaseService) {}

  all(){
    this.supabaseService.https().subscribe((result : Tweet[]) => {
      console.log(result)
      this.tweets = result

    })
  }

}

