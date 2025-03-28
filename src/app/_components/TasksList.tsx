import NewTask from "./NewTask";
import { useTaskContext } from "../_context/TaskContext";
import { cn } from "@/utils";
import { getStatusBgColor, getTypeBgColor } from "./Main";

function TasksList() {
  const { tasks, newTask, filteredTasks, setNewTask, onAddClick } =
    useTaskContext();
  if (newTask && tasks.length === 0) {
    return <NewTask newTask={newTask} setNewTask={setNewTask} />;
  }
  if (tasks.length === 0) {
    return (
      <div>
        <div className="opacity-60 mb-5">No tasks added yet.</div>
        <div
          className="border-dotted w-full border border-b-gray-500 rounded-lg p-2 flex justify-center cursor-pointer hover:opacity-80"
          onClick={onAddClick}
        >
          + Add new task
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 overflow-scroll pt-2 pb-16 px-4 max-h-[70vh]">
      {newTask && <NewTask newTask={newTask} setNewTask={setNewTask} />}
      {filteredTasks.map((item, idx) => (
        <div
          key={`${item.status}-${item.description}-${idx}`}
          className="flex bg-white rounded-lg p-2 items-center justify-between shadow-2xl"
        >
          <div className="flex flex-col gap-3 flex-1">
            <p>{item.label}</p>
            <p className="opacity-80 w-full flex-1 pl-0.5">
              {item.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 ">
            <div
              className={cn(
                "flex justify-center items-center p-2 rounded-sm text-white font-bold text-xs outline-0 cursor-pointer w-24",
                getTypeBgColor(item.type)
              )}
            >
              {item.type}
            </div>
            <div
              className={cn(
                "flex justify-center items-center font-bold text-white p-2 rounded-sm text-xs w-24",
                getStatusBgColor(item.status)
              )}
            >
              {item.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
