import { useState } from "react";
import BookCard from "./components/BookCard/bookcard.jsx/";
import SearchBar from "./components/SearchBar/searchbar.jsx/";
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);
  const [loading, setLoading] = useState(false);

   const fetchBooks = async (query) => {
    setLoading(true);       
    setApiCalled(true);     
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await res.json();
      setBooks(data.docs || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    }
    setLoading(false);     
  };


  return (
    
    <div style={{minHeight:"100vh",minWidth:"100vw",display:"flex",flexDirection:"column",alignItems:"center",backgroundImage:"url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
     <div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#6200EE",padding:"20px",margin:"20px",marginBottom:"20px",borderRadius:"10px"}}>
       <h1 style={{color:"white"}}>📚 Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
     </div>
      <div style={{ textAlign: "center" }}>
        {loading && <p style={{ color: "blue", fontWeight: "bold" }}>Loading...</p>}

        {!loading &&
          books.map((book) => <BookCard key={book.key} book={book} />)}

        {!loading && apiCalled && books.length === 0 && (
          <p style={{ fontWeight: "bold", color: "blue" }}>No results found</p>
        )}
      </div>
    </div>
  );
}

export default App;

