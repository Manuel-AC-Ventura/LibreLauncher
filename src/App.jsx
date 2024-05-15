import { Router } from "./Router"
import { useState, useRef } from "react";
import { SearchContext } from "./context/SearchContext"

export const App = ()=>{
  const [search, setSearch] = useState('');
  const inputRef = useRef();

  return(
    <div className="w-full min-h-screen bg-neutral-900 flex text-white font-mono">
      <SearchContext.Provider value={{ search, setSearch, inputRef }}>
        <Router />
      </SearchContext.Provider>
    </div>
  )
}
