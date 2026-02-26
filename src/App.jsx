import { useState, useEffect } from "react";
import { Document } from "flexsearch";
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

  const [index, setIndex] = useState(null);

  useEffect(() => {
    const indexBooks = async () => {
      const newIndex = new Document({
        document: {
          id: "id",
          index: [
            "title",
            "authors.name",
            "summaries",
            "subjects",
            "bookshelves",
          ],
          store: true,
        },
        tokenize: "forward",
        cache: 100,
      });

      for (let i = 0; i < booksRaw.length; ++i) {
        newIndex.add(booksRaw[i]);
      }

      setIndex(newIndex);

      Promise.resolve();
    };
    indexBooks();
  }, []);

  const onFiltersChange = (value) => setFilters(value);

  let books = [...booksRaw];

  if (filters.search && index) {
    const searchResult = index.search(filters.search);
    const targets = new Set();
    for (let i = 0; i < searchResult.length; ++i) {
      const results = searchResult[i].result;
      for (let j = 0; j < results.length; j++) {
        targets.add(results[j]);
      }
    }

    books = books.filter((book) => targets.has(book.id));
  }

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
        {index && <BooksFilter onChange={onFiltersChange} />}
        <BookList books={books} />
      </main>
      <Footer />
    </>
  );
}

export default App;
