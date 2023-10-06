import Image from "next/image";

export const Loader = () => {
  return (
    <div className=" flex  flex-col items-center justify-center">
      <div className="w-16 h-16  animate-spin">
        <Image alt="Logo" src="/logo.png" fill />
      </div>
      <p className="text-lg mt-4 text-muted-foreground">
        Genius is thinking
        <span className="animate-loading-dots"> </span>
      </p>
    </div>
  );
};
