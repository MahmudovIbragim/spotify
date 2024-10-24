/* eslint-disable @typescript-eslint/no-unused-vars */
namespace Tracks {
  type GetSeveralTracksReq = {
    ids: string;
  };
  type GetSeveralTracksRes = {
    tracks: Track[];
  };

  type Track = {
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
    is_playable: boolean;
    restrictions: Restrictions2;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  };

  type Album = {
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

  type ExternalIds = {
    isrc: string;
    ean: string;
    upc: string;
  };

  type ExternalUrls4 = {
    spotify: string;
  };

  type Restrictions2 = {
    reason: string;
  };
}
