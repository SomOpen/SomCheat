import { CompletedIcon, InProgressIcon, InCompleteIcon } from "../icons/Status_Icons";
import { ArrowRightLongIcon } from "../icons/Arrow_Icons";
import SearchBar from "./SearchBar";
import Welcome from "./Welcome";

const statusIcons = [
  {
    icon: <CompletedIcon dimension={22} color="oklch(0.765 0.177 163.223)" />,
    indicator: "Complete Cheatsheets",
  },
  {
    icon: <InProgressIcon color="oklch(0.707 0.165 254.624)" />,
    indicator: "In Progress Cheatsheets",
  },
  {
    icon: <InCompleteIcon color="#fb64b6" />,
    indicator: "Empty Cheatsheets",
  },
];

export default function Wrapper() {
  return (
    <div className="hero min-h-[100px] h-auto pb-10">
      <div className="flex gap-5 flex-wrap p-2 justify-center items-center">
        <Welcome />
      </div>
      <SearchBar />
      <div className="w-full flex justify-center items-center">
        <div className="min-w-[200px] flex flex-col gap-2 bg-white min-h-[100px] shadow-md p-2 rounded border-2 border-slate-100 mt-5">
          {statusIcons &&
            statusIcons.map((status, id) => (
              <div key={id} className="flex gap-2">
                {status.icon} <ArrowRightLongIcon color="#ddd" />
                <span className="text-blue-400 italic">{status.indicator}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
