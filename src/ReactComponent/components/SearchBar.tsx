import { useState, useEffect } from "react";
import { SearchIcon, SheetIcon } from "../icons/Other_Icons";
import pathData from "../../../data/path.json";

type PathData = {
  name: string;
  path: string;
};

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<PathData[]>([]);

  const cleanedInput = (input: string) => {
    return input.replace(/[^a-zA-Z0-9-_.\s]/g, "").trim();
  };

  useEffect(() => {
    const cleanedTerm = cleanedInput(searchTerm);
    if (cleanedTerm === "") {
      setFilteredResults([]);
      return;
    }

    const results = Object.values(pathData).filter((item) =>
      item.name.toLowerCase().includes(cleanedTerm.toLowerCase())
    );
    setFilteredResults(results);
  }, [searchTerm]);

  const handleSearch = () => {
    const cleanedTerm = cleanedInput(searchTerm);
    if (cleanedTerm) {
      window.location.href = `/cheatsheets/${encodeURIComponent(cleanedTerm)}`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-[50px] px-2 bg-transparent w-full">
      <div className="bg-white w-[700px] max-w-full flex gap-4 justify-center items-center border border-slate-200 shadow-lg rounded-lg px-2 py-1 z-10">
        <div className="flex gap-2 flex-1 justify-center items-center">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-1 outline-none w-full"
          />
        </div>
        <button
          className="p-2 bg-indigo-500 italic font-medium rounded-md text-slate-200 cursor-pointer border-2 border-slate-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="px-2 mt-1 absolute w-full top-full flex justify-center items-center">
        {filteredResults.length > 0 && (
          <div className=" bg-white border border-slate-300 shadow-lg rounded-lg w-full max-w-[700px] z-20">
            <ul className="max-h-60 overflow-y-auto">
              {filteredResults.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="text-slate-400 italic"
                >
                  <li className="p-2 border-b border-slate-200 hover:bg-indigo-100 flex gap-2">
                    <SheetIcon color="oklch(0.828 0.111 230.318)" />
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
