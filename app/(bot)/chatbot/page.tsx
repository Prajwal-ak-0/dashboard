"use client";

import * as z from "zod";
import axios from "axios";
import { MessageSquare, Mic2, Pause, Send, SendHorizonal } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
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
import useSideBar from "@/hooks/useSideBar";
import useSideMenu from "@/hooks/useSideMenu";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

let recognition: any; // Declare recognition variable outside of the component

const ConversationPage = () => {
  const router = useRouter();
  const sidebar = useSideBar();
  const sidemenu = useSideMenu();

  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [voiceAssistantLoading, setVoiceAssistantLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [transcriptMessage, setTranscriptMessage] = useState("");

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

  // Voice Assistant
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startRecognition = () => {
    recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("");

      setTranscriptMessage(transcript); // Update transcriptMessage
      setTranscript(transcript);
    };

    recognition.onend = async () => {
      if (transcript !== "") {
      }
    };

    recognition.start();
    setIsListening(true);
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div
      className={` 
            ${
              sidebar.isOpen
                ? "sm:ml-[175px] md:w-[78%] sm:w-[70%] "
                : "sm:ml-[70px] md:w-[90%] sm:w-[85%]"
            } 
            ${
              sidemenu.isOpen
                ? "sm:ml-[70px] md:w-[90%] sm:w-[85%]"
                : "sm:ml-[170px] md:w-[78%] sm:w-[70%] "
            } 
        `}
    >
      <div>
        <Heading
          title="Conversation"
          description="Our most advanced conversation model."
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
        />
        <div className="sm:ml-4 mt-4 ">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="
                rounded-lg 
                border 
                w-full
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
              >
                <FormField
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="md:col-span-11 col-span-9">
                      <FormControl className="m-0 px-1">
                        <Input
                          className="max-md:w-full  "
                          disabled={isLoading}
                          placeholder="How do I calculate the radius of a circle?"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex mr-2 gap-2">
                  {!isListening && (
                    <>
                      <Button
                        size="submit"
                        variant="submit"
                        disabled={isListening}
                        onClick={startRecognition}
                        className="p-2 h-10 my-2 bg-transparent hover:bg-transparent border  hover:ring-1 hover:shadow-md hover:scale-105 transition-all duration-100 rounded-full"
                      >
                        <Mic2 className="w-fit bg-transparent" />
                      </Button>
                    </>
                  )}
                  {isListening && (
                    <>
                      <Button
                        size="submit"
                        variant="submit"
                        disabled={!isListening}
                        onClick={stopRecognition}
                        className="p-2 h-10 my-2 bg-transparent hover:bg-transparent border  hover:ring-1 hover:shadow-md hover:scale-105 rounded-full transition-all duration-100"
                      >
                        <Pause className="w-fit p-2 bg-transparent" />
                      </Button>
                    </>
                  )}
                  <Button
                    className="border md:mr-1 px-2  hover:ring-1 hover:shadow-md my-2 hover:scale-105 transition-all duration-100"
                    type="submit"
                    disabled={isLoading}
                    size="submit"
                    variant={"submit"}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="px-8 py-4 rounded-lg  w-full flex items-center justify-center ">
                <Loader />
              </div>
            )}
            {voiceAssistantLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader />
              </div>
            )}
            {messages.length === 0 && !isLoading && (
              <Empty label="No conversation started." />
            )}
            <div className="flex flex-col-reverse gap-y-4">
              {messages.map((message) => (
                <div
                  key={message.content}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    message.role === "user"
                      ? "dark:bg-neutral-400  bg-rose-100 dark:text-black border border-black/10"
                      : "dark:bg-violet-300/10 dark:text-white border  bg-sky-100 dark:border-violet-500/10"
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
    </div>
  );
};

export default ConversationPage;

{
  /* <div>
      <button onClick={startRecognition} disabled={isListening}>
        Start
      </button>
      <button onClick={stopRecognition} disabled={!isListening}>
        Stop
      </button>
      <p>Transcript: {transcript}</p>
      <p>Response: {response}</p>
    </div> */
}
