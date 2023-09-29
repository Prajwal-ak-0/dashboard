import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">
        Welcome back !
      </h1>
      <SignIn />
    </div>
  );
}
