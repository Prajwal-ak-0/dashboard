"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/hooks/useLoginModal";
import Heading from "./Heading";
import Input from "./Input";

const LoginModal = () => {
  const LoginModal = useLoginModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      passone: "",
      passtwo: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    const res = await signIn("credentials", {
      username: data.username,
      passone: data.passone,
      passtwo: data.passtwo,
      redirect: false,
    });

    console.log(res);
    if (res && res.error) {
      toast.error(res.error);
      LoginModal.onClose();
      
      router.refresh();
    } else if (res?.status === 200) {
      toast.success("Logged In");
      router.refresh();
      LoginModal.onClose();
    }
  };

  const toggle = useCallback(() => {
    LoginModal.onClose();
  }, [LoginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your Account" />
      <Input
        id="username"
        label="Username"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="passone"
        label="PassOne"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="passtwo"
        label="PassTwo"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div
        className="
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                "
      >
        <div
          className="
                        flex
                        flex-row
                        items-center
                        justify-center
                        gap-2
                    "
        >
          <div>First time using airbnb?</div>
          <div
            onClick={handleSubmit(onSubmit)}
            className="
                            hover:underline
                            text-neutral-800
                            cursor-pointer
                        "
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={LoginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
