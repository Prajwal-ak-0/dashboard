import { LucideProps}  from "lucide-react";

import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex gap-x-3">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        {React.createElement(icon, {
            size: 24,
            className: cn(
              "w-10 h-10",iconColor
            ),
          })
          }
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
