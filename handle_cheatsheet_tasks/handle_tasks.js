import fs from "fs/promises";

const dirname = "cheatsheet_tasks";

async function readFolder() {
  try {
    const data = await fs.readdir(`./${dirname}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
const dir_data = await readFolder();

async function readContents() {
  let contents = [];
  try {
    for (let i = 0; i < dir_data.length; i++) {
      const fileContent = await fs.readFile(
        dirname + "/" + dir_data[i],
        "utf8"
      );
      contents.push(fileContent);
    }
    if (contents.length > 0) {
      return contents;
    }
  } catch (error) {
    console.error(error);
  }
}

let metadata = [], status = [];

const data = await readContents();

async function extractData() {
  const split_data = data.map(content => content.split("\n"));

  for(let i = 0; i < split_data.length; i++) {
    const filename = dir_data[i]?.slice(0, dir_data[i].lastIndexOf("."));
    for(let j = 0; j < split_data[i].length; j++) {
        status.push({[i]: split_data[i][j].slice(split_data[i][j].lastIndexOf("["))});
    }
    metadata.push({
        [filename]: {
            raw_status: status.filter(v => v[i])
        }
    })
  }
//   console.log(metadata[0].js.raw_status[0]);
  return metadata;
}

const tasks_data = await extractData();

async function evaluate() {
    const translated_status = [], evaluated_status   = [];
    for(let i = 0; i < tasks_data.length; i++) {
        const filename = dir_data[i]?.slice(0, dir_data[i].lastIndexOf("."));
        for(let j = 0; j < tasks_data[i][filename]?.raw_status.length; j++) {
            const status = await tasks_data[i][filename]?.raw_status[j];
            const clean_value = status[i]?.split("").filter(char => char !== " ").join("");
            if(clean_value === "[]") {
                translated_status.push({[i]: "Unfinished"});
            }
            if(clean_value?.trim().toLowerCase().includes("[done]")) {
                translated_status.push({[i]: "Finished"});
                console.log(clean_value);
            }
        }
        evaluated_status.push({
            [filename]: {
            total_len: translated_status.filter(v => v[i]).length,
            empty_len: translated_status.filter(v => v[i] === "Unfinished").length,
            done_len: translated_status.filter(v => v[i] === "Finished").length,
            empty_indices: translated_status.reduce((acc, curr, idx) => {
                if (curr[i] === "Unfinished") acc.push(idx);
                return acc;
            }, []),
            done_indices: translated_status.reduce((acc, curr, idx) => {
                if (curr[i] === "Finished") acc.push(idx);
                return acc;
            }, [])
            }
        })
    }
    return evaluated_status;
}

const _data = await evaluate();

async function calculateTask() {
    const result = [];
    const calculateTaskProgress = (task, totalTasks) => ((task / totalTasks) * 100).toFixed(0);
    let i = 0;
    while(i < _data.length) {
        const filename = dir_data[i]?.slice(0, dir_data[i].lastIndexOf("."));
        const finished_tasks = _data[i][filename]?.done_len;
        const unfinished_tasks = _data[i][filename]?.empty_len;
        const total_tasks = _data[i][filename]?.total_len;
        result.push({
            [filename]: {
                finished_tasks_progress: calculateTaskProgress(finished_tasks, total_tasks),
                unfinished_tasks_progress: calculateTaskProgress(unfinished_tasks, total_tasks),
                done_len: finished_tasks,
                empty_len: unfinished_tasks,
                done_indices: _data[i][filename]?.done_indices,
                empty_indices: _data[i][filename]?.empty_indices
            }
        })
        i++;
    }
    return result;
}

/*
    1. data:
        returns an array of text content of each file
    2. tasks_data:
        returns an array of object.
        Example: [ { js: { raw_status: [Array] } }, { lua: { raw_status: [Array] } } ]
    3. _data:
        returns an array of object.
        Example:
        [{
            js: {
            total_len: 15,
            empty_len: 12,
            done_len: 3,
            empty_indices: [Array],
            done_indices: [Array]
            }
        }]
    4. ouput:
        returns an array of object.
 */

const output = await calculateTask();
console.log(data);

async function createJsonFile() {
try {
    const fileData = JSON.stringify(output, null, 2);
    await fs.writeFile(
        "tasks/tasks.json",
        fileData,
        (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("File written successfully");
      }
    );
  } catch (error) {
    console.error(error);
  }
}

await createJsonFile();