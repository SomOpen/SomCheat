import pathJson from "../../../data/path.json";

import { FileCodeIcon, JsIcon } from "../icons/File_Icons"

const all_file_icons = {
    default: <FileCodeIcon/>,
    js: <JsIcon/>
};

export default function icon_detector(filename: string) {
    try {
        if(pathJson && all_file_icons) {
            for(const [key, value] of Object.entries(pathJson)) {
                if(filename === key && all_file_icons.hasOwnProperty(key)) {
                    return all_file_icons[key as keyof typeof all_file_icons];
                }
            }
        }
        return all_file_icons.default;
    } catch (error) {
        console.error(error);
    }
}