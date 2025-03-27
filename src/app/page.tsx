"use client";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export type TabsType = "All" | "Completed" | "Pending";

export type TaskType = {
  type: "Work" | "Personal" | "Urgent";
  status: "Completed" | "Pending";
  label: string;
  description: string;
};

export default function Home() {
  const [tab, setTab] = useState<TabsType>("All");

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const onTabSelect = (selectedTab: TabsType) => {
    setTab(selectedTab);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[##EFEFEF] to-[#E5EBF1]">
      <Header tab={tab} onTabSelect={onTabSelect} />
      <Main tasks={tasks} />
    </div>
  );
}
