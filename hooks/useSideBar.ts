import { create } from "zustand";

interface SideBarState{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useSideBar=create<SideBarState>((set)=>({
    isOpen:true,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useSideBar; 