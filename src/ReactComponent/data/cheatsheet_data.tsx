import { FileCodeIcon, JsIcon } from "../icons/Icon";
function dynamicPath(path: string) {
  return `cheatsheets/${path.split(" ")[0].toLowerCase()}`;
}

const cheatsheet_data = {
  // Programming Languages
  "Programming Languages": [
    {
      name: "Javascript",
      get path() {
        return dynamicPath(this.name);
      },
      icon: <JsIcon dimension={32} />,
      tags: ["Web Development", "Programming Language"],
      updated: "Feb 27, 2025",
    },
    {
      name: "C",
      get path() {
        return dynamicPath(this.name);
      },
      icon: "",
      tags: ["General Purpose", "Programming Language"],
      updated: "Feb 27, 2025",
    },
    {
      name: "Golang",
      get path() {
        return dynamicPath(this.name);
      },
      icon: "",
      tags: ["Backend", "Programming Language"],
      updated: "Feb 27, 2025",
    },
    {
      name: "Lua",
      get path() {
        return dynamicPath(this.name);
      },
      icon: "",
      tags: ["Game Development", "Programming Language"],
      updated: "Feb 27, 2025",
    },
  ],
  // Databases
  databases: [
    {
      name: "mongoDB",
      get path() {
        return dynamicPath(this.name);
      },
      icon: "",
      tags: ["Backend", "Databases"],
      updated: "Feb 27, 2025",
    },
  ],
  //
};

export default cheatsheet_data;
