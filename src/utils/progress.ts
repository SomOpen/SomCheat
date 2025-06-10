export default function getProgress(getIndex: any, getData: any, obj: any) {
  try {
    obj.id = obj.id.split(" ")[0].toLowerCase();
    const index = getIndex(obj.id);
    return index !== null
      ? parseFloat(getData(index)[obj.id]?.finished_tasks_progress)
      : 0;
  } catch (error) {
    console.error(error);
  }
}
