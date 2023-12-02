export interface SearchResponse {
  data:       Gif[];
  pagination: Pagination;
  meta:       Meta;
}

export interface Gif {
  type:                       Type;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   Username;
  source:                     string;
  title:                      string;
  rating:                     Rating;
  content_url:                string;
  source_tld:                 SourceTLD;
  source_post_url:            string;
  is_sticker:                 number;
  import_datetime:            Date;
  trending_datetime:          string;
  images:                     Images;
  user?:                      User;
  analytics_response_payload: string;
  analytics:                  Analytics;
}

export interface Analytics {
  onload:  Onclick;
  onclick: Onclick;
  onsent:  Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original:                 FixedHeight;
  downsized:                OriginalStill;
  downsized_large:          OriginalStill;
  downsized_medium:         OriginalStill;
  downsized_small:          DownsizedSmall;
  downsized_still:          OriginalStill;
  fixed_height:             FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small:       FixedHeight;
  fixed_height_small_still: OriginalStill;
  fixed_height_still:       OriginalStill;
  fixed_width:              FixedHeight;
  fixed_width_downsampled:  FixedHeight;
  fixed_width_small:        FixedHeight;
  fixed_width_small_still:  OriginalStill;
  fixed_width_still:        OriginalStill;
  looping:                  Looping;
  original_still:           OriginalStill;
  original_mp4:             DownsizedSmall;
  preview:                  DownsizedSmall;
  preview_gif:              OriginalStill;
  preview_webp:             OriginalStill;
  "480w_still":             OriginalStill;
  hd?:                      DownsizedSmall;
}

export interface OriginalStill {
  height: string;
  width:  string;
  size:   string;
  url:    string;
}

export interface DownsizedSmall {
  height:   string;
  width:    string;
  mp4_size: string;
  mp4:      string;
}

export interface FixedHeight {
  height:    string;
  width:     string;
  size:      string;
  url:       string;
  mp4_size?: string;
  mp4?:      string;
  webp_size: string;
  webp:      string;
  frames?:   string;
  hash?:     string;
}

export interface Looping {
  mp4_size: string;
  mp4:      string;
}

export enum Rating {
  G = "g",
  PG13 = "pg-13",
}

export enum SourceTLD {
  Empty = "",
  KarmafucksmeTumblrCOM = "karmafucksme.tumblr.com",
  NewsEnvilstoreCOM = "news.envilstore.com",
}

export enum Type {
  GIF = "gif",
}

export interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      Username;
  display_name:  string;
  description:   string;
  instagram_url: string;
  website_url:   string;
  is_verified:   boolean;
}

export enum Username {
  Empty = "",
  ToeiAnimation = "ToeiAnimation",
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}
