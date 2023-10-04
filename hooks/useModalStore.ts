// import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";

//export type ModalType = "createTodo";

// interface ModalData {
//   server?: Server;
//   channel?: Channel;
//   channelType?: ChannelType;
//   apiUrl?: string;
//   query?: Record<string, any>;
// }
// data?: ModalData

interface ModalStore {
  //type: ModalType | null;
  //data: ModalData;
  isOpen: boolean;
  onOpen: ( ) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({  isOpen: false })
}));