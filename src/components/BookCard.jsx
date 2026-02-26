export default function BookCard({ book }) {
  return (
    <article
      className="bg-white rounded-xl shadow-book hover:shadow-book-hover transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: "0ms" }}
    >
      <div className="aspect-[3/4] bg-sepia-100 relative overflow-hidden">
        <img
          src={book.formats["image/jpeg"]}
          alt="Cover of ${book.title}"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-sepia-800 line-clamp-2 mb-1 leading-tight">
          {book.title}
        </h3>
        <p className="text-sepia-600 text-sm line-clamp-1 mb-3">
          {book.authors[0] ? book.authors[0].name : "Unknown Author"}
        </p>
        <div className="flex items-center text-sepia-500 text-sm">
          <svg
            className="h-4 w-4 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          {book.download_count} downloads
        </div>
      </div>
    </article>
  );
}
