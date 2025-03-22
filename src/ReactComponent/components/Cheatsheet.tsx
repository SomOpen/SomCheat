import dataList from "../helpers/datalist";
import { SheetIcon, DateIcon } from "../icons/Other_Icons";
import { StatusIcon } from "../icons/Status_Icons";
import Card from "./Card";

export default function CheatSheet() {
  return (
    <div className="w-full flex flex-col pb-3">
      {/* 
        ------------------
        Mapping through dataList to render each category
        ------------------
      */}
      {dataList.map(({ id, data, _name, icon, number_of_cheatsheets }) => (
        <div key={id} className="flex flex-col flex-wrap">
          {/* 
            ------------------
            Category Header
            ------------------
          */}
          <div
            key={id}
            className="bg-[#ffeecc44] flex flex-col gap-3 shadow-md border-b-2 border-indigo-400 p-2 w-full"
          >
            <div className="flex gap-3 items-center">
              {icon}
              <h1 className="text-[1.1rem] font-medium text-slate-500 italic">
                {id === "langs"
                  ? _name
                  : id === "dbs"
                  ? _name
                  : id === "web"
                  ? _name
                  : id === "os"
                  ? _name
                  : id === "vc"
                  ? _name
                  : id === "dev"
                  ? _name
                  : ""}
              </h1>
            </div>
            {/* 
              ------------------
              Total Cheatsheets Info
              ------------------
            */}
            <span
              style={{ fontFamily: "Kalam" }}
              className="text-[1.2rem] flex gap-2"
            >
              <span className="text-slate-400 flex gap-2">
                <SheetIcon dimension={20} /> Total Cheatsheets:
              </span>{" "}
              {number_of_cheatsheets}
            </span>
          </div>
          {/* 
            ------------------
            Cheatsheets Cards Section
            ------------------
          */}
          <div
            id="section-bar"
            className="flex gap-5 py-3 flex-wrap items-center justify-center"
          >
            {data
              ? data.map((cheatsheet: any, id: number) => (
                  <Card cheatsheet={cheatsheet} key={id} />
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}