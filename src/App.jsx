import Header from "./components/Header";
import Footer from "./components/Footer";
import BooksFilter from "./components/BooksFilter";
import BookList from "./components/BookList";
import booksRaw from "./data/books";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <BooksFilter />
        <BookList books={booksRaw} />
      </main>
      <Footer />
    </>
  );
}

export default App;
