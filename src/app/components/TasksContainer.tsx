import { useState } from "react";
import { TaskType } from "../page";
import NewTask from "./NewTask";

function TasksContainer({
  newTask,
  setNewTask,
  tasks,
  onAddClick,
}: {
  newTask: TaskType | null;
  tasks: TaskType[];
  setNewTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
  onAddClick: () => void;
}) {
  if (newTask) {
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
  return <></>;
}

export default TasksContainer;
