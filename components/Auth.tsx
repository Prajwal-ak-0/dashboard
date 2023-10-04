"use client";

import useLoginModal from "@/hooks/useLoginModal";
import Button from "./modals/Button";

const Auth = () => {
  const loginModal = useLoginModal();

  return (
    <div className="h-fit gap-4  w-fit mx-auto flex flex-col items-center justify-center mt-64 my-auto">
      <h1 className="text-lg text-center font-medium">
        Enter the
        <span className="px-2 text-xl font-bold">Admin Credentials</span> to
        continue
      </h1>
      <Button
        onClick={() => {loginModal.onOpen()}}
        label="Login"
      />
    </div>
  );
};

export default Auth;
