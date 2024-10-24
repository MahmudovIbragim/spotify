/* eslint-disable @typescript-eslint/no-unused-vars */
namespace ALBOM {
  type GetAlbomByIdRec = {
    id: string;
  };
  type GetAlbomByIdRes = {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: Restrictions;
    type: string;
    uri: string;
    artists: Artist[];
    tracks: Tracks;
    copyrights: Copyright[];
    external_ids: ExternalIds;
    genres: string[];
    label: string;
    popularity: number;
  };

  type ExternalUrls = {
    spotify: string;
  };

  type Image = {
    url: string;
    height: number;
    width: number;
  };

  type Restrictions = {
    reason: string;
  };

  type Artist = {
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  };

  type ExternalUrls2 = {
    spotify: string;
  };

  type Tracks = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item[];
  };

  type Item = {
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: LinkedFrom;
    restrictions: Restrictions2;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  };

  type Artist2 = {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  };

  type ExternalUrls3 = {
    spotify: string;
  };

  type ExternalUrls4 = {
    spotify: string;
  };

  type LinkedFrom = {
    external_urls: ExternalUrls5;
    href: string;
    id: string;
    type: string;
    uri: string;
  };

  type ExternalUrls5 = {
    spotify: string;
  };

  type Restrictions2 = {
    reason: string;
  };

  type Copyright = {
    text: string;
    type: string;
  };

  type ExternalIds = {
    isrc: string;
    ean: string;
    upc: string;
  };
}
