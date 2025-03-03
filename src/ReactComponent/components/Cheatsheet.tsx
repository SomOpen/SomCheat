import {
  languagesData,
  databasesData,
  webDevelopmentData,
  operatingSystemData,
  versionControlData,
  devToolsData,
} from "../data/cheatsheet_data";
import {
  FileCodeIcon,
  DateIcon,
  WebIcon,
  CodeIcon,
  DatabaseIcon,
  GitIcon,
  OSIcon,
  DevToolsIcon,
  SheetIcon,
} from "../icons/Icon";

export default function CheatSheet() {
  const dataList = [
    {
      id: "langs",
      _name: "Programming Languages",
      data: languagesData,
      icon: <CodeIcon dimension={40} color="#6364f1" />,
      number_of_cheatsheets: languagesData.length
    },
    {
      id: "dbs",
      _name: "Databases",
      data: databasesData,
      icon: <DatabaseIcon dimension={40} color="#fba8a8" />,
      number_of_cheatsheets: databasesData.length
    },
    {
      id: "web",
      _name: "Web Development",
      data: webDevelopmentData,
      icon: <WebIcon dimension={40} color="#fecb66" />,
      number_of_cheatsheets: webDevelopmentData.length
    },
    {
      id: "os",
      _name: "Operating System",
      data: operatingSystemData,
      icon: <OSIcon dimension={45} color="#1aa5e7" />,
      number_of_cheatsheets: operatingSystemData.length
    },
    {
      id: "vc",
      _name: "Version Control",
      data: versionControlData,
      icon: <GitIcon dimension={40} />,
      number_of_cheatsheets: versionControlData.length
    },
    {
      id: "dev",
      _name: "Dev Tools",
      data: devToolsData,
      icon: <DevToolsIcon dimension={40} color="#aea" />,
      number_of_cheatsheets: devToolsData.length
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 pb-3">
      {dataList.map(({ id, data, _name, icon, number_of_cheatsheets }) => (
        <div
          key={id}
          className="flex flex-col gap-3 flex-wrap"
        >
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
          <div id="section-bar" className="flex gap-5 flex-wrap items-center justify-center">
            {data
              ? data.map((cheatsheet: any, id: number) => (
                  <div
                    key={id}
                    className="bg-white border-[1.5px] border-slate-200 shadow-md p-4 rounded-md min-w-[300px]"
                  >
                    <div className="flex gap-2 flex-col">
                      <div className="flex gap-2 items-center">
                        {cheatsheet.icon ? cheatsheet.icon : <FileCodeIcon />}
                        <h1 className="italic text-[1rem] font-bold text-slate-700">
                          {cheatsheet.name}
                        </h1>
                      </div>
                      <span className="text-slate-500 text-[0.8rem] ml-2 flex gap-2 items-center">
                        <DateIcon dimension={15} color="#aaa" />
                        {cheatsheet.lastUpdate}
                      </span>
                    </div>
                    <hr className="border-b border-slate-100 my-1" />
                    <div className="w-full flex gap-2 items-center">
                      <div className="w-full h-1 bg-green-300 rounded-sm"></div>
                      <span className="italic text-slate-400 font-medium">{"45%"}</span>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}
