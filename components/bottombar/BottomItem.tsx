'use client'

import { useCallback } from "react";
import {useRouter,useSearchParams} from 'next/navigation'
import qs from 'query-string'
import { LucideProps } from "lucide-react";

interface CategoryBoxProps{
    icon:React.ComponentType<LucideProps>;
    label:string;
    selected?:boolean;
}

const CategoryBox:React.FC<CategoryBoxProps> = ({
    icon:Icon,
    label,
    selected
}) => {
    const router=useRouter();
    const params=useSearchParams();

  return (
    <div
        onClick={()=>{}}
        className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            pt-3
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected?'border-b-neutral-800':'border-transparent'}
            ${selected?'text-neutral-800':'text-neutral-600'}
        `}
    >
        <Icon size={26} />
        <div className="font-medium text-sm">
           {label} 
        </div>
    </div>
  )
}

export default CategoryBox