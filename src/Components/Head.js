import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchCache = useSelector( store=>store.search);
  const dispatch= useDispatch();
  useEffect(() => {
    if(searchCache[searchquery]) {
      setSuggestions(searchCache[searchquery]);
    } else {
      getSearchSuggestions();
    }
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

  const getSearchSuggestions = useCallback(async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update cache
    dispatch(cacheResults({
      [searchquery]: json[1],
    }));
  }, [searchquery]);


  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuhandler()}
          className="h-8 mx-4 cursor-pointer"
          alt="menu"
          src="https://freesvg.org/img/menu-icon.png"
        />
        <a href="/">
          <img
            className="h-8 cursor-pointer"
            alt="youtube"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus = {()=> setShowSuggestions(true)}
          onBlur = {()=> setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[41rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8 "
          alt="user"
          src="https://www.pngfind.com/pngs/m/176-1760995_png-file-svg-user-icon-free-copyright-transparent.png"
        />
      </div>
    </div>
  );
};

export default Head;
