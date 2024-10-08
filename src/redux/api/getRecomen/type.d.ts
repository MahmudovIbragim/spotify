/* eslint-disable @typescript-eslint/no-unused-vars */
namespace SPOTIFY {
  type GetReccomendationRes = {
    tracks: Track[];
    seeds: Seed[];
  };
  type GetReccomendationReq = {
    seed_artists: string;
    seed_genres: string;
    seed_tracks: string;
    limit: number;
    market: string;
  };
  export interface Track {
    album: Album;
    artists: Artist2[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    linked_from?: LinkedFrom;
    name: string;
    popularity: number;
    preview_url?: string;
    track_number: number;
    type: string;
    uri: string;
  }

  export interface Album {
    album_type: string;
    artists: Artist[];
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    images: Image[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  }

  export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls {
    spotify: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface ExternalIds {
    isrc: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }

  export interface LinkedFrom {
    external_urls: ExternalUrls5;
    href: string;
    id: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls5 {
    spotify: string;
  }

  export interface Seed {
    initialPoolSize: number;
    afterFilteringSize: number;
    afterRelinkingSize: number;
    id: string;
    type: string;
    href?: string;
  }
}
namespace TEST {
  type GetTestRes = {
    album: Album;
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  };

  export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls2;
    href: string;
    images: {
      width: number;
      height: number;
      url: string;
    }[];
  }

  export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls {
    spotify: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface ExternalIds {
    isrc: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }
}
