/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BROWSECATEGORY {
  type GetBrowseCategoryRes = {
    categories: Categories;
  };
  type Categories = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
    items: Item[];
  };

  type Item = {
    href: string;
    icons: Icon[];
    id: string;
    name: string;
  };

  type Icon = {
    url: string;
    height: number;
    width: number;
  };
  type GetBrowseCategoryReq = void;

  type GetItemBrowseCategoryRes = {
    href: string;
    icons: AboutIcon[];
    id: string;
    name: string;
  };
  type GetItemBrowseCategoryReq = {
    category_id: string;
  };

  type AboutIcon = {
    height: number;
    url: string;
    width: number;
  };
}
