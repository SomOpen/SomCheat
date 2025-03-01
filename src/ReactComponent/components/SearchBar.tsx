import { SearchIcon } from "../icons/Icon";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center min-h-[50px] p-2 pb-4 bg-transparent w-full">
      <div className="bg-white w-[700px] max-w-full flex gap-4 justify-center items-center border border-slate-200 shadow-lg rounded-lg px-2 py-1">
        <div className="flex gap-2 flex-1 justify-center items-center">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search"
            className="p-1 outline-none w-full"
          />
        </div>
        <button className="p-2 bg-indigo-500 italic font-medium rounded-md text-slate-200 cursor-pointer border-2 border-slate-200">Search</button>
      </div>
    </div>
  );
}
