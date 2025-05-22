import { useContext } from "react";
import SearchContext from "./SearchContext";

export default function SearchBox() {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
      />
    </div>
  );
}
