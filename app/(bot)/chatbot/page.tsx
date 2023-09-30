"use client";

import * as z from "zod";
import axios from "axios";
import { MessageSquare, SendHorizonal } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import OpenAI, { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/app/(bot)/components/BotAvatar";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/app/(bot)/components/Loader";
import { UserAvatar } from "@/app/(bot)/components/UserAvatar";
import { Empty } from "@/components/Empty";

import { formSchema } from "../constants";
import History from "../components/History";
import useSideBar from "@/hooks/useSideBar";
import useSideMenu from "@/hooks/useSideMenu";
import { Separator } from "@/components/ui/separator";

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        toast.success("Pro Modal");
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  const sidebar = useSideBar();
  const sidemenu = useSideMenu();

  return (
    <div className={` 
            ${sidebar.isOpen ? "sm:ml-[175px] md:w-[78%] sm:w-[70%] " : "sm:ml-[70px] md:w-[90%] sm:w-[85%]"} 
            ${sidemenu.isOpen ? "sm:ml-[70px] md:w-[90%] sm:w-[85%]" : "sm:ml-[170px] md:w-[78%] sm:w-[70%] "} 
        `}
    >
      <div
        className={`overflow-auto
          flex flex-col border-2 border-neutral-200 fixed sm:h-[70%] rounded-md max-sm:w-full items-center justify-center shadow-md 
          ${sidebar.isOpen ? " md:w-[78%] sm:w-[70%] " : "md:w-[90%] sm:w-[85%]"} 
          ${sidemenu.isOpen ? " md:w-[90%] sm:w-[85%]" : "md:w-[78%] sm:w-[70%] "} 
       `}
      >
        <div>
          <div className=" ">
            <Heading
              title="Conversation"
              description="Our most advanced conversation model."
              icon={MessageSquare}
              iconColor="text-violet-500"
              bgColor="bg-violet-500/10"
            />
          </div>

          <div className="px-2  w-full relative lg:px-8">
            <div className="space-y-4 mt-4">
              {isLoading && (
                <div className="p-8 z-10 rounded-lg w-full flex items-center justify-center bg-muted">
                  <Loader />
                </div>
              )}
              {messages.length === 0 && !isLoading && (
                <Empty label="No conversation started." />
              )}
              <div className="flex flex-col gap-y-4">
                {messages.map((message) => (
                  <div
                    key={message.content}
                    className={cn(
                      "p-8 w-full flex items-start gap-x-8 rounded-lg",
                      message.role === "user"
                        ? "bg-white dark:text-black border border-black/10"
                        : "bg-muted"
                    )}
                  >
                    {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                    <p className="text-sm">{message.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`fixed bottom-8  mx-20 w-[70%] ${sidebar.isOpen ? " md:w-[78%] sm:w-[70%] " : "md:w-[90%] sm:w-[85%]"} 
          ${sidemenu.isOpen ? " md:w-[90%] sm:w-[85%]" : "md:w-[78%] sm:w-[70%] "} `}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                  rounded-lg 
                  w-full
                  md:px-6 
                  flex 
                "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="relative
                   w-full">
                    <FormControl className="">
                      <Input
                        className="border-2 border-neutral-300 dark:bg-slate-800 focus:border-none h-16 text-md"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="hover:scale-110 ml-2 my-auto mr-2"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                <SendHorizonal className="dark:text-black" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
