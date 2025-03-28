import { createContext, useContext, useMemo, useState } from "react";
import { TabsType, TaskType } from "../types";

const defaultTasks: TaskType[] = [
  {
    type: "Work",
    status: "Pending",
    label: "Finish React project",
    description: "Complete the frontend of the task management app.",
  },
  {
    type: "Personal",
    status: "Completed",
    label: "Buy groceries",
    description: "Purchase vegetables, fruits, and milk.",
  },
  {
    type: "Work",
    status: "Pending",
    label: "Prepare for meeting",
    description: "Review the agenda and create presentation slides.",
  },
  {
    type: "Personal",
    status: "Pending",
    label: "Doctor’s appointment",
    description: "Visit Dr. Sharma at 5 PM for a routine check-up.",
  },
  {
    type: "Work",
    status: "Completed",
    label: "Fix UI bug",
    description: "Resolve the navbar issue in the admin panel.",
  },
  {
    type: "Personal",
    status: "Pending",
    label: "Plan weekend trip",
    description: "Research destinations and book a hotel.",
  },
  {
    type: "Work",
    status: "Pending",
    label: "Submit report",
    description: "Prepare and submit the quarterly progress report.",
  },
  {
    type: "Urgent",
    status: "Pending",
    label: "Call electrician",
    description: "Fix the short circuit in the kitchen.",
  },
  {
    type: "Personal",
    status: "Completed",
    label: "Renew gym membership",
    description: "Extend the gym membership for another 3 months.",
  },
  {
    type: "Work",
    status: "Pending",
    label: "Prepare presentation",
    description: "Create a slide deck for the upcoming product demo.",
  },
];

interface TaskContextType {
  tab: TabsType;
  tasks: TaskType[];
  newTask: TaskType | null;
  filteredTasks: TaskType[];
  setNewTask: React.Dispatch<React.SetStateAction<TaskType | null>>;
  onTabSelect: (selectedTab: TabsType) => void;
  onAddClick: () => void;
  onTaskAdd: (task: TaskType) => void;
  onSetDefaultTasks: () => void;
}

const TaskContext = createContext<TaskContextType>({
  tab: "All",
  tasks: [],
  newTask: null,
  filteredTasks: [],
  setNewTask: () => {},
  onTabSelect: () => {},
  onAddClick: () => {},
  onTaskAdd: () => {},
  onSetDefaultTasks: () => {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [newTask, setNewTask] = useState<TaskType | null>(null);
  const [tab, setTab] = useState<TabsType>("All");

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const onTabSelect = (selectedTab: TabsType) => {
    setTab(selectedTab);
  };

  const onAddClick = () => {
    if (newTask) return;
    setNewTask({
      type: "Personal",
      status: "Pending",
      label: "",
      description: "",
    });
  };

  const onTaskAdd = (task: TaskType) => {
    setTasks((prev) => [...prev, task]);
    setNewTask(null);
  };

  const onSetDefaultTasks = () => {
    setTasks(defaultTasks);
  };

  const filteredTasks = useMemo(() => {
    return tasks;
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tab,
        tasks,
        newTask,
        filteredTasks,
        setNewTask,
        onTabSelect,
        onAddClick,
        onTaskAdd,
        onSetDefaultTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
