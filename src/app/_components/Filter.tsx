import { useState } from "react";
import { cn } from "@/utils"; // Utility function for classNames
import { TaskType } from "../types";
import { useTaskContext } from "../_context/TaskContext";

import { ChevronDown } from "lucide-react";

function Filter() {
  const { selectedType, handleFilterSelect } = useTaskContext();

  const [isOpen, setIsOpen] = useState(false);

  const taskTypes: (TaskType["type"] | "All")[] = [
    "All",
    "Work",
    "Personal",
    "Urgent",
  ];

  return (
    <div className="relative">
      <div
        className="bg-white rounded-md p-2 px-4 cursor-pointer text-sm border flex justify-between items-center min-w-[120px] "
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedType}
        <ChevronDown
          size={20}
          className={cn("ease-in-out transform duration-300", {
            "rotate-180": isOpen,
          })}
        />
      </div>

      {isOpen && (
        <ul className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg overflow-hidden z-10 p-4">
          {taskTypes.map((type) => (
            <li
              key={type}
              className={cn(
                "p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-sm my-1",
                selectedType === type ? "bg-gray-200 font-bold" : ""
              )}
              onClick={() => {
                handleFilterSelect(type);
                setIsOpen(false);
              }}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
