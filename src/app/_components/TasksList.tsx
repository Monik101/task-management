import NewTask from "./NewTask";
import { useTaskContext } from "../_context/TaskContext";
import { cn } from "@/utils";
import { getStatusBgColor, getTypeBgColor } from "./Main";

function TasksList() {
  const {
    tasks,
    newTask,
    filteredTasks,
    setNewTask,
    onAddClick,
    resetFilters,
  } = useTaskContext();

  if (tasks.length === 0 && !newTask) {
    return (
      <div className="text-center">
        <p className="opacity-60 mb-5">No tasks added yet.</p>
        <div
          className="border-dotted w-full border border-gray-500 rounded-lg p-2 flex justify-center cursor-pointer hover:opacity-80"
          onClick={onAddClick}
        >
          + Add new task
        </div>
      </div>
    );
  }
  if (filteredTasks.length === 0 && tasks.length > 0) {
    return (
      <div className="flex flex-col items-center gap-3 text-center opacity-70">
        <p>No tasks match the selected filters.</p>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 cursor-pointer"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 overflow-y-auto pt-2 pb-16 px-4 max-h-[70vh]">
      {newTask && <NewTask newTask={newTask} setNewTask={setNewTask} />}
      {filteredTasks.map((item, idx) => (
        <div
          key={`${item.status}-${item.description}-${idx}`}
          className="flex bg-white rounded-lg p-2 items-center justify-between shadow-2xl"
        >
          <div className="flex flex-col gap-3 flex-1">
            <p>{item.label}</p>
            <p className="opacity-80">{item.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={cn(
                "flex justify-center items-center p-2 rounded-md text-white font-bold text-xs w-24",
                getTypeBgColor(item.type)
              )}
            >
              {item.type}
            </div>
            <div
              className={cn(
                "flex justify-center items-center font-bold text-white p-2 rounded-md text-xs w-24",
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
