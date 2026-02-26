export default function Select({ id, options, label }) {
  return (
    <div>
      <label for={id} className="block text-sm font-medium text-sepia-700 mb-2">
        {label}
      </label>
      <select
        id={id}
        className="w-full px-4 py-3 border border-sepia-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-paper text-sepia-800 cursor-pointer"
      >
        {options &&
          options.length &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}
