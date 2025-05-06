export interface Tweet {
    _id: Id
    text: string
    in_reply_to_status_id: any
    retweet_count: any
    contributors: any
    created_at: string
    geo: any
    source: string
    retweeted_status: RetweetedStatus
    coordinates: any
    in_reply_to_screen_name: any
    truncated: boolean
    entities: Entities2
    retweeted: boolean
    place: any
    user: User2
    favorited: boolean
    in_reply_to_user_id: any
    id: Id3
  }
  
  export interface Id {
    $oid: string
  }
  
  export interface RetweetedStatus {
    text: string
    in_reply_to_status_id: any
    retweet_count: any
    contributors: any
    created_at: string
    geo: any
    source: string
    coordinates: any
    in_reply_to_screen_name: any
    truncated: boolean
    entities: Entities
    retweeted: boolean
    place: any
    user: User
    favorited: boolean
    in_reply_to_user_id: any
    id: Id2
  }
  
  export interface Entities {
    user_mentions: any[]
    urls: Url[]
    hashtags: Hashtag[]
  }
  
  export interface Url {
    indices: number[]
    url: string
    expanded_url: any
  }
  
  export interface Hashtag {
    text: string
    indices: number[]
  }
  
  export interface User {
    friends_count: number
    profile_sidebar_fill_color: string
    location: string
    verified: boolean
    follow_request_sent: any
    favourites_count: number
    profile_sidebar_border_color: string
    profile_image_url: string
    geo_enabled: boolean
    created_at: string
    description: string
    time_zone: string
    url: string
    screen_name: string
    notifications: any
    profile_background_color: string
    listed_count: number
    lang: string
    profile_background_image_url: string
    statuses_count: number
    following: any
    profile_text_color: string
    protected: boolean
    show_all_inline_media: boolean
    profile_background_tile: boolean
    name: string
    contributors_enabled: boolean
    profile_link_color: string
    followers_count: number
    id: number
    profile_use_background_image: boolean
    utc_offset: number
  }
  
  export interface Id2 {
    $numberLong: string
  }
  
  export interface Entities2 {
    user_mentions: UserMention[]
    urls: Url2[]
    hashtags: Hashtag2[]
  }
  
  export interface UserMention {
    indices: number[]
    screen_name: string
    name: string
    id: number
  }
  
  export interface Url2 {
    indices: number[]
    url: string
    expanded_url: any
  }
  
  export interface Hashtag2 {
    text: string
    indices: number[]
  }
  
  export interface User2 {
    friends_count: number
    profile_sidebar_fill_color: string
    location: string
    verified: boolean
    follow_request_sent: any
    favourites_count: number
    profile_sidebar_border_color: string
    profile_image_url: string
    geo_enabled: boolean
    created_at: string
    description: string
    time_zone: string
    url: string
    screen_name: string
    notifications: any
    profile_background_color: string
    listed_count: number
    lang: string
    profile_background_image_url: string
    statuses_count: number
    following: any
    profile_text_color: string
    protected: boolean
    show_all_inline_media: boolean
    profile_background_tile: boolean
    name: string
    contributors_enabled: boolean
    profile_link_color: string
    followers_count: number
    id: number
    profile_use_background_image: boolean
    utc_offset: number
  }
  
  export interface Id3 {
    $numberLong: string
  }
  