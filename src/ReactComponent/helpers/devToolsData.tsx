import dynamicPath from "../../utils/dynamic_path";
import { getData, getIndex } from "../../utils/handle_data";
import getProgress from "../../utils/progress";
import icon_detector from "./icon_detector";

/* 
  ------------------
  Dev tools
  ------------------
*/
const devToolsData = [
  {
    id: "git",
    name: "Git",
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

export default devToolsData;