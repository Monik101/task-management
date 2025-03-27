import { useEffect, useRef } from "react";
import { TaskType } from "../page";
import { cn } from "@/utils";
import { getTypeBgColor } from "./Main";

function NewTask({
  newTask,
  setNewTask,
}: {
  newTask: TaskType;
  setNewTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
}) {
  const labelRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (labelRef) {
      labelRef.current?.focus();
    }
  }, [labelRef]);

  return (
    <div className="flex bg-white rounded-lg p-2 items-center justify-between">
      <div className="flex flex-col gap-3">
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
          className="outline-0 opacity-80"
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

        <div className="text-3xl rounded-full bg-gray-300 h-8 w-8 flex justify-center items-center cursor-pointer opacity-10">
          +
        </div>
      </div>
    </div>
  );
}

export default NewTask;
