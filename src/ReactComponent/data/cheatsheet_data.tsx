import { JsIcon } from "../icons/Icon";
import dynamicPath from "../../utils/dynamic_path";
import { getData, getIndex } from "../../utils/handle_data";
import getProgress from "../../utils/progress";

// Programming Languages
export const languagesData = [
  {
    id: "js",
    name: "Javascript",
    get path() {
      return dynamicPath(this.id);
    },
    icon: <JsIcon />,
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "c",
    name: "C",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "go",
    name: "Golang",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "lua",
    name: "Lua",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "lua",
    name: "Lua",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
];

// Databases
export const databasesData = [
  {
    id: "mongodb",
    name: "MongoDB",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
];

// Web Development
export const webDevelopmentData = [
  {
    id: "css",
    name: "Css",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
];

// Operating System
export const operatingSystemData = [
  {
    id: "linux",
    name: "Linux",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
];

// Operating System
export const versionControlData = [
  {
    id: "git",
    name: "Git",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
];

// Dev Tools
export const devToolsData = [
  {
    id: "git",
    name: "Git",
    get path() {
      return dynamicPath(this.id);
    },
    icon: "",
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
];
