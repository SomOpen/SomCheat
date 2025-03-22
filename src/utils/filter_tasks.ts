import jsonData from "../../tasks/tasks.json";

const jData: any = jsonData;
export function extractFolders() {
  const folders: any = [];
  try {
    if (jsonData) {
      for (const props of jsonData) {
        folders.push(props.folder.slice(0, props.folder.lastIndexOf(".")));
      }
      return folders;
    }
  } catch (error) {
    console.error(error);
  }
}
const directories = extractFolders();

const tasks: any = [];

function getTasks() {
  try {
    if (jData) {
      for (let i = 0; i < jData.length; i++) {
        tasks.push({
          [directories[i]]: jData[i][directories[i]],
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}
getTasks();

export function filterTasks() {
  try {
    for (let i = 0; i < tasks.length; i++) {
      const taskName = tasks[i][directories[i]];
      taskName.finished_t = taskName.tasks.filter(
        (_: any, i: number) => taskName?.done_indices.includes(i)
      );
      taskName.unfinished_t = taskName.tasks.filter(
        (_: any, i: number) => taskName?.empty_indices.includes(i)
      );
    }
    return tasks;
  } catch (error) {
    console.error(error);
  }
}