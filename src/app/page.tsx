"use client";
import { useState } from "react";
import Header from "./components/Header";

export type TabsType = "All" | "Completed" | "Pending";

export default function Home() {
  const [tab, setTab] = useState<TabsType>("All");

  const onTabSelect = (selectedTab: TabsType) => {
    setTab(selectedTab);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[##EFEFEF] to-[#E5EBF1]">
      <Header tab={tab} onTabSelect={onTabSelect} />
    </div>
  );
}
