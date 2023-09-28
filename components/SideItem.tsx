import { LucideProps } from "lucide-react";
import { ActionTooltip } from "./ActionToolTip";
import { cn } from "@/lib/utils";
import React from "react";

interface SideBarItemProps {
  name: string;
  icon: React.ComponentType<LucideProps>;
  id: string;
  url: string;
}

const SideBarItem = ({ name, icon, id, url }: SideBarItemProps) => {
  return (
    <ActionTooltip side="right" align="center" label={name}>
      <div className="flex flex-row hover:scale-110 hover:shadow-md transition-transform dark:hover:bg-indigo-950">
  <button className="group relative flex items-center">
    <div
      className={cn(
        "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]"
      )}
    />
    <div
      className={cn(
        "relative group flex mx-1 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden"
      )}
    >
      {React.createElement(icon, {
        size: 24,
        className: cn(
          "absolute inset-0 m-auto transition-all "
        ),
      })}
    </div>
  </button>
  <h1 className="mt-3 ml-1 group cursor-pointer">
    {name}
  </h1>
</div>

    </ActionTooltip>
  );
};

export default SideBarItem;
