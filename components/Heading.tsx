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
              "md:w-10 md:h-10 h-8 w-8",iconColor
            ),
          })
          }
        </div>
        <div>
          <h2 className="md:text-3xl sm:text-xl text-lg  font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
