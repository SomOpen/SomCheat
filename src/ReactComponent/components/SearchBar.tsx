import { SearchIcon } from "../icons/Icon";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center min-h-[50px] p-2 bg-transparent w-full">
      <div className="bg-white w-[700px] max-w-full flex gap-4 justify-center items-center border border-slate-200 shadow-lg rounded-lg px-2 py-1">
        <div className="flex gap-2 flex-1 justify-center items-center">
          <SearchIcon />
          <input
            readOnly
            type="search"
            placeholder="Search"
            className="p-1 outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}
