import { JsIcon } from "../icons/Icon";
function dynamicPath(path: string) {
  return `cheatsheets/${path.split(" ")[0].toLowerCase()}`;
}

// Programming Languages
export const languagesData = [
  {
    name: "Javascript", 
    get path() {
      return dynamicPath(this.name);
    },
    icon: <JsIcon dimension={32} />,
    lastUpdate: "Feb 27, 2025",
  },
  {
    name: "C",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
  {
    name: "Golang",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
  {
    name: "Lua",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
  {
    name: "Lua",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
];

// Databases
export const databasesData = [
  {
    name: "mongoDB",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
];

// Web Development
export const webDevelopmentData = [
  {
    name: "Css",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
];

// Operating System
export const operatingSystemData = [
  {
    name: "Linux",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
];

// Operating System
export const versionControlData = [
  {
    name: "Git",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
];

// Dev Tools
export const devToolsData = [
  {
    name: "Git",
    get path() {
      return dynamicPath(this.name);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
  },
];