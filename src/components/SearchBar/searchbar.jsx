import { useState } from "react";
import '../../../src/index.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by title, author, or subject"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
