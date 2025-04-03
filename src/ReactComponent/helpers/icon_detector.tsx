import pathJson from "../../../data/path.json";
import all_cheat_icons from "./list_icons";

export default function icon_detector(cheatname: string) {
  try {
    if (pathJson && all_cheat_icons) {
      for (const [key, value] of Object.entries(pathJson)) {
        if (cheatname === key && all_cheat_icons.hasOwnProperty(key)) {
          return all_cheat_icons[key as keyof typeof all_cheat_icons];
        }
      }
    }
    return all_cheat_icons.default;
  } catch (error) {
    console.error(error);
  }
}
