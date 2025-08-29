import { useState } from "react";

import BookCard from "./components/BookCard/bookcard.jsx/";
import SearchBar from "./components/SearchBar/searchbar.jsx/";
import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (query) => {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await res.json();
    setBooks(data.docs || []);
  };

  return (
    <div>
      <h1>📚 Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
      <div>
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;

