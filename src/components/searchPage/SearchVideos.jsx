

import { useState,useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext/SearchContext";


function SearchVideos() {
 // ---- search content state ----
 const [content, setContent] = useState([]);
 const { searchQuery } = useSearchContext();

 // Use useEffect to update content when searchQuery changes
 useEffect(() => {
   if (searchQuery.length !== 0) {
     setContent(searchQuery.contents);
   }
 }, [searchQuery]);

 return (
   <>
     {/* Render your content here */}
   </>
 );

}

export default SearchVideos;
