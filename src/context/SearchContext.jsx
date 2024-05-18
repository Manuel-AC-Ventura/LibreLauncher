import { createContext, useState, useRef } from "react";

export const SearchContext = createContext({
  search: '',
  setSearch: () => {},
  previousUrl: '/',
  setPreviousUrl: () => {},
  inputRef: null
});

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [previousUrl, setPreviousUrl] = useState('/');
  const inputRef = useRef(null);

  return (
    <SearchContext.Provider value={{ search, setSearch, previousUrl, setPreviousUrl, inputRef }}>
      {children}
    </SearchContext.Provider>
  );
};
