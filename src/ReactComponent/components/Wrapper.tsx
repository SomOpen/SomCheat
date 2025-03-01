import SearchBar from "./SearchBar";
import Welcome from "./Welcome";

export default function Wrapper() {
  return (
    <div className="hero min-h-[100px] h-auto">
      <div className="flex gap-5 flex-wrap p-2 justify-center items-center">
        <Welcome />
      </div>
      <SearchBar />
    </div>
  );
}
