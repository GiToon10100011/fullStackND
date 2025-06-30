import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  const { keywords } = router.query;
  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {keywords ? (
          (keywords as string[])?.map((word, i) => <li key={i}>{word}</li>)
        ) : (
          <p>No keywords provided</p>
        )}
      </ul>
    </div>
  );
}
