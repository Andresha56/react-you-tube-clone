


import { createContext,useContext,useState } from "react"

const SearchVideo=createContext();

export function useSearchContext() {
    return useContext(SearchVideo);
  }

  
function SearchContext({children}) {
    const [searchQuery, setSearchQuery] =useState([]);
  return (
    <SearchVideo.Provider value={{searchQuery,setSearchQuery}}>
      {children}
    </SearchVideo.Provider>
  )
}

export default SearchContext
