/* eslint-disable @typescript-eslint/no-unused-vars */
namespace ARTIST {
  type GetArtistByIdRec = {
    id?: string;
  };
  type GetArtistByIdRes = {
    external_urls: ArtistExternalUrls;
    followers: AritstFollowers;
    genres: string[];
    href: string;
    id: string;
    images: ArtistImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  };
  type ArtistExternalUrls = {
    spotify: string;
  };

  type AritstFollowers = {
    href: string;
    total: number;
  };

  type ArtistImage = {
    url: string;
    height: number;
    width: number;
  };

  // artist tracks
  type GetArtistTopTracksRec = {
    id?: string;
  };

  type GetArtistTopTracksRes = {
    tracks: Track[];
  };

  type Track = {
    album: AlbumTopTrack;
    artists: Artist2TopTrack[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIdsTopTrack;
    external_urls: ExternalUrls4TopTrack;
    href: string;
    id: string;
    is_playable: boolean;
    restrictions: Restrictions2TopTrack;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  };

  type AlbumTopTrack = {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: ImageTopTrack[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: RestrictionsTopTrack;
    type: string;
    uri: string;
    artists: ArtistTopTrack[];
  };

  type ExternalUrls = {
    spotify: string;
  };

  type ImageTopTrack = {
    url: string;
    height: number;
    width: number;
  };

  type RestrictionsTopTrack = {
    reason: string;
  };

  type ArtistTopTrack = {
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

  type Artist2TopTrack = {
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

  type ExternalIdsTopTrack = {
    isrc: string;
    ean: string;
    upc: string;
  };

  type ExternalUrls4TopTrack = {
    spotify: string;
  };

  type Restrictions2TopTrack = {
    reason: string;
  };

  //artist albom

  type GetArtistAlbomsRec = {
    id?: string;
    offset: number;
  };
  type GetArtistAlbomsRes = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: ItemArtistAlbom[];
  };

  type ItemArtistAlbom = {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Images[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: Artist[{
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }];
    album_group: string;
  };
}

type Images = {
  url: string;
  height: number;
  width: number;
};
