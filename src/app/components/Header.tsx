import { cn } from "@/utils";
import { TabsType } from "../page";

function Header({
  tab,
  onTabSelect,
}: {
  tab: string;
  onTabSelect: (selectedTab: TabsType) => void;
}) {
  const tabs: TabsType[] = ["All", "Completed", "Pending"];
  return (
    <div className="border-b-2 border-[#dee6ef] p-4 justify-between flex w-full">
      <p className="text-lg font-mono">Task Manager</p>
      <div className="flex flex-row gap-16">
        {tabs.map((item, idx) => (
          <p
            key={`${item}-${idx}`}
            className={cn("cursor-pointer", {
              "opacity-50": item !== tab,
            })}
            onClick={() => onTabSelect(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <p className="text-lg font-mono">Task Manager</p>
    </div>
  );
}

export default Header;
