import BookCard from "./BookCard";
export default function BookList({ books }) {
  return (
    <section
      id="books-grid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
    >
      {books &&
        books.length &&
        books.map((book) => <BookCard key={book.id} book={book} />)}
    </section>
  );
}
