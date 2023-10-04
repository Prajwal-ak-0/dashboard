"use client";

import useLoginModal from "@/hooks/useLoginModal";

const Auth = () => {
  const loginModal = useLoginModal();

  return (
    <div>
      <button onClick={loginModal.onOpen}>Login</button>
    </div>
  );
};

export default Auth;
