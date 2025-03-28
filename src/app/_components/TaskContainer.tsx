import { cn } from "@/utils";
import { TaskType } from "../types";
import { useMemo } from "react";
import { getStatusBgColor, getTypeBgColor } from "./Main";
import { useTaskContext } from "../_context/TaskContext";

function TaskContainer({ item, idx }: { item: TaskType; idx: number }) {
  const { onTaskEdit } = useTaskContext();

  const typeBackgroundColor = useMemo(() => {
    return getTypeBgColor(item.type);
  }, [item.type]);

  const statusBackgroundColor = useMemo(() => {
    return getStatusBgColor(item.status);
  }, [item.type]);

  return (
    <div className="flex bg-white rounded-lg p-2 items-center justify-between shadow-2xl">
      <div className="flex flex-col gap-3 flex-1">
        <p>{item.label}</p>
        <p className="opacity-80">{item.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <select
          className={cn(
            "p-2 rounded-sm text-white font-bold text-xs outline-0 cursor-pointer",
            typeBackgroundColor
          )}
          value={item.type}
          onChange={(e) => {
            onTaskEdit({
              ...item,
              type: e.target.value as TaskType["type"],
            });
          }}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <div
          className={cn(
            "flex justify-center items-center font-bold text-white p-2 rounded-md text-xs w-24 cursor-pointer",
            statusBackgroundColor
          )}
          onClick={() =>
            onTaskEdit({
              ...item,
              status: item.status === "Pending" ? "Completed" : "Pending",
            })
          }
        >
          {item.status}
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
