import { useMemo, useState } from "react";
import { TaskType } from "../page";
import TasksContainer from "./TasksContainer";

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

function Main({ tasks }: { tasks: TaskType[] }) {
  const [newTask, setNewTask] = useState<TaskType | null>(null);

  const onAddClick = () => {
    setNewTask({
      type: "Personal",
      status: "Pending",
      label: "",
      description: "",
    });
  };

  const filteredTasks = useMemo(() => {
    return tasks;
  }, []);
  return (
    <div className="flex flex-col mt-20 gap-7 px-4 md:px-20 max-w-5xl mx-auto">
      <div className="flex justify-end items-center gap-4">
        <div className="bg-white rounded-md p-2 px-4 cursor-pointer text-sm border">
          Filter
        </div>
        <div className="bg-black text-white rounded-4xl p-2 px-4 cursor-pointer font-bold">
          + Add Task
        </div>
      </div>
      <div className="font-mono text-xl">Tasks</div>
      <TasksContainer
        newTask={newTask}
        tasks={filteredTasks}
        setNewTask={setNewTask}
        onAddClick={onAddClick}
      />
    </div>
  );
}

export default Main;
