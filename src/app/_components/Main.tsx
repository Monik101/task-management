import TasksList from "./TasksList";
import { useTaskContext } from "../_context/TaskContext";
import { TaskType } from "../types";
import Filter from "./Filter";

export const getTypeBgColor = (type: TaskType["type"]) => {
  switch (type) {
    case "Work":
      return "bg-blue-100 text-blue-700 border border-blue-300";
    case "Personal":
      return "bg-green-100 text-green-700 border border-green-300";
    case "Urgent":
      return "bg-yellow-100 text-yellow-700 border border-yellow-300";
    default:
      return "bg-gray-100 text-gray-700 border border-gray-300";
  }
};

export const getStatusBgColor = (status: TaskType["status"]) => {
  switch (status) {
    case "Completed":
      return "bg-gray-400";
    case "Pending":
      return "bg-red-400";
    default:
      return "bg-gray-100";
  }
};

function Main() {
  const { onAddClick, onSetDefaultTasks } = useTaskContext();
  return (
    <div className="flex flex-col mt-20 gap-7 px-4 md:px-20 max-w-5xl mx-auto">
      <div className="flex justify-end items-center gap-4">
        <Filter />
        <div
          className="bg-gray-800 text-white rounded-4xl p-2 px-4 cursor-pointer font-bold font-mono"
          onClick={onSetDefaultTasks}
        >
          Set Default Tasks
        </div>
        <div
          className="bg-black text-white rounded-4xl p-2 px-4 cursor-pointer font-bold"
          onClick={onAddClick}
        >
          + Add Task
        </div>
      </div>
      <div className="font-mono text-xl">Tasks</div>
      <TasksList />
    </div>
  );
}

export default Main;
