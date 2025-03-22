import { useState } from "react";
import glossary from "../../../data/glossary.json";
import { BookIcon, SearchIcon } from "../icons/Other_Icons";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cleanedInput = searchTerm
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "");

  const filteredGlossary = glossary.filter(({ term }) =>
    term.toLowerCase().includes(cleanedInput)
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && cleanedInput) {
      window.location.href = `/glossary/${encodeURIComponent(cleanedInput)}`;
    }
  };

  return (
    <main className="p-4">
      <div className="px-4 py-2 rounded-lg shadow-sm  flex gap-2 justify-center items-center border border-gray-300 bg-white">
        <SearchIcon/>
        <input
          id="search"
          type="text"
          placeholder="Search terms..."
          className="w-full p-2 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredGlossary.map(({ term, path }) => (
          <a
            key={term}
            href={path}
            className="p-4 border border-blue-100 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition flex gap-2 items-center text-blue-400"
          >
            <BookIcon />
            <h2 className="text-lg font-semibold text-slate-700">{term}</h2>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Glossary;
