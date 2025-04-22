import {
  DateIcon,
  DesktopIcon,
  MobileIcon,
  WebIcon,
} from "../icons/Other_Icons";
import { StatusIcon } from "../icons/Status_Icons";
import { FileCodeIcon } from "../icons/lang_icons";
import {
  CompletedIcon,
  InProgressIcon,
  InCompleteIcon,
} from "../icons/Status_Icons";

export default function Card({ cheatsheet }: { cheatsheet: any }) {
  return (
    <a href={cheatsheet.path}>
      <div className="relative bg-white border-[1.5px] m-1 border-slate-200 shadow-md p-4 rounded-md min-w-[300px] max-w-full">
        {/*
          ------------------
          Label
          ------------------
        */}
        <div className="absolute top-2 right-10">
          {cheatsheet.targets ? (
            cheatsheet.targets === "mobile" ? (
              <span className="text-orange-500">
                <MobileIcon />
              </span>
            ) : cheatsheet.targets === "desktop" ? (
              <span className="text-indigo-400">
                <DesktopIcon />
              </span>
            ) : cheatsheet.targets === "web" ? (
              <span className="text-sky-400">
                <WebIcon />
              </span>
            ) : null
          ) : null}
        </div>
          <Label progress={cheatsheet.progress} />
        {/*
          ------------------
          Metadata of the cheatsheet such as cheatsheet name, icon and date
          ------------------
          */}
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            {cheatsheet.icon ? cheatsheet.icon : <FileCodeIcon />}
            <h1 className="italic text-[1rem] font-bold text-slate-700">
              {cheatsheet.name}
            </h1>
          </div>
          <span className="text-slate-500 text-[0.8rem] ml-2 flex gap-2 items-center">
            <DateIcon dimension={15} color="#aaa" />
            <span
              title={"Last Update: " + cheatsheet.lastUpdate}
              className="font-mono"
            >
              {cheatsheet.lastUpdate}
            </span>
          </span>
        </div>
        {/*
          ------------------
          Separator line
          ------------------
          */}
        <hr className="border-b border-slate-100 my-1" />
        {/*
          ------------------
          Progress bar
          ------------------
          */}
        <div
          className="w-full flex gap-2 items-center"
          title={"Progress: " + String(cheatsheet.progress) + "%"}
        >
          <StatusIcon color="#cdf" />
          <div className="flex-1 bg-slate-100 rounded-sm">
            <div
              style={{
                width: `${
                  cheatsheet.progress ? cheatsheet.progress + "%" : "0%"
                }`,
              }}
              className="w-full h-[6px] bg-green-300 rounded-sm"
            ></div>
          </div>
          <span className="italic text-slate-400 font-medium">
            {cheatsheet.progress ? cheatsheet.progress + "%" : "0%"}
          </span>
        </div>
      </div>
    </a>
  );
}

function Label({ progress }: { progress: number }) {
  const statusIcon = (icon: React.ReactElement, title: string) => {
    return (
      <span title={title} className="absolute top-2 right-2">
        {icon}
      </span>
    );
  };
  const status = () => {
    if (progress && progress === 100) {
      return statusIcon(
        <CompletedIcon dimension={22} color="oklch(0.765 0.177 163.223)" />,
        "Completed",
      );
    } else if (progress > 0 && progress < 100) {
      return statusIcon(
        <InProgressIcon color="oklch(0.707 0.165 254.624)" />,
        "In Progress",
      );
    } else {
      return statusIcon(
        <InCompleteIcon dimension={25} color="#fb64b6" />,
        "Empty",
      );
    }
  };
  return status();
}
