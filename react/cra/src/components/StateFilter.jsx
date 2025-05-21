// 데이터를 입력하는 자식 컴포넌트
// 필터해서 보여줄 list 자식 컴포넌트

import { useState } from "react";

function SearchBox({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function List({ items, inputData }) {
  return (
    <ul>
      {items
        .filter((item) => item.toLowerCase().includes(inputData.toLowerCase()))
        .map((item) => (
          <li>{item}</li>
        ))}
    </ul>
  );
}

export default function StateFilter() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "mrange", "mango"];

  return (
    <div>
      <List items={items} inputData={query} />
      <SearchBox query={query} setQuery={setQuery} />
    </div>
  );
}
