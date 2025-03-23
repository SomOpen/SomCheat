import { RightArrow } from "../icons/Arrow_Icons";
import replacer from "../../utils/replacer";

export default function PathComponent({ path }: { path: string }) {
  let paths = path.split("/").filter((char) => char !== "");
  return (
    paths &&
    paths.map((_path, i) => (
      <div key={i} className="flex items-center gap-3">
        <a
          key={i}
          className="no-underline italic hover:text-indigo-500 text-slate-500"
          href={_path === "cheatsheets" ? "/" + _path : _path}
        >
          {replacer(_path)}
        </a>
        {i === paths.length - 1 ? null : (
          <RightArrow dimension={30} color="oklch(0.585 0.233 277.117)" />
        )}
      </div>
    ))
  );
}
