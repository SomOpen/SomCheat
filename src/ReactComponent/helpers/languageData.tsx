import dynamicPath from "../../utils/dynamic_path";
import { getData, getIndex } from "../../utils/handle_data";
import getProgress from "../../utils/progress";
import icon_detector from "./icon_detector";

/* 
------------------
Languages
------------------
*/
const languagesData = [
  {
    id: "js",
    name: "Javascript",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "ts",
    name: "Typescript",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
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
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "java",
    name: "Java",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "rust",
    name: "Rust",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "swift",
    name: "Swift",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "r",
    name: "R",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
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
    get icon() {
      return icon_detector(this.id);
    },
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
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "cs",
    name: "C#",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "cpp",
    name: "C++",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "py",
    name: "Python",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "php",
    name: "Php",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "rb",
    name: "Ruby",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "kotlin",
    name: "Kotlin",
    targets: "mobile",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
  {
    id: "dart",
    name: "Dart",
    get path() {
      return dynamicPath(this.id);
    },
    get icon() {
      return icon_detector(this.id);
    },
    lastUpdate: "Feb 27, 2025",
    get progress() {
      return getProgress(getIndex, getData, this);
    },
  },
];

export default languagesData;