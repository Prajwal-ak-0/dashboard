import { create } from "zustand";

interface SideMenuState{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useSideMenu=create<SideMenuState>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useSideMenu; 