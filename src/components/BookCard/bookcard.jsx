import styles from "../../styles/BookCard.module.css";

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    
    <div className={styles.card}>
      <img style={{ height:"300px" , width:"200px"}} src={coverUrl} alt={book.title} />
      <div className={styles.content}>
      <h2>{book.title}</h2>
      <p>{book.author_name?.join(", ")}</p>
      <p>Published: {book.first_publish_year}</p>
      </div>
    </div> 
    
  );
}

export default BookCard;