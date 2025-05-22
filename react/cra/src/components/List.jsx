import { useContext } from "react";
import SearchContext from "./SearchContext";

export default function List() {
  const { query, items } = useContext(SearchContext);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Items List</h3>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
