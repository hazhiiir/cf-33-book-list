import Select from "./Select";
export default function BooksFilter() {
  return (
    <section id="controls" className="bg-white rounded-xl shadow-book p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2">
          <label
            for="search-input"
            className="block text-sm font-medium text-sepia-700 mb-2"
          >
            Search by title or author
          </label>
          <div className="relative">
            <input
              type="text"
              id="search-input"
              placeholder="e.g., Pride and Prejudice, Jane Austen..."
              className="w-full px-4 py-3 pl-11 border border-sepia-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white placeholder-sepia-400"
              style={{ "--tw-ring-color": "#009688", "--tw-ring-opacity": "1" }}
            />
            <svg
              className="absolute left-3.5 top-3.5 h-5 w-5 text-sepia-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <Select
          label={"Language"}
          id="language-filter"
          options={[
            { value: "", label: "All Languages" },
            { value: "en", label: "English" },
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "es", label: "Spanish" },
            { value: "it", label: "Italian" },
            { value: "pt", label: "Portuguese" },
          ]}
        />
        <Select
          label={"Sort by"}
          id="sort-select"
          options={[
            { value: "downloads", label: "Most Downloaded" },
            { value: "title", label: "Title A–Z" },
          ]}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          id="clear-filters-btn"
          className="px-4 py-2 text-sepia-600 hover:text-sepia-800 hover:bg-sepia-100 rounded-lg transition-all flex items-center gap-2 font-medium"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Clear Filters
        </button>
      </div>
    </section>
  );
}
