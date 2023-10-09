import axios from "axios";
import type { ProcessedEvent } from "@aldabil/react-scheduler/types";

export const EVENTS = async (): Promise<ProcessedEvent[]> => {
  try {
    const res = await axios.get("api/calendar");
    const eventsData = res.data.map((item:any) => ({
      event_id: item.id, // Use the 'id' field from your data as 'event_id'
      title: item.title,
      start: new Date(item.createdAt),
      end: new Date(item.createdAt),
      description: item.description,
    }));
    return eventsData;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
