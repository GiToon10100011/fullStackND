import { useState } from "react";
import SearchContext from "./SearchContext";
import List from "./List";
import SearchBox from "./SearchBox";

export default function UseFillter30() {
  const [query, setQuery] = useState("");
  const items = ["apple", "banana", "orange", "mango"];
  return (
    <div>
      <SearchContext.Provider value={{ query, setQuery, items }}>
        <List />
        <SearchBox />
      </SearchContext.Provider>
    </div>
  );
}
