/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode } from 'react';
import { useLazyGetSearchQuery } from '../redux/api/search';

interface SearchContextType {
  search: (q: string, type: string, offset: number) => void;
  data?: SEARCH.GetSearchRes;
  isSuccess: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [triggerSearch, { data, isSuccess, isFetching, isLoading, isError }] =
    useLazyGetSearchQuery();

  const search = (q: string, type: string, offset: number) => {
    triggerSearch({ q, type, offset });
  };

  return (
    <SearchContext.Provider
      value={{ search, data, isSuccess, isFetching, isLoading, isError }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch должен использоваться внутри SearchProvider');
  }
  return context;
};
