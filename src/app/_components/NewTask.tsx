import { useEffect, useRef } from "react";
import { cn } from "@/utils";
import { getTypeBgColor } from "./Main";
import { TaskType } from "../types";
import { useTaskContext } from "../_context/TaskContext";

function NewTask({
  newTask,
  setNewTask,
}: {
  newTask: TaskType;
  setNewTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
}) {
  const { onTaskAdd } = useTaskContext();
  const labelRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (labelRef) {
      labelRef.current?.focus();
    }
  }, [labelRef]);

  const isTaskSet = !(
    newTask.label.trim().length === 0 || newTask.description.trim().length === 0
  );

  return (
    <div className="flex bg-white rounded-lg p-2 items-center justify-between shadow-2xl">
      <div className="flex flex-col gap-3 flex-1">
        <input
          ref={labelRef}
          placeholder="Label"
          defaultValue={newTask.label}
          onChange={(e) =>
            setNewTask((prev) =>
              prev ? { ...prev, label: e.target.value } : null
            )
          }
          className="outline-0"
        />
        <input
          ref={labelRef}
          placeholder="Description"
          defaultValue={newTask.description}
          onChange={(e) =>
            setNewTask((prev) =>
              prev ? { ...prev, description: e.target.value } : null
            )
          }
          className="outline-0 opacity-80 w-full flex-1 pl-0.5"
        />
      </div>
      <div className="flex items-center gap-8">
        <select
          className={cn(
            "p-2 rounded-sm text-white font-bold text-xs outline-0 cursor-pointer",
            getTypeBgColor(newTask?.type)
          )}
          value={newTask?.type}
          onChange={(e) =>
            setNewTask((prev) =>
              prev
                ? { ...prev, type: e.target.value as TaskType["type"] }
                : null
            )
          }
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <div className="bg-red-400 font-bold text-white p-2 rounded-sm text-xs">
          {newTask.status}
        </div>

        <div
          className={cn(
            "text-3xl rounded-full bg-gray-900 h-8 w-8 flex justify-center items-center cursor-pointer text-white",
            {
              "opacity-10": !isTaskSet,
            }
          )}
          onClick={() => {
            if (isTaskSet) onTaskAdd(newTask);
          }}
        >
          +
        </div>
        <div
          className={cn(
            "text-xl rounded-full bg-gray-900 h-8 w-8 flex justify-center items-center cursor-pointer text-white"
          )}
          onClick={() => {
            setNewTask(null);
          }}
        >
          x
        </div>
      </div>
    </div>
  );
}

export default NewTask;
