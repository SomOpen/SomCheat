import { TaskErrorIcon, UncheckIcon } from "../icons/Icon";

export default function UnfinishedTasks({
  tasks,
  icon,
}: {
  tasks: any;
  icon: React.ReactElement;
}) {
  return (
    <div
      id="unfinished-tasks-main"
      className="flex transition-all duration-300 linear flex-col border border-slate-300 rounded-md p-2"
    >
      <button
        id="unfinished-tasks-btn"
        className="cursor-pointer flex gap-2 items-center"
      >
        <h1 className="font-bold text-slate-500 flex-1 flex gap-2">
          {<TaskErrorIcon />} Unfinished Tasks
        </h1>
        <div className="flex gap-2">
          <span
            style={{ fontFamily: "Grand Hotel" }}
            className="text-slate-400 font-bold text-[1.1rem]"
          >
            {tasks?.empty_len} Tasks
          </span>
          {icon}
        </div>
      </button>
      <div
        id="unfinished-tasks"
        className="max-h-0 flex flex-col gap-2 overflow-hidden transition-all duration-300 linear ${
                    "
      >
        {tasks?.unfinished_t.map((_t: any, index: number) => (
          <div className="flex gap-2">
            <UncheckIcon dimension={28} color="oklch(0.592 0.249 0.584)" />
            <p className="font-medium text-slate-600">
              {_t.slice(_t.indexOf(":") + 1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
