"use client";

import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import React from "react";

interface MenuItemProps{
    onClick:()=>void;
    label:string;
    icon: React.ComponentType<LucideProps>;
}

const MenuItem:React.FC<MenuItemProps>=({
    onClick,
    label,
    icon
})=>{
    return(
        <div className="flex hover:bg-pink-100">
            <div className="px-3 py-2">
                {React.createElement(icon, {
                    size: 24,
                 })
                }
            </div>
            <div
                onClick={onClick}
                className="
                    px-3
                    py-2
                    transition
                    font-semibold
                "
            >
                {label}
            </div>
        </div>
    )
}

export default MenuItem;