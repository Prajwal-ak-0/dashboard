"use client";

import { Heading } from "@/components/Heading";
import useSideBar from "@/hooks/useSideBar";
import useSideMenu from "@/hooks/useSideMenu";
import { Calendar } from "lucide-react";
import { TextField, Button, DialogActions } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import type { SchedulerHelpers } from "@aldabil/react-scheduler/types";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { EventActions, ProcessedEvent } from "@aldabil/react-scheduler/types";
import { EVENTS } from "../constant";

interface CustomEditorProps {
  scheduler: SchedulerHelpers;
}

const CustomEditor = ({ scheduler }: CustomEditorProps) => {
  const user = useAuth();
  const event = scheduler.edited;

  // Make your own form/state
  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || "",
  });
  const [error, setError] = useState("");

  const handleChange = (value: string, name: string) => {
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    // Your own validation
    if (state.title.length < 3) {
      return setError("Min 3 letters");
    }

    try {
      scheduler.loading(true);

      console.log(typeof scheduler.state.start.value);

      /**Simulate remote data saving */
      const added_updated_event = (await new Promise((res) => {
        setTimeout(() => {
          res({
            event_id: event?.event_id || Math.random(),
            title: state.title,
            start: scheduler.state.start.value,
            end: scheduler.state.end.value,
            description: state.description,
          });
        }, 3000);
      })) as ProcessedEvent;

      const response = await axios.post("/api/calendar", {
        title: added_updated_event.title,
        description: added_updated_event.description,
        userId: user.userId,
      });

      console.log(response.data);

      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <p className="">Load your custom form/fields</p>
        <TextField
          className="mt-4 m-2"
          label="Title"
          value={state.title}
          onChange={(e) => handleChange(e.target.value, "title")}
          error={!!error}
          helperText={error}
          fullWidth
        />
        <TextField
          className="mt-4 m-2"
          label="Description"
          value={state.description}
          onChange={(e) => handleChange(e.target.value, "description")}
          fullWidth
        />
      </div>
      <DialogActions>
        <Button onClick={scheduler.close}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </div>
  );
};

const CalendarPage = () => {
  const sidebar = useSideBar();
  const sidemenu = useSideMenu();

  const fetchRemote = async (query: any): Promise<ProcessedEvent[]> => {
    console.log({ query });
    /**Simulate fetchin remote data */
    return new Promise((res: any) => {
      setTimeout(() => {
        res(EVENTS);
      }, 3000);
    });
  };

  const handleConfirm = async (
    event: ProcessedEvent,
    action: EventActions
  ): Promise<ProcessedEvent> => {
    console.log("handleConfirm =", action, event.title);
    return new Promise((res, rej) => {
      if (action === "edit") {
        /** PUT event to remote DB */
      } else if (action === "create") {
        /**POST event to remote DB */
      }

      const isFail = Math.random() > 0.6;
      // Make it slow just for testing
      setTimeout(() => {
        if (isFail) {
          rej("Ops... Faild");
        } else {
          res({
            ...event,
            event_id: event.event_id || Math.random(),
          });
        }
      }, 3000);
    });
  };

  const handleDelete = async (deletedId: string): Promise<string> => {
    // Simulate http request: return the deleted id
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 3000);
    });
  };

  return (
    <>
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
            icon={Calendar}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
          />
        </div>
        <div className="mt-8 md:mx-8">
          <Scheduler
            getRemoteEvents={fetchRemote}
            onConfirm={handleConfirm}
            onDelete={handleDelete}
            customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
            viewerExtraComponent={(fields, event) => {
              return (
                <div>
                  <p>Useful to render custom fields...</p>
                  <p>Description: {event.description || "Nothing..."}</p>
                </div>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
