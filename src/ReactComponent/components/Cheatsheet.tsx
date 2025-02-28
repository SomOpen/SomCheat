import cheatsheet_data from "../data/cheatsheet_data";
import { FileCodeIcon, DateIcon } from "../icons/Icon";

export default function CheatSheet() {
  return (
    <div>
      {Object.entries(cheatsheet_data).map(([key, value]) => (
        <div>
          <div>
            <h1>{key}</h1>
            {JSON.stringify(Object.values(cheatsheet_data))}
          </div>
          <div className="flex gap-2">
            {value.map((cheatsheet, id) => (
              <h1>{cheatsheet.name}</h1>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
