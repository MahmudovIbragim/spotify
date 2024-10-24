/* eslint-disable @typescript-eslint/no-unused-vars */
namespace SEARCH {
  type GetSearchRes = {
    tracks: Tracks;
    artists: Artists;
    albums: Albums;
    playlists: Playlists;
    shows: Shows;
    episodes: Episodes;
    audiobooks: Audiobooks;
  };
  type GetSearchReq = {
    q: string;
    type: string | undefined;
    offset: number;
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

  type Artists = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item2[];
  };

  type Item2 = {
    external_urls: ExternalUrls5;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image2[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  };

  type ExternalUrls5 = {
    spotify: string;
  };

  type Followers = {
    href: string;
    total: number;
  };

  type Image2 = {
    url: string;
    height: number;
    width: number;
  };

  type Albums = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item3[];
  };

  type Item3 = {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls6;
    href: string;
    id: string;
    images: Image3[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: Restrictions3;
    type: string;
    uri: string;
    artists: Artist3[];
  };

  type ExternalUrls6 = {
    spotify: string;
  };

  type Image3 = {
    url: string;
    height: number;
    width: number;
  };

  type Restrictions3 = {
    reason: string;
  };

  type Artist3 = {
    external_urls: ExternalUrls7;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  };

  type ExternalUrls7 = {
    spotify: string;
  };

  type Playlists = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item4[];
  };

  type Item4 = {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls8;
    href: string;
    id: string;
    images: Image4[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks2;
    type: string;
    uri: string;
  };

  type ExternalUrls8 = {
    spotify: string;
  };

  type Image4 = {
    url: string;
    height: number;
    width: number;
  };

  type Owner = {
    external_urls: ExternalUrls9;
    followers: Followers2;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
  };

  type ExternalUrls9 = {
    spotify: string;
  };

  type Followers2 = {
    href: string;
    total: number;
  };

  type Tracks2 = {
    href: string;
    total: number;
  };

  type Shows = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item5[];
  };

  type Item5 = {
    available_markets: string[];
    copyrights: Copyright[];
    description: string;
    html_description: string;
    explicit: boolean;
    external_urls: ExternalUrls10;
    href: string;
    id: string;
    images: Image5[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: string;
    uri: string;
    total_episodes: number;
  };

  type Copyright = {
    text: string;
    type: string;
  };

  type ExternalUrls10 = {
    spotify: string;
  };

  type Image5 = {
    url: string;
    height: number;
    width: number;
  };

  type Episodes = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item6[];
  };

  type Item6 = {
    audio_preview_url: string;
    description: string;
    html_description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls11;
    href: string;
    id: string;
    images: Image6[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    language: string;
    languages: string[];
    name: string;
    release_date: string;
    release_date_precision: string;
    resume_point: ResumePoint;
    type: string;
    uri: string;
    restrictions: Restrictions4;
  };

  type ExternalUrls11 = {
    spotify: string;
  };

  type Image6 = {
    url: string;
    height: number;
    width: number;
  };

  type ResumePoint = {
    fully_played: boolean;
    resume_position_ms: number;
  };

  type Restrictions4 = {
    reason: string;
  };

  type Audiobooks = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Item7[];
  };

  type Item7 = {
    authors: Author[];
    available_markets: string[];
    copyrights: Copyright2[];
    description: string;
    html_description: string;
    edition: string;
    explicit: boolean;
    external_urls: ExternalUrls12;
    href: string;
    id: string;
    images: Image7[];
    languages: string[];
    media_type: string;
    name: string;
    narrators: Narrator[];
    publisher: string;
    type: string;
    uri: string;
    total_chapters: number;
  };

  type Author = {
    name: string;
  };

  type Copyright2 = {
    text: string;
    type: string;
  };

  type ExternalUrls12 = {
    spotify: string;
  };

  type Image7 = {
    url: string;
    height: number;
    width: number;
  };

  type Narrator = {
    name: string;
  };
}
