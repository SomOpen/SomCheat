import { FileCodeIcon, StatusIcon, DateIcon } from "../icons/Icon";

export default function Card({ cheatsheet }: { cheatsheet: any;}) {
  return (
    <div
      className="bg-white border-[1.5px] m-1 border-slate-200 shadow-md p-4 rounded-md min-w-[300px]"
    >
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
        Download bar 
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
  );
}
