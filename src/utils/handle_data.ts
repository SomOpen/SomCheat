import jsonData from "../../tasks/tasks.json";

export function getIndex(file: any): any {
  try {
    if(jsonData) {
        const index = jsonData.findIndex((d) => d?.hasOwnProperty(file));
        return index !== -1 ? index : null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function getData(file?: any): any {
  try {
    if (jsonData) {
      return jsonData[file];
    }
  } catch (error) {
    console.error(error);
  }
}