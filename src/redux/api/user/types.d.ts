/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PROFILE {
  type GetCurrentProfileRec = void;
  type GetCurrentProfileRes = {
    country: string;
    display_name: string;
    email: string;
    explicit_content: ExplicitContent;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
  };
  type ExplicitContent = {
    filter_enabled: boolean;
    filter_locked: boolean;
  };

  type ExternalUrls = {
    spotify: string;
  };

  type Followers = {
    href: string;
    total: number;
  };

  type Image = {
    url: string;
    height: number;
    width: number;
  };
}
