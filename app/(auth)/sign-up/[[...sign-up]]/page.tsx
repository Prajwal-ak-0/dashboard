import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="sm:text-4xl font-bold mb-4 animate-fade-in">
        Sign Up & Get Started
      </h1>
      <SignUp/>
    </div>
  )
}