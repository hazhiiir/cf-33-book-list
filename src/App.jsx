import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BooksFilter from "./components/BooksFilter";
import BookList from "./components/BookList";
import booksRaw from "./data/books";

function App() {
  const [filters, setFilters] = useState({
    search: "",
    sort: "",
    filter: "",
  });

  const onFiltersChange = (value) => setFilters(value);

  let books = [...booksRaw];

  if (filters.filter) {
    books = books.filter((book) => book.languages.includes(filters.filter));
  }

  if (filters.sort) {
    if (filters.sort === "title") {
      books = [...books].sort((b1, b2) => b1.title.localeCompare(b2.title));
    } else if (filters.sort === "downloads") {
      books = [...books].sort(
        (b1, b2) => b2.download_count - b1.download_count,
      );
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <BooksFilter onChange={onFiltersChange} />
        <BookList books={books} />
      </main>
      <Footer />
    </>
  );
}

export default App;
