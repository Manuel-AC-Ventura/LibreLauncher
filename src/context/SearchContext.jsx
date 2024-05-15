import { createContext } from "react";

export const SearchContext = createContext({
  search: '',
  setSearch: () => {},
  inputRef: null
});
