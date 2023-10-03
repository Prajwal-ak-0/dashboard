"use client";

import { useEffect, useState } from "react";
import { TodoModal } from "../modals/TodoModal";



export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        <TodoModal/> 
    </>
  )
}