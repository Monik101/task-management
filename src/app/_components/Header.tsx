import { cn } from "@/utils";
import Image from "next/image";
import { useTaskContext } from "../_context/TaskContext";
import { TabsType } from "../types";

function Header() {
  const { tab, onTabSelect } = useTaskContext();
  const tabs: TabsType[] = ["All", "Completed", "Pending"];

  return (
    <div className="border-b-2 border-[#dee6ef] p-4 flex items-center justify-between w-full">
      <p className="text-sm md:text-lg font-mono">Task Manager</p>
      <div className="flex flex-row gap-3 md:gap-10 flex-wrap">
        {tabs.map((item, idx) => (
          <p
            key={`${item}-${idx}`}
            className={cn(
              "text-xs sm:text-sm md:text-lg cursor-pointer transition-opacity",
              {
                "opacity-50": item !== tab,
              }
            )}
            onClick={() => onTabSelect(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <Image
        src="https://github.com/shadcn.png"
        alt="alt"
        width={40}
        height={40}
        quality={100}
        priority
        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
      />
    </div>
  );
}

export default Header;
